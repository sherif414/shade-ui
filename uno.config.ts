import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    fcc: 'flex items-center justify-center',
    // form elements

    // form-input
    'sui-input':
      'rounded-4px outline-gray-2 focus:(outline-dark-600 outline-2) h-10 w-full border-none bg-transparent px-2 outline outline-1 transition-colors placeholder:text-sm',
    'sui-input-label':
      'text-gray pointer-events-none absolute top-3 left-3 h-max px-1 text-sm leading-none transition-all duration-300',

    // form-select
    'sui-select':
      'rounded-4px outline-gray-2 focus-visible:(outline-dark-600 outline-2) [&[open="true"]]:(outline-dark-600 outline-2) h-10 w-full border-none bg-transparent px-4 outline outline-1 transition-colors flex justify-start items-center',
    'sui-select-label':
      'text-gray pointer-events-none absolute top-3 left-3 h-max px-1 text-sm leading-none transition-all duration-300',

    // toast
    'sui-toast-layout': 'fixed left-50% top-70px -translate-x-50% fcc flex-col gap-16px z-9999 pointer-events-none',
    'sui-toast': ' text-sm fcc gap-2 px-4 h-36px rounded-4px transition-all -translate-y-10px opacity-0',
    'sui-toast-content': 'max-w-500px truncate',
    'toast-warn': 'bg-yellow bg-opacity-10 text-yellow shadow',
    'toast-success': 'bg-green bg-opacity-10 text-green shadow',
    'toast-error': 'bg-red bg-opacity-10 text-red shadow',
    'toast-info': 'bg-blue bg-opacity-10 text-blue shadow',
    'toast-notification': 'bg-blue bg-opacity-10 text-blue shadow',
  },
  // ...
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
