<template>
  <div class="sui-badge">
    <div v-if="p.dotOnly" :class="colorClasses" class="sui-badge-dot"></div>
    <template v-else>
      <div v-show="p.value" :class="colorClasses" class="sui-badge-value">
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
