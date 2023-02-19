<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'
import IconArrowDown from '../icons/IconArrowDown.vue'

export type Option = {
  label: string
  value: string
}

export interface Props {
  options: Option[]
  modelValue?: string
  label?: string
}

const p = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void
}>()

const selectedOption = computed<Option | undefined>(() => {
  return p.options.find((i) => i.value === p.modelValue)
})
const isOpen = ref<boolean>(false)

// selection
function handleSelect(option: Option): void {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const selectRef = ref<HTMLElement | null>(null)
onClickOutside(selectRef, () => (isOpen.value = false))
</script>

<template>
  <div ref="selectRef" class="sui-select">
    <!-- select button -->
    <div @keyup.enter="isOpen = !isOpen" @click="isOpen = !isOpen" tabindex="0" class="sui-select-button">
      <span class="grow">
        {{ selectedOption?.label }}
      </span>
      <IconArrowDown class="transition-transform right-4 absolute" :class="{ 'rotate-180': isOpen }" />
      <!-- select label -->
      <span
        :class="{
          'floating-label': p.modelValue || isOpen,
          'text-gray-400': !isOpen,
        }"
        class="sui-select-label"
      >
        {{ p.label }}
      </span>
    </div>

    <!-- select menu -->
    <ul v-show="isOpen" class="sui-select-dropdown shadow">
      <li
        v-for="option in p.options"
        :key="option.label"
        class="sui-select-dropdown-item list-none"
        @click="handleSelect(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
