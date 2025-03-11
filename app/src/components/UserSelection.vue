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
        <option class="text-black" value="Inside">Inside</option>
        <option class="text-black" value="Outside">Outside</option>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedBorough = ref('')
const selectedInOrOut = ref('')
const selectedCategory = ref('')

const boroughs = [
  { label: 'Bronx', value: 'Bronx' },
  { label: 'Brooklyn', value: 'Brooklyn' },
  { label: 'Manhattan', value: 'Manhattan' },
  { label: 'Queens', value: 'Queens' },
  { label: 'Staten Island', value: 'Staten Island' },
]
const categories = [
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Industrial', value: 'industrial' },
]

const location = [
  { label: 'Apartment', value: 'apartment' },
  { label: 'Townhouse', value: 'townhouse' },
  { label: 'Condo', value: 'condo' },
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
