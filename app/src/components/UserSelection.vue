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
        <option value="" disabled selected class="text-gray-400">Time Start</option>
        <option v-for="time in times" :key="time.value" :value="time.value" class="text-black">
          {{ time.label }}
        </option>
      </select>
    </div>
    <div class="mr-[1rem]">
      <select v-model="selectedTimeEnd" class="p-2 border">
        <option value="" disabled selected class="text-gray-400">Time End</option>
        <option v-for="time in times" :key="time.value" :value="time.value" class="text-black">
          {{ time.label }}
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
console.log(categories[5].value)
const times = [
  { label: '12:00 AM', value: '00:00' },
  { label: '1:00 AM', value: '01:00' },
  { label: '2:00 AM', value: '02:00' },
  { label: '3:00 AM', value: '03:00' },
  { label: '4:00 AM', value: '04:00' },
  { label: '5:00 AM', value: '05:00' },
  { label: '6:00 AM', value: '06:00' },
  { label: '7:00 AM', value: '07:00' },
  { label: '8:00 AM', value: '08:00' },
  { label: '9:00 AM', value: '09:00' },
  { label: '10:00 AM', value: '10:00' },
  { label: '11:00 AM', value: '11:00' },
  { label: '12:00 PM', value: '12:00' },
  { label: '1:00 PM', value: '13:00' },
  { label: '2:00 PM', value: '14:00' },
  { label: '3:00 PM', value: '15:00' },
  { label: '4:00 PM', value: '16:00' },
  { label: '5:00 PM', value: '17:00' },
  { label: '6:00 PM', value: '18:00' },
  { label: '7:00 PM', value: '19:00' },
  { label: '8:00 PM', value: '20:00' },
  { label: '9:00 PM', value: '21:00' },
  { label: '10:00 PM', value: '22:00' },
  { label: '11:00 PM', value: '23:00' },
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
