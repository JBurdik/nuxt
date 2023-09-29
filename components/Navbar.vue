<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 z-50 bg-gray-900 px-10 py-5 text-white shadow-lg shadow-teal-900"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between">
      <h1>
        <IconChefHat /><span class="text-xl font-bold text-teal-400"
          >Nuxt cooking</span
        >
      </h1>
      <nav class="flex flex-row gap-5">
        <NuxtLink
          :class="{
            'bg-white font-semibold text-teal-700': route.path === '/'
          }"
          class="rounded-full px-3 py-1 uppercase tracking-wider hover:text-teal-500"
          to="/"
          >Home</NuxtLink
        >
        <NuxtLink
          :class="{
            'bg-white font-semibold text-teal-700': route.path === '/about'
          }"
          class="rounded-full px-3 py-1 uppercase tracking-wider hover:text-teal-500"
          to="/about"
          >About</NuxtLink
        >
        <NuxtLink
          :class="{
            'bg-white font-semibold text-teal-700': route.path === '/contact'
          }"
          class="rounded-full px-3 py-1 uppercase tracking-wider hover:text-teal-500"
          to="/contact"
          >Home</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>
