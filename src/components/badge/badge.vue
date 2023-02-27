<template>
  <div class="sui-badge relative">
    <div
      v-if="p.dotOnly"
      :class="colorClasses"
      class="sui-badge-dot z-1 w-4 h-4 rounded-full bg-blue absolute right--6px top--6px pointer-events-none border-2 border-solid border-white"
    ></div>
    <template v-else>
      <div
        v-if="typeof p.value === 'number' && p.value !== 0"
        :class="colorClasses"
        class="sui-badge-value min-w-4 h-4.5 center z-1 text-xs rounded-full text-on-primary px-1 bg-blue absolute left-full translate-x--50% bottom-full translate-y-50% pointer-events-none border-2 border-solid border-white"
      >
        {{ formatValue }}
      </div>
    </template>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  value?: number
  color?: 'primary' | 'warn' | 'success' | 'danger' | 'info'
  cap?: number
  dotOnly?: boolean
}

const p = withDefaults(defineProps<Props>(), {
  color: 'info',
})

const colorClasses = computed(() => {
  return `bg-${p.color}`
})

const formatValue = computed(() => {
  if (p.cap && p.value) {
    return p.value > p.cap ? `+${p.cap}` : p.value
  } else {
    return p.value
  }
})
</script>

<style scoped></style>
