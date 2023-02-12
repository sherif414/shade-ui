import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: [
    // common
    {
      center: 'flex items-center justify-center',
      column: 'flex flex-col items-center',
      row: 'flex flex-row items-center',
      'floating-label': 'scale-80 text-gray-900 translate-y--160% translate-x--4',
    },
    // input-input
    {
      's-input':
        'grow bg-transparent border-none outline rounded-1 h-10 w-full outline-gray-200 outline-1 read-only:(pointer-events-none outline-transparent bg-light-400) disabled:(cursor-not-allowed outline-transparent bg-light-900) px-4 transition-colors placeholder:text-sm focus:(outline-dark-600 outline-2) read-only:focus:(outline-gray-200 outline-1 cursor-default)',
      's-input-label': 'w-max text-gray-400 text-sm transition duration-300 pointer-events-none absolute',
      's-input-wrapper': '',
    },
    {
      // toast
      'sui-toast-layout': 'fixed left-50% top-70px -translate-x-50% center flex-col gap-4 z-9999 pointer-events-none',
      'sui-toast': ' text-sm center gap-2 px-4 h-9 rounded-4px transition-all -translate-y-2.5 opacity-0',
      'sui-toast-content': 'max-w-500px truncate',
      'toast-warn': 'bg-yellow bg-opacity-10 text-yellow shadow',
      'toast-success': 'bg-green bg-opacity-10 text-green shadow',
      'toast-error': 'bg-red bg-opacity-10 text-red shadow',
      'toast-info': 'bg-blue bg-opacity-10 text-blue shadow',
      'toast-notification': 'bg-blue bg-opacity-10 text-blue shadow',
    },
  ],
  // ...
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
