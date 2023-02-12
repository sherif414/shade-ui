<script setup lang="ts">
import ILoading from './icons/ILoading.vue'

const props = withDefaults(
  defineProps<{
    loading?: boolean
    variant?: 'text' | 'default'
    size?: 'sm' | 'md' | 'lg'
    type?: 'submit' | 'button'
  }>(),
  {
    size: 'md',
    variant: 'default',
    type: 'button',
  }
)

// !SECTION styles
const slots = useSlots()
const sizeClasses = computed<string>(() => {
  if (!slots.default && slots.icon) return 'h-10 px-3 text-sm'

  if (props.size === 'sm') return 'px-6 h-8 text-xs'

  if (props.size === 'lg') return 'px-12 h-12 text-base'

  return 'px-10 h-40px text-sm'
})

const variantClasses = computed(() => {
  if (props.variant === 'default') {
    return 'hover:bg-dark-400 disabled:bg-gray-200! bg-dark-900 text-gray-100'
  }

  if (props.variant === 'text') {
    return 'hover:bg-light-600 active:bg-light-900'
  }
})
</script>

<template>
  <button
    :type="type"
    class="border-none cursor-pointer font-medium outline outline-transparent rounded-4px leading-none outline-2 outline-offset-2 transition fcc whitespace-nowrap capitalize active:scale-95 focus-visible:outline-dark-800 disabled:(cursor-not-allowed text-gray-400)"
    :class="[variantClasses, sizeClasses]"
  >
    <ILoading class="absolute!" v-if="loading" />
    <div class="gap-2 fcc" :class="{ 'opacity-0': loading }">
      <slot name="icon" />
      <slot />
    </div>
  </button>
</template>
