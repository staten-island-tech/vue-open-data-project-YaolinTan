<template>
  <div>
    <DataFetch @data-loaded="handleData" />
    <Button>Gun Crimes Timeline (24-Hour Period)</Button>
    <button>Gun Crime Proportion (24-Hour-Period)</button>
  </div>
</template>

<script setup>
import DataFetch from './DataFetch.vue'
import { ref } from 'vue'

const combinedData = ref([])

const handleData = (data) => {
  combinedData.value = data
  console.log('Received data:', combinedData.value)
}
</script>

<style scoped></style>
