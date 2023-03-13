<script lang="ts" setup>
import { useFocus } from '@vueuse/core'
import { computed, ref } from 'vue'
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Floating } from '@/components/floating'
import { Input } from '@/components/input'

export type Option = {
  label: string
  value: any
  disabled?: boolean
}

export interface Props {
  label?: string
  modelValue?: Option
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  errorMessage?: string
  hint?: string
  size?: 'sm' | 'md' | 'lg'
  options?: Option[]
}

const p = withDefaults(defineProps<Props>(), {
  size: 'md',
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['modelValue']): void
}>()

// selection
function handleSelect(option: Option): void {
  if (option.disabled) return
  emit('update:modelValue', option)
  isDropdownVisible.value = false
}

const isDropdownVisible = ref(false)
const inputRef = ref<InstanceType<typeof Input> | null>(null)
const { focused: isFocus } = useFocus(inputRef.value?.inputEl)
</script>

<template>
  <Input
    ref="inputRef"
    v-bind="$attrs"
    :readonly="true"
    :error="p.error"
    :error-message="p.errorMessage"
    :disabled="p.disabled"
    :label="p.label"
    :hint="p.hint"
    :size="p.size"
    :model-value="p.modelValue?.label"
    input-class="cursor-pointer!"
  >
    <template v-if="$slots.icon" #iconPrepend>
      <slot name="icon"></slot>
    </template>
    <template #iconAppend>
      <ChevronDownIcon :class="[{ 'rotate-180': isDropdownVisible }, 'w-4 h-4 transition-transform']" />
    </template>
  </Input>

  <!-- dropdown -->
  <Transition
    enter-from-class="translate-y--3 opacity-0"
    leave-to-class="translate-y--3 opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
  >
    <Floating v-model:visible="isDropdownVisible" :offset="8" :reference="inputRef?.inputWrapperEl">
      <ul class="sui-select-dropdown">
        <slot :handleSelect="handleSelect">
          <li
            v-for="option in p.options"
            :key="option.label"
            class="sui-select-dropdown-item"
            :class="[p.modelValue?.label === option.label && 'bg-neutral-100 text-primary-600']"
            @click="handleSelect(option)"
            :data-sui-disabled="option.disabled"
          >
            {{ option.label }}
            <CheckCircleIcon class="w-3 h-3" v-if="p.modelValue?.label === option.label" />
          </li>
        </slot>
      </ul>
    </Floating>
  </Transition>
</template>
