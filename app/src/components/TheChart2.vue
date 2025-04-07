<template>
  <div>
    <DataFetch @data-loaded="handleData" />
    <h1>Incident Pie Chart</h1>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { Chart, registerables } from 'chart.js'
import DataFetch from './DataFetch.vue'

const props = defineProps(['selectedBorough'])
const combinedData = ref([])
const chartRef = ref(null)
let chartInstance = null

const handleData = (data) => {
  combinedData.value = data
  updateChart()
}

Chart.register(...registerables)

function convertTo12HourFormat(time24) {
  const [hours, minutes] = time24.split(':')
  const hour = parseInt(hours, 10)
  const suffix = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${suffix}`
}

function countIncidentsByHour(data) {
  const hourlyCounts = {
    '12 AM': 0,
    '1 AM': 0,
    '2 AM': 0,
    '3 AM': 0,
    '4 AM': 0,
    '5 AM': 0,
    '6 AM': 0,
    '7 AM': 0,
    '8 AM': 0,
    '9 AM': 0,
    '10 AM': 0,
    '11 AM': 0,
    '12 PM': 0,
    '1 PM': 0,
    '2 PM': 0,
    '3 PM': 0,
    '4 PM': 0,
    '5 PM': 0,
    '6 PM': 0,
    '7 PM': 0,
    '8 PM': 0,
    '9 PM': 0,
    '10 PM': 0,
    '11 PM': 0,
  }

  data.forEach((item) => {
    const time24 = item.occur_time
    if (!time24) return

    const time12 = convertTo12HourFormat(time24)
    const hour = time12.split(':')[0] + ' ' + time12.split(' ')[1]
    if (hourlyCounts[hour] != undefined) {
      hourlyCounts[hour]++
    }
  })

  return hourlyCounts
}

const updateChart = () => {
  const hourlyCounts = countIncidentsByHour(combinedData.value)

  const labels = Object.keys(hourlyCounts)
  const data = Object.values(hourlyCounts)

  if (chartInstance) {
    chartInstance.destroy()
  }

  if (chartRef.value) {
    chartInstance = new Chart(chartRef.value, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Incidents',
            data: data,
            backgroundColor: labels.map((_, i) => `hsl(${i * 15}, 70%, 60%)`),
            borderColor: '#fff',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
        },
      },
    })
  }
}
</script>
