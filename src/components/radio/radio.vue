<template>
  <div class="sui-radio-wrapper inline-block">
    <input type="radio" ref="radioRef" v-bind="$attrs" v-model="data" class="sui-radio" />
    <svg
      class="block absolute top-0 left-0 pointer-events-none fill-white scale-101 translate-z-0 w-24px h-24px"
      viewBox="0 0 24 24"
      filter="url(#goo-light)"
    >
      <circle
        ref="topRef"
        class="top translate-z-0 translate-y-0 scale-x-175 scale-y-100 origin-[12px_-12px]"
        cx="12"
        cy="-12"
        r="8"
      />
      <circle ref="dotRef" class="dot translate-y--17px translate-z-0" cx="12" cy="12" r="5" />
      <circle ref="dropRef" class="drop translate-y--14px translate-z-0" cx="12" cy="12" r="2" />
    </svg>
    <svg class="pointer-events-none hidden" width="0" height="0">
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
import { ref, watch } from 'vue'
import { timeline, animate } from 'motion'
import { useVModel } from '@vueuse/core'

export interface Props {
  modelValue?: string
}

const p = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
const data = useVModel(p, 'modelValue', emit)
watch(data, animation, { flush: 'post' })

const radioRef = ref<HTMLInputElement | null>(null)
const topRef = ref<SVGCircleElement | null>(null)
const dotRef = ref<SVGCircleElement | null>(null)
const dropRef = ref<SVGCircleElement | null>(null)
async function animation() {
  if (!radioRef.value?.checked) return
  if (!radioRef.value || !topRef.value || !dotRef.value || !dropRef.value) return

  await animate(
    radioRef.value,
    { boxShadow: ['inset 0 0 0 3px #d1d5db', 'inset 0 0 0 12px var(--un-shadow-color)'] },
    { duration: 0.3 }
  ).finished
  timeline([
    [topRef.value, { y: [0, 6], scaleX: [1, 1.75], scaleY: [1.25, 1] }, { duration: 0.2 }],
    [topRef.value, { y: [6, 0], scaleX: [1.75, 1], scaleY: [1, 1.25] }, { duration: 0.6 }],
  ])

  await timeline([
    [dotRef.value, { y: [-17, 2, 0] }, { duration: 0.6 }],
    [dropRef.value, { y: [-14, 0] }, { duration: 0.6, at: '-0.4' }],
  ]).finished

  const elements = [radioRef.value, topRef.value, dotRef.value, dropRef.value]
  elements.forEach((el) => {
    el.removeAttribute('style')
  })
}
</script>
