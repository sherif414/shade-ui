<template>
  <label :for="inputId" ref="checkboxRef" class="sui-checkbox-wrapper">
    <input
      :name="p.name"
      :value="p.value"
      :checked="p.modelValue"
      :id="inputId"
      class="sui-checkbox"
      @change="handleChange"
      ref="inputRef"
      type="checkbox"
    />
    <svg class="sui-checkbox-svg" width="24" height="24" viewBox="0 0 24 24" filter="url(#goo-light)">
      <path ref="tickRef" class="sui-checkbox-tick" d="M4.5 10L10.5 16L24.5 1" />
      <circle ref="dotRef" class="sui-checkbox-dot" cx="10.5" cy="15.5" r="1.5" />
    </svg>
    <span>{{ p.label }}</span>
    <svg width="0" height="0">
      <defs>
        <filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
        </filter>
      </defs>
    </svg>
  </label>
</template>

<script setup lang="ts">
import { timeline } from 'motion'
import { onMounted, watch, ref } from 'vue'

export interface Props {
  label?: string
  modelValue?: boolean
  name?: string
  value?: string
}
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const p = defineProps<Props>()

const inputRef = ref<HTMLInputElement | null>(null)
const checkboxRef = ref<HTMLInputElement | null>(null)
const tickRef = ref<SVGPathElement | null>(null)
const dotRef = ref<SVGCircleElement | null>(null)

function handleChange(e: Event) {
  emit('update:modelValue', Boolean((e.target as HTMLInputElement)?.checked))
}

async function animation() {
  if (!inputRef.value || !dotRef.value || !tickRef.value) return

  if (inputRef.value.checked) {
    await timeline([
      [
        inputRef.value,
        { boxShadow: ['inset 0 0 0 3px var(--c-border-active)', 'inset 0 0 0 12px var(--c-border-active)'] },
        { duration: 0.2 },
      ],
      [checkboxRef.value!, { borderTopRightRadius: [null, '14px', '8px'] }, { duration: 0.4 }],
      [
        tickRef.value!,
        {
          strokeDashoffset: ['20.5px', '48px', '46.5px'],
          strokeDasharray: ['16.5px 33px', '14px 33px', '16.5px 33px'],
        },
        { duration: 1, at: '-1' },
      ],
      [dotRef.value!, { x: [14, 0], y: [-14, 0], scale: 1, z: 0 }, { duration: 0.4, at: '-0.75' }],
    ]).finished

    const elements = [inputRef.value, dotRef.value, checkboxRef.value, tickRef.value]
    elements.forEach((el) => {
      el?.removeAttribute('style')
    })
  }
}

watch(() => p.modelValue, animation, { flush: 'post' })

const inputId = `${p.label}-${Math.round(Math.random() * 1000)}`
</script>

<style>
.sui-checkbox-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
}
.sui-checkbox {
  appearance: none;
  outline: none;
  border: none;
  display: block;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border-radius: inherit;
  width: 24px;
  height: 24px;
  box-shadow: inset 0 0 0 2px var(--c-border-base);
}
.sui-checkbox-wrapper .sui-checkbox-svg {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  fill: white;
  pointer-events: none;
  transform: scale(1.01) translateZ(0);
}
.sui-checkbox:checked {
  box-shadow: inset 0 0 0 12px var(--c-border-active);
}
.sui-checkbox:focus-visible {
  outline: 2px solid var(--c-border-active);
}
.sui-checkbox:not(:checked) {
  transition: box-shadow 0.25s;
}
.sui-checkbox:not(:checked):hover {
  box-shadow: inset 0 0 0 3px var(--c-border-active);
}
.sui-checkbox:checked + .sui-checkbox-svg .sui-checkbox-tick {
  stroke-dashoffset: 46.5px;
}

.sui-checkbox-tick {
  fill: none;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: white;
  stroke-dasharray: 16.5px 33px;
  stroke-dashoffset: 20.5px;
  transform-origin: 10.5px 16px;
  transform: scale(1) translateZ(0);
}
.sui-checkbox-dot {
  transform-origin: 10.5px 15.5px;
  transform: translate(14px, -14px) scale(1) translateZ(0);
}
</style>
