import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    fcc: 'flex items-center justify-center',
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
