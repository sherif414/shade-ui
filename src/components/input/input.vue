<template>
  <div :class="[p.class, 'column items-start gap-1']">
    <!-- label -->
    <label :for="p.id || inputId" v-if="p.label" :class="[fontSizeClasses, 'sui-input-label']">{{ p.label }}</label>

    <!-- input wrapper -->
    <div
      ref="inputWrapperEl"
      @click="emit('click')"
      :class="[
        p.error && 'text-red-400! ',
        isFocused ? 'text-primary-600' : 'text-on-surface-muted',
        inputWrapperSizeClasses,
        p.inputWrapperClass,
        'sui-input-wrapper',
      ]"
    >
      <!-- prepend icon -->
      <div v-if="$slots.iconPrepend" class="sui-input-icon left-0">
        <slot name="iconPrepend" />
      </div>

      <!-- input -->
      <input
        ref="inputEl"
        v-bind="fallThroughAttrs"
        :placeholder="p.placeholder"
        @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
        :class="[
          { 'pl-4': !$slots.iconPrepend, 'pr-4': !$slots.iconAppend, 'outline-red-400!': p.error },
          p.inputClass,
          inputPaddingClasses,
        ]"
        class="sui-input"
        :id="p.id || inputId"
        :type="p.type"
        :disabled="p.disabled"
        :readonly="p.readonly"
        :value="p.modelValue"
      />

      <!-- appended icon -->
      <div v-if="$slots.iconAppend" class="sui-input-icon right-0">
        <slot name="iconAppend" />
      </div>
    </div>

    <!-- hint & error -->
    <small v-if="showErrorOrHint" :class="[p.error ? 'text-red-400' : 'text-on-surface-muted', 'text-xs pl-2']">
      {{ p.error ? p.errorMessage || p.hint : p.hint }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { useFocus } from '@vueuse/core'
import { useAttrs, computed, ref, useSlots } from 'vue'

export interface Props {
  label?: string
  placeholder?: string
  modelValue?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'url'
  modelModifiers?: { lazy?: boolean }
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  errorMessage?: string
  hint?: string
  class?: string
  inputClass?: string
  inputWrapperClass?: string
  size?: 'sm' | 'md' | 'lg'
  id?: string
}

defineOptions({
  name: 'SInput',
  inheritAttrs: false,
})

// props, emits, attrs
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

const showErrorOrHint = computed(() => {
  if (p.hint) return true
  if (p.error && p.errorMessage) return true
  return false
})

// computed classes
const inputWrapperSizeClasses = computed(() => {
  if (p.size === 'sm') return 'sui-input-size-sm'
  if (p.size === 'md') return 'sui-input-size-md'
  if (p.size === 'lg') return 'sui-input-size-lg'
})

const inputPaddingClasses = computed(() => {
  if (p.size === 'sm') return `${slots.iconPrepend ? 'pl-10' : 'pl-4'} ${slots.iconAppend ? 'pr-10' : 'pr-4'}`
  if (p.size === 'md') return `${slots.iconPrepend ? 'pl-11' : 'pl-4'} ${slots.iconAppend ? 'pr-11' : 'pr-4'}`
  if (p.size === 'lg') return `${slots.iconPrepend ? 'pl-12' : 'pl-4'} ${slots.iconAppend ? 'pr-12' : 'pr-4'}`
})

const fontSizeClasses = computed(() => {
  if (p.size === 'sm') return 'text-xs'
  if (p.size === 'md') return 'text-sm'
  if (p.size === 'lg') return 'text-base'
})

// input attributes
// ❕ vue doesn't provide .lazy modifier for custom component v-model
const eventType = p.modelModifiers?.lazy ? 'change' : 'input'
const inputId = `${p.label}-${Math.round(Math.random() * 1000)}`
const inputEl = ref<HTMLInputElement | null>(null)
const inputWrapperEl = ref<HTMLDivElement | null>(null)
const { focused: isFocused } = useFocus(inputEl)

defineExpose({
  inputEl,
  inputWrapperEl,
})
</script>
