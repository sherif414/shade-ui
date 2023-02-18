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
  <div ref="selectRef" class="relative w-full text-sm text-gray-900">
    <!-- select button -->
    <div
      @keyup.enter="isOpen = !isOpen"
      @click="isOpen = !isOpen"
      tabindex="0"
      class="bg-transparent border-none flex outline rounded-1 h-10 w-full outline-1 outline-gray-200 px-4 transition-colors relative items-center justify-between focus:outline-dark-600 focus:outline-2"
    >
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
        class="transition duration-300 left-4 pointer-events-none absolute"
      >
        {{ p.label }}
      </span>
    </div>

    <!-- select menu -->
    <ul
      v-show="isOpen"
      class="bg-white border flex flex-col min-w-full rounded-1 w-max w-full max-h-48 top-110% left-0 z-1 absolute overflow-y-auto"
    >
      <li
        v-for="option in p.options"
        :key="option.label"
        class="py-2 px-4 hover:bg-light-600"
        @click="handleSelect(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sui-select-container {
  position: relative;
  font-size: var(--s-font-size-sm);
}
.sui-select {
}
</style>
