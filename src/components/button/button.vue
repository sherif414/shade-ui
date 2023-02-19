<script setup lang="ts">
import ILoading from '@/components/icons/ILoading.vue'
import { computed } from 'vue'

export interface Props {
  loading?: boolean
  disabled?: boolean
  variant?: 'text' | 'filled'
  size?: 'sm' | 'md' | 'lg'
  type?: 'submit' | 'button'
  iconOnly?: boolean
}

const p = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'filled',
  type: 'button',
})

const emit = defineEmits<{
  (e: 'click', event: Event): void
}>()

// !SECTION styles
const sizeClasses = computed<string>(() => {
  if (p.iconOnly) return 'sui-button-icon-only'

  if (p.size === 'sm') return 'sui-button-size-sm'

  if (p.size === 'md') return 'sui-button-size-md'

  if (p.size === 'lg') return 'sui-button-size-lg'

  return 'sui-button-size-md'
})

const variantClasses = computed(() => {
  if (p.variant === 'filled') {
    return 'sui-button-v-filled'
  }

  if (p.variant === 'text') {
    return 'sui-button-v-text'
  }
})

function handleClick(e: Event) {
  if (p.disabled || p.loading) return
  emit('click', e)
}
</script>

<template>
  <button
    @click="handleClick"
    :disabled="p.disabled"
    :type="p.type"
    class="sui-button"
    :class="[variantClasses, sizeClasses]"
  >
    <ILoading class="absolute!" v-if="p.loading" />
    <div :class="[p.loading && 'opacity-0', 'center gap-2']">
      <slot />
    </div>
  </button>
</template>
