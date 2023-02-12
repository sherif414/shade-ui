<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    modelValue?: string
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'time' | 'url'
    modelModifiers?: { lazy?: boolean }
    class?: string
    error?: boolean
    errorMessage?: string
  }>(),
  {
    type: 'text',
    label: undefined,
    modelValue: undefined,
    modelModifiers: () => ({}),
    class: '',
    errorMessage: undefined,
  }
)

defineEmits(['update:modelValue'])
const fallthroughClasses = computed(() => props.class)
const eventType = computed(() => (props.modelModifiers.lazy ? 'change' : 'input'))
</script>

<template>
  <label :class="[fallthroughClasses]" class="flex items-center relative h-10">
    <div v-if="$slots.icon" class="absolute w-10 h-full fcc">
      <slot name="icon"></slot>
    </div>
    <input
      ref="inputEl"
      v-bind="$attrs"
      placeholder=" "
      @[eventType]="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      class="grow bg-transparent border-none outline peer rounded-1 h-full w-full outline-gray-2 outline-1 px-4 transition-colors placeholder:text-sm focus:(outline-dark-600 outline-2)"
      :class="[{ 'outline-red-400!': error, 'pl-10': $slots.icon }]"
      :type="type"
    />
    <span
      v-if="label"
      class="w-max text-gray text-sm transition duration-300 pointer-events-none absolute"
      :class="[
        error && 'text-red-400!',
        $slots.icon
          ? 'peer-not-placeholder-shown:floating-label peer-focus:floating-label left-10'
          : 'peer-not-placeholder-shown:(floating-label translate-x--4) peer-focus:(floating-label translate-x--4) left-4',
      ]"
      >{{ label }}</span
    >
  </label>
  <p v-if="error" class="text-xs text-red-400">
    {{ props.errorMessage }}
  </p>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
