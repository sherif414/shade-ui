<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'filled' | 'text'
  }>(),
  {
    variant: 'filled',
  }
)

const variantClasses = computed(() => {
  return props.variant === 'filled'
    ? 'bg-purple-700 text-gray-100 hover:bg-purple-800 focus:outline-purple-600 outline-transparent rounded-4 outline-2 outline outline-offset-2 px-7 py-4'
    : 'bg-transparent text-dark-100 hover:underline outline-none font-medium focus:underline'
})
</script>

<template>
  <button
    type="button"
    class="cursor-pointer border-none text-sm capitalize leading-none transition active:scale-95"
    :class="variantClasses"
  >
    <slot></slot>
  </button>
</template>
