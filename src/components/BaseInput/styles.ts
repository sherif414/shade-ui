import { cva } from 'class-variance-authority'
export type { VariantProps } from 'class-variance-authority'

const baseInput = cva('base-input', {
  variants: {
    intent: {
      primary: 'primary',
      secondary: 'secondary',
    },
    size: {
      small: 'small',
      medium: 'medium',
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'primaryMedium' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})
