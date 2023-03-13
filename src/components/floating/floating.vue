<template>
  <Transition :name="props.transition">
    <div
      v-bind="$attrs"
      :style="{
        top: `${y ?? 0}px`,
        left: `${x ?? 0}px`,
        position: strategy,
      }"
      v-show="visible"
      ref="floatingEl"
      class="w-max z-1"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useFloating, size, shift, flip, autoUpdate, offset, type Placement } from '@floating-ui/vue'
import { onClickOutside, useEventListener, useVModel } from '@vueuse/core'
import { watch, onMounted, ref, toRef, type Ref } from 'vue'

const props = defineProps<{
  reference?: HTMLElement | null
  visible?: boolean
  offset?: number
  transition?: string
  placement?: Placement
}>()

const emit = defineEmits(['update:visible'])
const referenceEl = toRef(props, 'reference')
const floatingEl = ref<HTMLElement | null>(null)
const isFloatingElVisible = useVModel(props, 'visible', emit, { eventName: 'update:visible' })

useEventListener(referenceEl, 'click', () => {
  isFloatingElVisible.value = !isFloatingElVisible.value
})
onClickOutside(
  floatingEl,
  () => {
    isFloatingElVisible.value = false
  },
  { ignore: [referenceEl] }
)

const { strategy, x, y } = useFloating(referenceEl, floatingEl, {
  placement: props.placement || 'bottom-start',
  whileElementsMounted: autoUpdate,
  middleware: [
    size({
      apply({ rects, elements }) {
        elements.floating.style.width = `${Math.round(rects.reference.width)}px`
      },
    }),
    offset(props.offset || 0),
    flip(),
    shift({ padding: 8 }),
  ],
  open: isFloatingElVisible,
})

defineExpose({
  floatingEl,
})
</script>
