<script lang="ts" setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export type SelectOption = {
  label: string
  value: any
}

defineProps<{
  options: SelectOption[]
}>()

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selected = ref()
const selectMenuRef = ref<HTMLElement | null>(null)

onClickOutside(selectMenuRef, () => (isOpen.value = false))

function handleSelect(option: SelectOption) {
  selected.value = option
  emit('update:modelValue', option.value)
  isOpen.value = false
}
</script>

<template>
  <div class="relative text-sm">
    <!-- select button -->
    <div
      @keyup.enter="isOpen = !isOpen"
      @click="isOpen = !isOpen"
      :open="isOpen"
      ref="triggerButton"
      tabindex="0"
      class="sui-select min-w-100px"
    >
      {{ selected?.label || '' }}
    </div>

    <!-- select label -->
    <span class="sui-select-label"> <slot /> </span>

    <!-- select menu -->
    <ul
      v-if="isOpen"
      ref="selectMenuRef"
      class="top-110% z-1 rounded-4px absolute min-w-full w-max left-0 flex w-full flex-col gap-2 border bg-white max-h-175px overflow-y-auto"
    >
      <li
        class="hover:(bg-dark-900 text-gray-100) py-2 px-4"
        @click="handleSelect(option)"
        v-for="option in options"
        :key="option.label"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sui-select:not(:placeholder-shown) ~ .sui-select-label {
  color: gray;
}

.sui-select:focus ~ .sui-select-label {
  color: black;
}

.sui-select[open='true'] ~ .sui-select-label,
.sui-select:focus ~ .sui-select-label,
.sui-select:not(:empty) ~ .sui-select-label,
.sui-select-label-up {
  transform: translateY(-20px);
  background: white;
  font-size: 0.75rem;
}
</style>
