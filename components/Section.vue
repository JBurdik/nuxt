<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    titleCenter: {
      type: Boolean,
      default: false,
      required: false
    },
    full: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      validator: (value: string) => ['light', 'dark'].includes(value),
      required: false,
      default: 'dark'
    }
  }
})
</script>
<template>
  <section
    :class="[
      full ? 'w-full px-10' : 'max-w-6xl',
      background === 'light' ? 'bg-gray-800' : '',
      'mx-auto my-10 py-20'
    ]"
  >
    <div class="mx-auto max-w-6xl">
      <div
        :class="[
          titleCenter ? 'mx-auto w-fit border-b border-teal-500 pb-4' : '',
          'mb-4 flex flex-row items-center gap-4'
        ]"
      >
        <h1 class="text-teal-600"><IconTriangle /></h1>
        <h1 class="text-3xl">{{ title }}</h1>
      </div>
      <slot />
    </div>
  </section>
</template>
