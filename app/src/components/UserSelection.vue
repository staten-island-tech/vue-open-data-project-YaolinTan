<template>
  <div>
    <div class="relative inline-block">
      <button
        @click="toggleDropdown"
        class="px-4 py-2 bg-gray-500 text-white rounded-lg focus:outline-none"
      >
        Borough
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
        Borough
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
        Borough
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
        Borough
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
