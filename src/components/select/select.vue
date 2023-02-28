<script lang="ts" setup>
import { onClickOutside, useFocus } from '@vueuse/core'
import { computed, ref } from 'vue'
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
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
  size?: 'sm' | 'md' | 'lg'
  options?: Option[]
  icon?: any
}

const p = withDefaults(defineProps<Props>(), {
  size: 'md',
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['modelValue']): void
}>()

// selection
function handleSelect(option: Option): void {
  if (option.disabled) return
  emit('update:modelValue', option)
  isDropdownVisible.value = false
}

const isDropdownVisible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const selectRef = ref<HTMLElement | null>(null)
const { focused: isFocus } = useFocus(triggerRef)

onClickOutside(selectRef, () => {
  isDropdownVisible.value = false
})
function toggleDropdown() {
  if (p.disabled) return
  isDropdownVisible.value = !isDropdownVisible.value
}

// computed classes
const selectSizeClasses = computed(() => {
  if (p.size === 'sm') return 'sui-select-size-sm'
  if (p.size === 'md') return 'sui-select-size-md'
  if (p.size === 'lg') return 'sui-select-size-lg'
})

const labelSizeClasses = computed(() => ({
  'left-8': p.size === 'sm' && p.icon,
  'left-10': p.size === 'md' && p.icon,
  'left-12': p.size === 'lg' && p.icon,
}))
</script>

<template>
  <div>
    <div ref="selectRef" :data-sui-disabled="p.disabled" :class="[selectSizeClasses, 'sui-select-wrapper']">
      <div
        ref="triggerRef"
        :tabindex="disabled ? '-1' : '0'"
        :data-sui-disabled="p.disabled"
        :class="[
          {
            'outline-red-400! text-red-400!': p.error && !p.disabled,
          },
          'sui-select-trigger ',
        ]"
        @click="toggleDropdown"
      >
        <!-- label -->
        <div
          :class="[
            labelSizeClasses,
            {
              'floating-label!': modelValue?.label || isFocus,
            },
            'sui-select-label',
          ]"
        >
          {{ p.label }}
        </div>

        <!-- prepended icon -->
        <div class="sui-select-icon left-0" v-if="p.icon">
          <Component :is="p.icon" />
        </div>

        <!-- value -->
        <div :class="[p.disabled ? 'text-on-disabled' : 'text-on-surface', 'grow']">{{ p.modelValue?.label }}</div>

        <!-- appended icon -->
        <div class="sui-select-icon right-0">
          <ChevronDownIcon :class="[{ 'rotate-180': isDropdownVisible }, 'transition-transform']" />
        </div>
      </div>

      <!-- dropdown -->
      <Transition
        enter-from-class="translate-y--3 opacity-0"
        leave-to-class="translate-y--3 opacity-0"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-300"
      >
        <ul v-show="isDropdownVisible" class="sui-select-dropdown">
          <slot :handleSelect="handleSelect">
            <li
              v-for="option in p.options"
              :key="option.label"
              class="sui-select-dropdown-item"
              :class="[p.modelValue?.label === option.label ? 'bg-neutral-100 text-primary-600' : '']"
              @click="handleSelect(option)"
              :data-sui-disabled="option.disabled"
            >
              {{ option.label }}
              <CheckCircleIcon class="w-3 h-3" v-if="p.modelValue?.label === option.label" />
            </li>
          </slot>
        </ul>
      </Transition>
    </div>

    <!-- hint & error -->
    <small
      v-if="p.error || p.hint"
      :class="[p.error ? 'text-red-400' : 'text-on-surface-muted', p.disabled && 'text-on-disabled!', 'text-xs pl-2']"
    >
      {{ p.error ? p.errorMessage || p.hint : p.hint }}
    </small>
  </div>
</template>
