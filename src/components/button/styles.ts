// @unocss-include
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

export const buttonCVA = cva('button', {
  variants: {
    intent: {
      filled: 'sui-button-v-filled',
      outline: 'sui-button-v-outline',
      text: 'sui-button-v-text',
    },
    size: {
      sm: 'px-8 h-8 text-xs gap-2',
      md: 'px-10 h-10 text-sm gap-2',
      lg: 'px-12 h-12 text-base gap-4',
      iconOnly: 'p-3',
    },
  },

  // compoundVariants: [{ size: 'md', class: 'primaryMedium' }],
})

export type ButtonCVAProps = Required<VariantProps<typeof buttonCVA>>
