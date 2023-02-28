import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { theme, shortcuts, variants } from './src/preset'

export default defineConfig({
  theme,
  shortcuts,
  variants,
  // ...
  transformers: [transformerVariantGroup(), transformerDirectives()],
  safelist: [
    'bg-primary',
    'bg-warn',
    'bg-danger',
    'bg-success',
    'bg-info',
    'text-primary',
    'text-danger',
    'text-success',
    'text-warn',
    'text-info',
    'toast-danger',
    'toast-info',
    'toast-notification',
    'toast-success',
    'toast-warn',
  ],
})
