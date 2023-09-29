<template>
  <div
    @click="() => (isOpen = false)"
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm"
  ></div>
  <div
    v-if="isOpen"
    class="fixed inset-1/2 flex translate-x-1/2 translate-y-1/2 items-center justify-center"
  >
    <div class="rounded-xl bg-gray-700">
      <h1 class="w-full border-b border-white px-5 py-2 text-2xl">
        {{ title }}
      </h1>
      <div class="max-w-lg px-10 py-5">
        <NewRecipe :refetch="refetch" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    refetch: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isOpen: useState('isOpen')
    }
  }
})
</script>
