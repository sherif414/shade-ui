<script setup lang="ts">
import { useAttrs, computed } from 'vue'

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
  iconPrepend?: any
  iconAppend?: any
}

// 👉 props, emits, attrs
const p = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
})

const emit = defineEmits<{
  (event: 'click'): void
  (event: 'update:modelValue'): void
}>()

const { class: _, ...fallThroughAttrs } = useAttrs()

// 👉 computed classes
const sizeClasses = computed(() => {
  if (p.size === 'sm') return `sui-input-size-sm ${p.iconPrepend ? 'pl-9' : ''} ${p.iconAppend ? 'pr-9' : ''}`
  if (p.size === 'md') return `sui-input-size-md ${p.iconPrepend ? 'pl-11' : ''} ${p.iconAppend ? 'pr-11' : ''}`
  if (p.size === 'lg') return `sui-input-size-lg ${p.iconPrepend ? 'pl-13' : ''} ${p.iconAppend ? 'pr-13' : ''}`
})

const labelClasses = computed(() => {
  if (p.iconPrepend) {
    return {
      'text-xs left-8': p.size === 'sm',
      'text-sm left-10': p.size === 'md',
      'text-base left-12': p.size === 'lg',
    }
  }
})

// 👉 input attributes
// ❕ vue doesn't provide .lazy modifier for custom component v-model
const eventType = computed(() => (p.modelModifiers?.lazy ? 'change' : 'input'))
const inputId = `${p.label}-${Math.round(Math.random() * 1000)}`
</script>

<template>
  <div :class="[p.error && 'text-red-400!', p.class, 'column items-start gap-1 w-full relative']">
    <div @click="emit('click')" class="sui-input-wrapper">
      <!-- 👉 input -->
      <input
        ref="inputEl"
        v-bind="fallThroughAttrs"
        placeholder=" "
        @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
        :class="[{ 'outline-red-400!': p.error }, sizeClasses, 'sui-input peer']"
        :id="inputId"
        :type="p.type"
        :disabled="p.disabled"
        :readonly="p.readonly"
        :value="p.modelValue"
      />
      <!-- 👉 prepend icon -->
      <div v-if="p.iconPrepend" class="sui-input-icon left-0 peer-focus:text-primary-700!">
        <Component
          :class="{ 'w-3 h-3': p.size === 'sm', 'w-4 h-4': p.size === 'md', 'w-5 h-5': p.size === 'lg' }"
          :is="p.iconPrepend"
        />
      </div>

      <!-- 👉 label -->
      <label
        :for="inputId"
        v-if="p.label"
        :class="[
          labelClasses,
          'sui-input-label',
          { 'text-xs': p.size === 'sm', 'text-sm': p.size === 'md', 'text-base': size === 'lg' },
        ]"
        >{{ p.label }}</label
      >

      <!-- 👉 appended icon -->
      <div v-if="p.iconAppend" class="sui-input-icon right-0 peer-focus:text-primary-700!">
        <Component
          :class="{ 'w-3 h-3': p.size === 'sm', 'w-4 h-4': p.size === 'md', 'w-5 h-5': p.size === 'lg' }"
          :is="p.iconAppend"
        />
      </div>
    </div>

    <!-- 👉 hint & error -->
    <small v-if="p.error || p.hint" :class="[!p.error && 'text-gray-400', 'text-xs']">
      {{ p.error ? p.errorMessage || p.hint : p.hint }}
    </small>

    <slot name="dropdown"></slot>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
