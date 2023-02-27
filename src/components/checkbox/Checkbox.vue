<template>
  <div ref="checkboxRef" class="sui-checkbox-wrapper inline-block">
    <input
      :disabled="p.disabled"
      :value="p.value"
      v-model="data"
      v-bind="$attrs"
      class="sui-checkbox"
      :class="[p.disabled && 'cursor-not-allowed!']"
      ref="inputRef"
      type="checkbox"
    />
    <svg class="sui-checkbox-svg" width="24" height="24" viewBox="0 0 24 24" filter="url(#goo-light)">
      <path
        stroke-linecap="round"
        stroke-dasharray="16.5 33"
        stroke-dashoffset="20.5"
        stroke-linejoin="round"
        ref="checkRef"
        class="sui-checkbox-check"
        d="M4.5 10L10.5 16L24.5 1"
      />
      <circle ref="dotRef" class="sui-checkbox-dot" cx="10.5" cy="15.5" r="1.5" />
    </svg>
    <svg class="hidden pointer-events-none" width="0" height="0">
      <defs>
        <filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { timeline } from 'motion'
import { watch, ref } from 'vue'

export interface Props {
  label?: string
  modelValue?: boolean
  value?: string
  disabled?: boolean
}
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const p = defineProps<Props>()

const inputRef = ref<HTMLInputElement | null>(null)
const checkboxRef = ref<HTMLInputElement | null>(null)
const checkRef = ref<SVGPathElement | null>(null)
const dotRef = ref<SVGCircleElement | null>(null)

const data = useVModel(p, 'modelValue', emit)
async function animation() {
  if (!inputRef.value || !dotRef.value || !checkRef.value) return

  if (inputRef.value.checked) {
    await timeline([
      [
        inputRef.value,
        { boxShadow: ['inset 0 0 0 3px #d1d5db', 'inset 0 0 0 12px var(--un-shadow-color)'] },
        { duration: 0.2 },
      ],
      [checkboxRef.value!, { borderTopRightRadius: [null, '14px', '8px'] }, { duration: 0.4, at: '-0.2' }],
      [
        checkRef.value!,
        {
          strokeDashoffset: ['20.5px', '48px', '46.5px'],
          strokeDasharray: ['16.5px 33px', '14px 33px', '16.5px 33px'],
        },
        { duration: 1, at: '-1' },
      ],
      [dotRef.value!, { x: [14, 0], y: [-14, 0], scale: 1, z: 0 }, { duration: 0.4, at: '-0.75' }],
    ]).finished

    const elements = [inputRef.value, dotRef.value, checkboxRef.value, checkRef.value]
    elements.forEach((el) => {
      el?.removeAttribute('style')
    })
  }
}

watch(() => p.modelValue, animation, { flush: 'post' })
</script>

<style>
.sui-checkbox:checked + .sui-checkbox-svg .sui-checkbox-check {
  stroke-dashoffset: 46.5px;
}
</style>
