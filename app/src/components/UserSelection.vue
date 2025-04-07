<template>
  <div class="flex justify-center mt-[2rem]">
    <div class="mr-[1rem]">
      <select v-model="selectedBorough" @change="emitSelection" class="p-2 border">
        <option class="text-gray-400" value="" disabled>Select a Borough</option>
        <option
          class="text-black"
          v-for="borough in boroughs"
          :key="borough.value"
          :value="borough.value"
        >
          {{ borough.label }}
        </option>
      </select>
    </div>
    <div class="mr-[1rem]">
      <select v-model="selectedTimeStart" class="p-2 border">
        <option value="" disabled class="text-gray-500">Time Start</option>
        <option v-for="time in times" :key="time.value" :value="time.value" class="text-black">
          {{ time.label }}
        </option>
      </select>
    </div>
    <div class="mr-[1rem]">
      <select v-model="selectedTimeEnd" class="p-2 border">
        <option value="" disabled class="text-gray-300">Time End</option>
        <option v-for="time in times" :key="time.value" :value="time.value" class="text-black">
          {{ time.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import times from '../time'

const emit = defineEmits(['update:selectedBorough'])

const selectedBorough = ref('')
const selectedTimeStart = ref('')
const selectedTimeEnd = ref('')

const boroughs = [
  { label: 'Bronx', value: 'BRONX' },
  { label: 'Brooklyn', value: 'BROOKLYN' },
  { label: 'Manhattan', value: 'MANHATTAN' },
  { label: 'Queens', value: 'QUEENS' },
  { label: 'Staten Island', value: 'STATEN ISLAND' },
]

const emitSelection = () => {
  emit('update:selectedBorough', selectedBorough.value)
}
</script>
