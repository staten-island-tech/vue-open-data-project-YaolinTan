<template>
  <div class="flex justify-center mt-[2rem]">
    <div class="mr-[1rem]">
      <select v-model="selectedBorough" class="p-2 border">
        <option class="text-gray-400" value="" disabled selected>Select a Borough</option>
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
      <select v-model="selectedInOrOut" class="p-2 border">
        <option value="" disabled selected class="text-gray-400">Inside/Outside</option>
        <option class="text-black" value="INSIDE">Inside</option>
        <option class="text-black" value="OUTSIDE">Outside</option>
      </select>
    </div>
    <div class="mr-[1rem]">
      <select v-model="selectedCategory" class="p-2 border">
        <option value="" disabled selected class="text-gray-400">Location Category</option>
        <option
          v-for="category in categories"
          :key="category.value"
          :value="category.value"
          class="text-black"
        >
          {{ category.label }}
        </option>
      </select>
    </div>
    <div class="mr-[1rem]">
      <select v-model="selectedTimeStart" class="p-2 border">
        <option value="" disabled selected class="text-gray-500">Time Start</option>
        <option v-for="time in times" :key="time.value" :value="time.value" class="text-black">
          {{ time.label }}
        </option>
      </select>
    </div>
    <div class="mr-[1rem]">
      <select v-model="selectedTimeEnd" class="p-2 border">
        <option value="" disabled selected class="text-gray-300">Time End</option>
        <option v-for="time in times" :key="time.value" :value="time.value" class="text-black">
          {{ time.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import times from '../time'

defineProps({
  times: Array,
})

const selectedBorough = ref('')
const selectedInOrOut = ref('')
const selectedCategory = ref('')
const selectedTimeStart = ref('')
const selectedTimeEnd = ref('')

const boroughs = [
  { label: 'Bronx', value: 'BRONX' },
  { label: 'Brooklyn', value: 'BROOKLYN' },
  { label: 'Manhattan', value: 'MANHATTAN' },
  { label: 'Queens', value: 'QUEENS' },
  { label: 'Staten Island', value: 'STATEN ISLAND' },
]
const categories = [
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Industrial', value: 'industrial' },
  { label: 'Transit', value: 'TRANSIT' },
  { label: 'Street', value: 'STREET' },
  { label: 'Housing/Dwelling', value: 'Housing', value: 'Dwelling' },
]
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
