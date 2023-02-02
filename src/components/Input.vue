<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    modelValue?: string
  }>(),
  {}
)
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="relative">
    <input
      v-bind="$attrs"
      placeholder=" "
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      class="sui-input rounded-4 outline-gray-2 focus:(outline-purple-600 outline-2) py-10PX w-full border-none bg-transparent p-4 outline outline-1 transition-colors"
      type="text"
    />
    <span
      class="sui-input-label text-gray-5 pointer-events-none absolute top-3 left-4 h-max px-1 leading-none transition-all duration-300"
      >{{ label }}</span
    >
  </label>
</template>

<style>
.sui-input:not(:placeholder-shown) ~ .sui-input-label {
  color: gray;
}

.sui-input:focus ~ .sui-input-label {
  color: rgb(147, 51, 234);
}

.sui-input:not(:placeholder-shown) ~ .sui-input-label,
.sui-input:focus ~ .sui-input-label {
  transform: translateY(-20px);
  background: white;
  font-size: 12px;
}
</style>
