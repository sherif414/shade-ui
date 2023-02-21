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

// 👉 props, emits, attrs, slots

const p = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
})

const emit = defineEmits<{
  (event: 'click'): void
  (event: 'update:modelValue'): void
}>()

const { class: _, ...fallThroughAttrs } = useAttrs()

const slots = useSlots()

// 👉 computed classes
const sizeClasses = computed(() => {
  if (p.size === 'sm') return 'sui-input-size-sm'
  if (p.size === 'md') return 'sui-input-size-md'
  if (p.size === 'lg') return 'sui-input-size-lg'
  return 'sui-input-size-md'
})

const labelClasses = computed(() => {
  if (slots.iconPrepend) {
    return 'peer-not-placeholder-shown:(floating-label) peer-focus:(floating-label text-primary-700!) left-10'
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
  <div :class="[p.error && 'text-red-400!', p.class, 'column items-start gap-1 w-full relative']">
    <div @click="emit('click')" class="sui-input-wrapper">
      <!-- 👉 input -->
      <input
        ref="inputEl"
        v-bind="fallThroughAttrs"
        placeholder=" "
        @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
        :class="[
          {
            'outline-red-400!': p.error,
            'pl-10': $slots.iconPrepend,
            'pr-10': $slots.iconAppend,
          },
          sizeClasses,
          'sui-input peer',
        ]"
        :id="inputId"
        :type="p.type"
        :disabled="p.disabled"
        :readonly="p.readonly"
        :value="p.modelValue"
      />
      <!-- 👉 prepend icon -->
      <div v-if="$slots.iconPrepend" class="sui-input-icon-prepend peer-focus:text-primary-700!">
        <slot name="iconPrepend"></slot>
      </div>

      <!-- 👉 label -->
      <label :for="inputId" v-if="p.label" :class="[labelClasses, 'sui-input-label']">{{ p.label }}</label>

      <!-- 👉 appended icon -->
      <div v-if="$slots.iconAppend" class="sui-input-icon-append peer-focus:text-primary-700!">
        <slot name="iconAppend"></slot>
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
