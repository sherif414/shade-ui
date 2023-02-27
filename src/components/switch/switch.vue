<template>
  <div ref="wrapperRef" class="sui-switch-wrapper inline-block">
    <input
      v-bind="$attrs"
      :name="p.name"
      :value="p.value"
      v-model="data"
      class="sui-switch transition-colors duration-300"
      :class="data ? 'bg-primary-600' : 'bg-neutral-200'"
      ref="inputRef"
      type="checkbox"
    />
    <svg ref="svgRef" class="sui-switch-svg" viewBox="0 0 38 24" filter="url(#goo)">
      <circle ref="leftDotRef" class="sui-switch-dot-left" cx="12" cy="12" r="8" />
      <circle ref="rightDotRef" class="sui-switch-dot-right" cx="26" cy="12" r="8" />
    </svg>
    <svg class="pointer-events-none hidden" width="0" height="0">
      <defs>
        <filter id="goo" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { animate, timeline } from 'motion'
import { ref, watch } from 'vue'
export interface Props {
  modelValue?: boolean | any[] | Set<any>
  name?: string
  value?: string
}
const p = withDefaults(defineProps<Props>(), {
  modelValue: false,
})
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const data = useVModel(p, 'modelValue', emit)

const leftDotRef = ref<SVGAElement | null>(null)
const rightDotRef = ref<SVGAElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

async function animation() {
  if (!inputRef.value || !rightDotRef.value || !leftDotRef.value) return

  if (inputRef.value.checked) {
    animate(leftDotRef.value, { scale: [1, 0], x: [0, 8] }, { duration: 0.3, delay: 0.15 })
    await animate(rightDotRef.value, { scale: [0, 1], x: [-8, 2] }, { duration: 0.3 }).finished
    await animate(rightDotRef.value, { x: [null, 0] }, { duration: 0.2 }).finished
  } else {
    animate(rightDotRef.value, { scale: [1, 0], x: [0, -8] }, { duration: 0.3, delay: 0.15 })
    await animate(leftDotRef.value, { scale: [0, 1], x: [8, -2] }, { duration: 0.3 }).finished
    await animate(leftDotRef.value, { x: [null, 0] }, { duration: 0.2 }).finished
  }
  const elements = [inputRef.value, rightDotRef.value, leftDotRef.value]
  elements.forEach((el) => {
    el.removeAttribute('style')
  })
}

watch(() => p.modelValue, animation, { flush: 'post' })
</script>

<style>
.sui-switch-dot-left {
  transform-origin: 12px 12px;
  transform: translateX(0px) scale(1) translateZ(0);
}
.sui-switch-dot-right {
  transform-origin: 26px 12px;
  transform: translateX(-8px) scale(0) translateZ(0);
}
.sui-switch:checked + .sui-switch-svg .sui-switch-dot-left {
  transform: translateX(8px) scale(0) translateZ(0);
}
.sui-switch:checked + .sui-switch-svg .sui-switch-dot-right {
  transform: translateX(0px) scale(1) translateZ(0);
}
</style>
