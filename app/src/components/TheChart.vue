<template>
  <div>
    <DataFetch @data-loaded="handleData" />
    <h1>Incident Histogram</h1>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Chart, registerables } from 'chart.js'
import DataFetch from './DataFetch.vue'

const combinedData = ref([])
const chartRef = ref(null)
let chartInstance = null

// Handle incoming data from the DataFetch component
const handleData = (data) => {
  combinedData.value = data
  console.log('Received data:', combinedData.value)
  updateChart()
}

Chart.register(...registerables)

// Function to convert 24-hour time to 12-hour format (AM/PM)
function convertTo12HourFormat(time24) {
  const [hours, minutes] = time24.split(':')
  const hour = parseInt(hours, 10)
  const suffix = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12 // Convert 0 to 12 for AM
  return `${hour12}:${minutes} ${suffix}`
}

// Function to count incidents by hour intervals
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
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Incidents',
            data: data,
            backgroundColor: 'rgba(75, 191, 192, 0.3)',
            borderColor: 'rgba(70, 192, 193, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }
}

watch(combinedData, updateChart)
</script>

<style lang="scss" scoped></style>
