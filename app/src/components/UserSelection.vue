<template>
  <div>
    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none"
      >
        <h2>Borough</h2>
      </button>
      <div
        v-if="isOpen"
        class="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg"
      >
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Bronx</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Brooklyn</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Manhattan</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Queens</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Staten Island</a>
      </div>
    </div>
    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none"
      >
        <h2>Location Class</h2>
      </button>
      <div
        v-if="isOpen"
        class="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg"
      >
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Inside</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Outside</a>
      </div>
    </div>
    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none"
      >
        <h2>Location Type</h2>
      </button>
      <div
        v-if="isOpen"
        class="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg"
      >
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Commercial</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Transit</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Vehicle</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Street</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">Housing/Dwelling</a>
      </div>
    </div>
    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none"
      >
        Time
      </button>
      <div
        v-if="isOpen"
        class="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg"
      >
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">12:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">1:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">2:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">3:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">4:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">5:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">6:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">7:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">8:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">9:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">10:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">11:00 AM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">12:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">1:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">2:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">3:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">4:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">5:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">6:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">7:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">8:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">9:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">10:00 PM</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">11:00 PM</a>
      </div>
    </div>
  </div>
</template>

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
