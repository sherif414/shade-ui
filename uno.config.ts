import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    fcc: 'flex items-center justify-center',
    'sui-toast-layout': 'fixed left-50% top-70px -translate-x-50% fcc flex-col gap-4 z-9999',
    'sui-toast':
      'bg-black text-white text-sm fcc gap-2 px-4 py-2 rounded-4px transition duration-300 -translate-y-10px opacity-0',
    'sui-toast-content': 'max-w-45ch truncate',
  },
  // ...
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
