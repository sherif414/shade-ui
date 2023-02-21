<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'
import { Input } from '@/components/input'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

export type Option = {
  label: string
  value: any
  disabled?: boolean
}

export interface Props {
  label?: string
  modelValue?: Option
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  errorMessage?: string
  hint?: string
  class?: string
  size?: 'sm' | 'md' | 'lg'
  options?: Option[]
}

const p = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Option | undefined): void
}>()

const isDropdownVisible = ref(false)

// selection
function handleSelect(option: Option): void {
  if (option.disabled) return
  emit('update:modelValue', option)
  isDropdownVisible.value = false
}

const selectRef = ref<HTMLElement | null>(null)
onClickOutside(selectRef, () => (isDropdownVisible.value = false))

function handleClick() {
  isDropdownVisible.value = !isDropdownVisible.value
}
</script>

<template>
  <div ref="selectRef" class="sui-select">
    <Input
      readonly
      :modelValue="p.modelValue?.label"
      :label="p.label"
      :size="p.size"
      :error="p.error"
      :errorMessage="p.errorMessage"
      :disabled="p.disabled"
      :hint="p.hint"
      style="cursor: default"
      @click="handleClick"
    >
      <!-- 👉 select icon -->
      <template v-if="$slots.icon" #iconPrepend>
        <slot name="icon"></slot>
      </template>

      <!-- 👉 select icon -->
      <template #iconAppend>
        <ChevronDownIcon :class="[isDropdownVisible && 'rotate-180', 'w-4 h-4']" />
      </template>

      <!-- 👉 select dropdown -->
      <template #dropdown>
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
      </template>
    </Input>
  </div>
</template>
