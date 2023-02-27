<template>
  <div class="p1 px-2 rounded-full text-sm row gap-1 w-max h-32px box-border transition-colors" :class="variantClasses">
    <component :is="p.icon" class="w-5 h-5" />
    <slot></slot>
    <XCircleIcon @click="$emit('close')" v-if="p.closable" class="w-4 h-4 cursor-pointer" />
  </div>
</template>

<script setup lang="ts">
import { XCircleIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue'
export interface Props {
  closable?: boolean
  icon?: any
  color?: 'primary' | 'success' | 'warn' | 'danger' | 'info'
  variant?: 'filled' | 'outline' | 'transparent'
}

const p = withDefaults(defineProps<Props>(), {
  color: 'primary',
  variant: 'transparent',
})

const colorClasses = computed(() => {
  if (p.color === 'primary') return 'bg-primary-500 text-primary-700 border-primary-600'
  if (p.color === 'danger') return 'bg-amber-500 text-amber-700 border-amber-600'
  if (p.color === 'warn') return 'bg-red-500 text-red-700 border-red-600'
  if (p.color === 'success') return 'bg-emerald-500 text-emerald-700 border-emerald-600'
  if (p.color === 'info') return 'bg-dark-500 text-dark-700 border-dark-600'
})

const variantClasses = computed(() => {
  if (p.variant === 'filled') return `border-none text-on-primary! ${colorClasses.value}`
  if (p.variant === 'outline') return `b-solid b-2 bg-transparent! ${colorClasses.value}`
  if (p.variant === 'transparent') return `bg-opacity-10 border-none ${colorClasses.value}`
})
</script>
