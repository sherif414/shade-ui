<script setup lang="ts">
import { useAttrs, useSlots, computed } from 'vue'

export interface Props {
  label?: string
  modelValue?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'url'
  modelModifiers?: { lazy?: boolean }
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  errorMessage?: string
  hint?: string
  class?: string
  size?: 'sm' | 'md' | 'lg'
}

// 👉 props, attrs, slots

const p = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
})
const { class: _, ...fallThroughAttrs } = useAttrs()
const slots = useSlots()

// 👉 computed classes
const sizeClasses = computed(() => {
  if (p.size === 'sm') return 'sui-select-size-sm'

  if (p.size === 'md') return 'sui-select-size-md'

  if (p.size === 'lg') return 'sui-select-size-lg'

  return 'sui-select-size-md'
})

const labelClasses = computed(() => {
  if (slots.icon) {
    return 'peer-not-placeholder-shown:(floating-label translate-x--10!) peer-focus:(floating-label translate-x--10! text-primary-700!) left-10!'
  } else {
    return 'peer-not-placeholder-shown:floating-label peer-focus:(floating-label text-primary-700!)'
  }
})

// 👉 input attributes
// ❕ vue doesn't provide .lazy modifier for custom component v-model
const eventType = computed(() => (p.modelModifiers?.lazy ? 'change' : 'input'))
const inputId = `${p.label}-${Math.round(Math.random() * 1000)}`
</script>

<template>
  <div :class="[p.error && 'text-red-400!', p.class, 'column items-start gap-1 w-full']">
    <div class="sui-input-wrapper">
      <!-- 👉 appended icon -->
      <div v-if="$slots.icon" class="sui-input-icon">
        <slot name="icon"></slot>
      </div>

      <!-- 👉 input -->
      <input
        ref="inputEl"
        v-bind="fallThroughAttrs"
        placeholder=" "
        @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
        :class="[{ 'outline-red-400!': p.error, 'pl-10': $slots.icon }, sizeClasses, 'sui-input peer']"
        :id="inputId"
        :type="p.type"
        :disabled="p.disabled"
        :readonly="p.readonly"
        :value="p.modelValue"
      />

      <!-- 👉 label -->
      <label :for="inputId" v-if="p.label" :class="['sui-input-label', labelClasses]">{{ p.label }}</label>
    </div>

    <!-- 👉 hint & error -->
    <small v-if="p.error || p.hint" :class="[!p.error && 'text-gray-400', 'text-xs']">
      {{ p.error ? p.errorMessage || p.hint : p.hint }}
    </small>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
