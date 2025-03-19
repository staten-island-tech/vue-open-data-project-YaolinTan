<template>
  <div>
    <DataFetch @data-loaded="handleData" />
    <h1>Chart Example</h1>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import time from '../time'

import DataFetch from './DataFetch.vue'

const combinedData = ref([])

const handleData = (data) => {
  combinedData.value = data
  console.log('Received data:', combinedData.value)
}
Chart.register(...registerables)

const chartRef = ref(null)

onMounted(() => {
  if (chartRef.value) {
    new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
})
</script>

<style lang="scss" scoped></style>
