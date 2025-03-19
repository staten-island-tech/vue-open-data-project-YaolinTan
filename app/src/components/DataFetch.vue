<template>
  <div></div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue'

const data1 = ref([])
const data2 = ref([])
const emit = defineEmits(['data-loaded'])

async function fetchData() {
  try {
    const url = 'https://data.cityofnewyork.us/resource/5ucz-vwe8.json'

    const response1 = await fetch(url)
    if (!response1.ok) throw new Error(`HTTP error! Status: ${response1.status}`)
    data1.value = await response1.json()

    const response2 = await fetch(`${url}?$offset=1000`)
    if (!response2.ok) throw new Error(`HTTP error! Status: ${response2.status}`)
    data2.value = await response2.json()

    emit('data-loaded', [...data1.value, ...data2.value])
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(fetchData)

defineProps({
  data1: Array,
  data2: Array,
})
</script>

<style scoped></style>
