<template>
  <div></div>
</template>

<script setup>
async function fetchData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/7ym2-wayt.json')
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()
</script>

<style scoped></style>
