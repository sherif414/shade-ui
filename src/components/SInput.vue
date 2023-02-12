<script setup lang="ts">
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
}

// 👉 props, attrs, slots

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})
const { class: _, ...fallThroughAttrs } = useAttrs()
const slots = useSlots()

// 👉 computed classes

const labelClasses = computed(() => {
  if (slots.icon) {
    return 'peer-not-placeholder-shown:(floating-label translate-x--10) peer-focus:(floating-label translate-x--10) left-10'
  } else {
    return 'peer-not-placeholder-shown:floating-label peer-focus:floating-label left-4'
  }
})

// 👉 input attributes
// ❕ vue doesn't provide .lazy modifier for custom component v-model
const eventType = computed(() => (props.modelModifiers?.lazy ? 'change' : 'input'))
const inputId = `${props.label}-${Math.round(Math.random() * 1000)}`
</script>

<template>
  <div :class="[props.error && 'text-red-400!', props.class, 'column items-start gap-1']">
    <div class="h-10 relative w-full row justify-start">
      <!-- 👉 appended icon -->
      <div v-if="$slots.icon" class="absolute w-10 h-full center left-0">
        <slot name="icon"></slot>
      </div>

      <!-- 👉 input -->
      <input
        ref="inputEl"
        v-bind="fallThroughAttrs"
        placeholder=" "
        @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
        :class="[{ 'outline-red-400!': props.error, 'pl-10': $slots.icon }, 's-input peer']"
        :id="inputId"
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :value="modelValue"
      />

      <!-- 👉 label -->
      <label :for="inputId" v-if="props.label" class="s-input-label" :class="[labelClasses]">{{ props.label }}</label>
    </div>

    <!-- 👉 hint & error -->
    <small v-if="props.error || props.hint" :class="[!props.error && 'text-gray-400', 'text-xs']">
      {{ props.error ? props.errorMessage || props.hint : props.hint }}
    </small>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
