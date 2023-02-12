<script lang="ts" setup>
import { moduleExpression, optionalMemberExpression } from '@babel/types'
import { onClickOutside } from '@vueuse/core'

export type SelectOption = {
  label: string
  value: string
  checked: boolean
}

const props = defineProps<{
  options: SelectOption[]
  modelValue?: string | string[]
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[] | undefined): void
}>()

const selectedOption = ref<SelectOption>()
const isOpen = ref(false)

// selection
function handleSelect(option: SelectOption): void {
  if (Array.isArray(props.modelValue)) {
    // clicking an already selected option will deselect it
    if (option.checked)
      emit(
        'update:modelValue',
        props.modelValue.filter((v) => v !== option.value)
      )
    else emit('update:modelValue', [...props.modelValue, option.value])

    return
  }

  if (props.modelValue === option.value) {
    selectedOption.value = undefined
    emit('update:modelValue', undefined)
  } else {
    selectedOption.value = option
    emit('update:modelValue', option.value)
  }
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
      <IconChecked class="transition-transform right-4 absolute" :class="{ 'rotate-180': isOpen }" />
      <!-- select label -->
      <span
        :class="{
          'floating-label': typeof modelValue !== 'undefined' || isOpen,
          'text-gray-400': !isOpen,
        }"
        class="transition duration-300 left-4 pointer-events-none absolute"
      >
        {{ label }}
      </span>
    </div>

    <!-- select menu -->
    <ul
      v-show="isOpen"
      class="bg-white border flex flex-col min-w-full rounded-1 w-max w-full max-h-48 top-110% left-0 z-1 absolute overflow-y-auto"
    >
      <li
        v-for="option in options"
        :key="option.label"
        class="py-2 px-4 hover:(bg-dark-900 text-gray-100) flex items-center justify-between"
        @click="handleSelect(option)"
      >
        {{ option.label }}
        <svg
          v-if="selectedOption?.value === option.value"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
            fill="currentColor"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>
