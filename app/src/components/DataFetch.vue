<template>
  <div></div>
</template>

<script setup>
async function fetchData() {
  try {
    const url = 'https://data.cityofnewyork.us/resource/5ucz-vwe8.json'

    const response1 = await fetch(url)
    if (!response1.ok) {
      throw new Error(`HTTP error! Status: ${response1.status}`)
    }
    const data1 = await response1.json()

    const response2 = await fetch(`${url}?$offset=1000`)
    if (!response2.ok) {
      throw new Error(`HTTP error! Status: ${response2.status}`)
    }
    const data2 = await response2.json()

    console.log([...data1, ...data2])
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()
</script>

<style scoped></style>
