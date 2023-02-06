<script setup lang="ts">
import { computed, useSlots } from 'vue'
import ILoading from './icons/ILoading.vue'

export interface Props {
  loading?: boolean
  type?: 'text' | 'default'
  size?: 'sm' | 'md' | 'lg'
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  type: 'default',
  to: '',
})

// computed classes
const slots = useSlots()
const sizeClasses = computed(() => {
  // icon only
  if (!slots.default && slots.icon) return 'py-3 px-4 text-sm'

  if (props.size === 'sm') return 'px-6 h-8 text-xs'

  if (props.size === 'md') return 'px-10 h-10 text-sm'

  if (props.size === 'lg') return 'px-12 h-12 text-base'
})

const variantClasses = computed(() => {
  return {
    'hover:bg-dark-400 disabled:bg-gray-200! bg-dark-900  text-gray-100 active:scale-95': props.type === 'default',
    'text-dark-800 hover:underline active:scale-95': props.type === 'text',
  }
})

const href = props.to ? 'href' : ''
</script>

<template>
  <Component
    :is="to ? 'a' : 'button'"
    :[href]="to"
    type="button"
    class="rounded-4px fcc focus-visible:outline-dark-800 disabled:(cursor-not-allowed text-gray-400) cursor-pointer whitespace-nowrap border-none font-medium capitalize leading-none outline outline-2 outline-offset-2 outline-transparent transition"
    :class="[variantClasses, sizeClasses]"
  >
    <ILoading class="absolute!" v-if="loading" />
    <div class="fcc gap-2" :class="{ 'opacity-0': loading }">
      <slot name="icon"></slot>
      <slot></slot>
    </div>
  </Component>
</template>
