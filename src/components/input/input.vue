<script setup lang="ts">
import { useFocus } from '@vueuse/core'
import { useAttrs, computed, ref } from 'vue'

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

const iconSizeClasses = computed(() => {
  if (p.size === 'sm') return 'w-3 h-3'
  if (p.size === 'md') return 'w-4 h-4'
  if (p.size === 'lg') return 'w-5 h-5'
})

// input attributes
// ❕ vue doesn't provide .lazy modifier for custom component v-model
const eventType = computed(() => (p.modelModifiers?.lazy ? 'change' : 'input'))
const inputId = `${p.label}-${Math.round(Math.random() * 1000)}`
const inputEl = ref<HTMLInputElement | null>(null)
const { focused: isFocused } = useFocus(inputEl)
</script>

<template>
  <div :class="[p.class, 'column items-start gap-1 w-full relative']">
    <div
      @click="emit('click')"
      :class="[
        p.error && 'text-red-400!',
        isFocused ? 'text-primary-600' : 'text-on-surface-muted',
        'sui-input-wrapper',
      ]"
    >
      <!-- input -->
      <input
        ref="inputEl"
        v-bind="fallThroughAttrs"
        placeholder=" "
        @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
        :class="[{ 'outline-red-400!': p.error }, inputSizeClasses, 'sui-input peer']"
        :id="inputId"
        :type="p.type"
        :disabled="p.disabled"
        :readonly="p.readonly"
        :value="p.modelValue"
      />
      <!-- prepend icon -->
      <div v-if="p.iconPrepend" class="sui-input-icon left-0">
        <Component :class="iconSizeClasses" :is="p.iconPrepend" />
      </div>

      <!-- label -->
      <label :for="inputId" v-if="p.label" :class="[labelSizeClasses, 'sui-input-label']">{{ p.label }}</label>

      <!-- appended icon -->
      <div v-if="p.iconAppend" class="sui-input-icon right-0">
        <Component :class="iconSizeClasses" :is="p.iconAppend" />
      </div>
    </div>

    <!-- hint & error -->
    <small v-if="p.error || p.hint" :class="[p.error ? 'text-red-400' : 'text-on-surface-muted', 'text-xs pl-2']">
      {{ p.error ? p.errorMessage || p.hint : p.hint }}
    </small>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
