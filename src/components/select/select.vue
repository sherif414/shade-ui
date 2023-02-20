<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'
import IconArrowDown from '../icons/IconArrowDown.vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

export type Option = {
  label: string
  value: any
  disabled?: boolean
}

export interface Props {
  options?: Option[]
  modelValue?: Option
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const p = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Option | undefined): void
}>()

const isDropdownVisible = ref(false)

// computed classes
const sizeClasses = computed(() => {
  if (p.size === 'sm') return 'sui-select-size-sm'

  if (p.size === 'md') return 'sui-select-size-md'

  if (p.size === 'lg') return 'sui-select-size-lg'

  return 'sui-select-size-md'
})
// selection
function handleSelect(option: Option): void {
  if (option.disabled) return
  emit('update:modelValue', option)
  isDropdownVisible.value = false
}

const selectRef = ref<HTMLElement | null>(null)
onClickOutside(selectRef, () => (isDropdownVisible.value = false))
</script>

<template>
  <div ref="selectRef" class="sui-select">
    <!-- select button -->
    <div
      @keyup.enter="isDropdownVisible = !isDropdownVisible"
      @click="isDropdownVisible = !isDropdownVisible"
      tabindex="0"
      :class="[sizeClasses, $slots.icon && 'pl-0', 'sui-select-button']"
    >
      <div v-if="$slots.icon" class="center w-12 h-full">
        <slot name="icon" />
      </div>
      <span class="grow">
        {{ p.modelValue?.label }}
      </span>
      <ChevronDownIcon
        class="transition-transform right-4 absolute w-4 h-4"
        :class="{ 'rotate-180': isDropdownVisible, 'w-3! h-3!': size === 'sm' }"
      />
      <!-- select label -->
      <span
        :class="{
          'floating-label!': p.modelValue || isDropdownVisible,
          'left-10': $slots.icon,
        }"
        class="sui-select-label"
      >
        {{ p.label }}
      </span>
    </div>

    <!-- select dropdown -->
    <ul v-show="isDropdownVisible" class="sui-select-dropdown">
      <slot name="dropdown" :handleSelect="handleSelect">
        <li
          v-for="option in p.options"
          :key="option.label"
          :disabled="option.disabled"
          class="sui-select-dropdown-item"
          :class="option.disabled && 'text-gray-400! cursor-not-allowed! hover:bg-white!'"
          @click="handleSelect(option)"
        >
          {{ option.label }}
        </li>
      </slot>
    </ul>
  </div>
</template>
