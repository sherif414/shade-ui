<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    modelValue?: string
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'url'
    placeholder?: string
    modelModifiers?: { lazy?: boolean }
  }>(),
  {
    type: 'text',
    placeholder: ' ',
    modelModifiers: () => ({}),
  }
)

const eventType = computed(() => (props.modelModifiers.lazy ? 'change' : 'input'))
const inputEl = ref<HTMLInputElement | null>(null)

const errorMessage = ref<string>()
function validate() {
  errorMessage.value = inputEl.value?.validationMessage
}
</script>

<template>
  <label class="relative flex flex-col items-start gap-2">
    <input
      ref="inputEl"
      v-bind="$attrs"
      @blur="validate"
      @focus="errorMessage = undefined"
      :placeholder="placeholder"
      @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      class="sui-input rounded-4px outline-gray-2 focus:(outline-dark-600 outline-2) h-10 w-full border-none bg-transparent px-2 outline outline-1 transition-colors placeholder:text-sm"
      :class="[errorMessage && 'outline-red-400!']"
      :type="type"
    />
    <span
      v-if="label"
      class="sui-input-label text-gray pointer-events-none absolute top-3 left-3 h-max px-1 text-sm leading-none transition-all duration-300"
      :class="[placeholder !== ' ' ? 'sui-input-label-up' : '', errorMessage && 'text-red-400!']"
      >{{ label }}</span
    >
    <p class="text-xs text-red-400" :class="[!errorMessage && 'opacity-0!']">
      {{ errorMessage }}
    </p>
  </label>
</template>

<style>
.sui-input:not(:placeholder-shown) ~ .sui-input-label {
  color: gray;
}

.sui-input:focus ~ .sui-input-label {
  color: black;
}

.sui-input:not(:placeholder-shown) ~ .sui-input-label,
.sui-input:focus ~ .sui-input-label,
.sui-input-label-up {
  transform: translateY(-20px);
  background: white;
  font-size: 0.75rem;
}
</style>
