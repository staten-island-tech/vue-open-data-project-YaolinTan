<template>
  <div>
    <div>
      <select v-model="selectedBorough" class="p-2 border">
        <option>Select a Borough</option>
        <option
          class="text-black"
          v-for="borough in boroughs"
          :key="borough.value"
          :value="borough.value"
        >
          {{ borough.label }}
        </option>
      </select>
      <p>Selected Borough: {{ selectedBorough }}</p>
    </div>
    <div>
      <select>
        <option>Pick a location type</option>
        <option>
          <label>Inside</label>
          <label>Outside</label>
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedBorough = ref('')
const boroughs = [
  { label: 'Bronx', value: 'bronx' },
  { label: 'Brooklyn', value: 'brooklyn' },
  { label: 'Manhattan', value: 'manhattan' },
  { label: 'Queens', value: 'queens' },
  { label: 'Staten Island', value: 'staten_island' },
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
