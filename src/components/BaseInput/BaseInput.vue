<template>
  <div :class="[p.class, 'column items-start gap-1 w-full']">
    <!-- label -->
    <label :for="p.id || inputId" v-if="p.label" :class="[labelSizeClasses, 'sui-input-label']">{{ p.label }}</label>

    <!-- input wrapper -->
    <div
      ref="inputWrapperEl"
      @click="emit('click')"
      :class="[
        p.error && 'text-red-400!',
        isFocused ? 'text-primary-600 outline-(primary-600 2)' : 'text-on-surface-muted',
        inputSizeClasses,
        'sui-input-wrapper',
      ]"
    >
      <!-- prepend icon -->
      <div class="sui-input-icon">
        <slot name="icon" />
      </div>

      <!-- input -->
      <input
        ref="inputEl"
        v-bind="fallThroughAttrs"
        :placeholder="p.placeholder"
        @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
        :class="[{ 'outline-red-400!': p.error }, 'sui-input']"
        :id="p.id || inputId"
        :type="p.type"
        :disabled="p.disabled"
        :readonly="p.readonly"
        :value="p.modelValue"
      />

      <!-- appended icon -->
      <div class="sui-input-icon"></div>
    </div>

    <!-- hint & error -->
    <small v-if="p.error || p.hint" :class="[p.error ? 'text-red-400' : 'text-on-surface-muted', 'text-xs pl-2']">
      {{ p.error ? p.errorMessage || p.hint : p.hint }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { useFocus } from '@vueuse/core'
import { useAttrs, computed, ref } from 'vue'

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
  size?: 'sm' | 'md' | 'lg'
  iconPrepend?: any
  iconAppend?: any
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

// computed classes
const inputSizeClasses = computed(() => {
  if (p.size === 'sm') return `sui-input-size-sm ${p.iconPrepend ? 'pl-9' : ''} ${p.iconAppend ? 'pr-9' : ''}`
  if (p.size === 'md') return `sui-input-size-md ${p.iconPrepend ? 'pl-11' : ''} ${p.iconAppend ? 'pr-11' : ''}`
  if (p.size === 'lg') return `sui-input-size-lg ${p.iconPrepend ? 'pl-13' : ''} ${p.iconAppend ? 'pr-13' : ''}`
})

const labelSizeClasses = computed(() => {
  if (p.size === 'sm') return `text-xs ${p.iconPrepend ? 'left-8' : ''}`
  if (p.size === 'md') return `text-sm ${p.iconPrepend ? 'left-10' : ''}`
  if (p.size === 'lg') return `text-base ${p.iconPrepend ? 'left-12' : ''}`
})

// input attributes
// ❕ vue doesn't provide .lazy modifier for custom component v-model
const eventType = computed(() => (p.modelModifiers?.lazy ? 'change' : 'input'))
const inputId = `${p.label}-${Math.round(Math.random() * 1000)}`
const inputEl = ref<HTMLInputElement | null>(null)
const inputWrapperEl = ref<HTMLDivElement | null>(null)
const { focused: isFocused } = useFocus(inputEl)

defineExpose({
  inputEl,
  inputWrapperEl,
})
</script>

<style>
.sui-input::-webkit-outer-spin-button,
.sui-input::-webkit-inner-spin-button,
.sui-input {
  -webkit-appearance: none;
  -moz-appearance: textfield !important;
  appearance: none;
}
</style>
