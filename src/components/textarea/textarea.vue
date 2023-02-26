<template>
  <div :class="[p.class]" class="sui-textarea-wrapper">
    <textarea
      :value="p.modelValue"
      :disabled="p.disabled"
      :id="inputId"
      :readonly="p.readonly"
      ref="textareaRef"
      @[eventType]="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      v-bind="$attrs"
      class="sui-textarea h-100px"
      :class="[!p.resize && 'resize-none', p.error && 'outline-red-400!']"
    ></textarea>
    <label
      :class="{
        'left-0 top--3 scale-80 bg-white': isFocused || p.modelValue,
        'text-red-400!': p.error,
        'text-primary-600': isFocused,
      }"
      class="sui-textarea-label"
      :for="inputId"
      >{{ p.label }}</label
    >
    <small v-if="p.error || p.hint" :class="[p.error ? 'text-red-400' : 'text-on-surface-muted', 'text-xs pl-2']">
      {{ p.error ? p.errorMessage || p.hint : p.hint }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { useFocus } from '@vueuse/core'
import { computed, ref } from 'vue'

export interface Props {
  label?: string
  modelValue?: string
  modelModifiers?: { lazy?: boolean }
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  errorMessage?: string
  hint?: string
  class?: string
  resize?: boolean
}
const p = defineProps<Props>()

const eventType = computed(() => (p.modelModifiers?.lazy ? 'change' : 'input'))
const inputId = `${p.label}-${Math.round(Math.random() * 1000)}`
const textareaRef = ref<HTMLInputElement | null>(null)
const { focused: isFocused } = useFocus(textareaRef)
</script>

<style scoped></style>
