<script setup lang="ts">
import ILoading from '@/components/icons/ILoading.vue'
import { useSlots, computed } from 'vue'

export interface Props {
  loading?: boolean
  disabled?: boolean
  variant?: 'text' | 'default'
  size?: 'sm' | 'md' | 'lg'
  type?: 'submit' | 'button'
}

const p = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'default',
  type: 'button',
})

// !SECTION styles
const slots = useSlots()
const sizeClasses = computed<string>(() => {
  if (!slots.default && (slots.iconPrepend || slots.iconAppend)) return 'sui-button-icon-only'

  if (p.size === 'sm') return 'sui-button-size-sm'

  if (p.size === 'md') return 'sui-button-size-md'

  if (p.size === 'lg') return 'sui-button-size-lg'

  return 'sui-button-size-md'
})

const variantClasses = computed(() => {
  if (p.variant === 'default') {
    return 'sui-button-v-filled'
  }

  if (p.variant === 'text') {
    return 'sui-button-v-text'
  }
})
</script>

<template>
  <button :disabled="p.disabled || p.loading" :type="p.type" class="sui-button" :class="[variantClasses, sizeClasses]">
    <ILoading class="absolute!" v-if="p.loading" />
    <div :class="p.loading && 'opacity-0'">
      <slot name="iconPrepend" />
      <slot />
      <slot name="iconAppend" />
    </div>
  </button>
</template>
