<script lang="ts" setup>
import { computed, ref } from 'vue'

const isEmpty = ref(false)
const isFocused = ref(false)
const value = ref('1')
const isOpen = computed(() => {
  return isFocused.value
})
</script>

<template>
  <div class="relative text-sm">
    <!-- select button -->
    <div @focus="isFocused = true" :empty="isEmpty" tabindex="0" class="sui-input"></div>

    <!-- select label -->
    <span class="sui-input-label">
      <slot />
    </span>

    <!-- select menu -->
    <div v-if="isOpen" class="top-110% z-1 rounded-4px absolute left-0 flex w-full flex-col gap-2 border bg-white">
      <div class="hover:(bg-dark-900 text-gray-100) py-2 px-4 transition-colors" v-for="i in 4" :key="i">
        option {{ i }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.sui-input:not(:placeholder-shown) ~ .sui-input-label {
  color: gray;
}

.sui-input:focus ~ .sui-input-label {
  color: black;
}

.sui-input:not([empty]) ~ .sui-input-label,
.sui-input:focus ~ .sui-input-label,
.sui-input-label-up {
  transform: translateY(-20px);
  background: white;
  font-size: 0.75rem;
}
</style>
