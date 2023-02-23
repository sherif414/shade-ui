// @unocss-include
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
/** 
gray: {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
},

  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
*/

export default defineConfig({
  theme: {
    boxShadow: {
      dropdown: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    colors: {
      disabled: '#f3f4f6',
      primary: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      on: {
        primary: '#f3f4f6',
        disabled: '#d1d5db',
        surface: {
          DEFAULT: '#111827',
          muted: '#9ca3af',
        },
      },
    },
  },
  shortcuts: [
    // common
    {
      center: 'flex items-center justify-center',
      column: 'flex flex-col items-center',
      row: 'flex flex-row items-center',
      'floating-label': 'scale-80 top--0.5 left-1 bg-white',
    },
    // button
    {
      'sui-button':
        'center border-none cursor-pointer outline outline-transparent rounded-3 leading-none transition whitespace-nowrap capitalize active-enabled:scale-95 focus-visible:(outline-primary-700 outline-2) disabled:(cursor-not-allowed bg-disabled! text-on-disabled!)',
      'sui-button-v-filled': 'hover:bg-primary-800 bg-primary-700 text-on-primary focus-visible:outline-offset-2',
      'sui-button-v-text': 'hover:bg-neutral-100 bg-transparent',
      'sui-button-v-outline':
        'hover:bg-primary-100 bg-transparent outline-1 outline-neutral-200 disabled:outline-transparent',
      'sui-button-size-sm': 'px-4 h-9 text-xs gap-2',
      'sui-button-size-md': 'px-6 h-11 text-sm gap-2',
      'sui-button-size-lg': 'px-8 h-12 text-base gap-4',
      'sui-button-icon-only': 'h-10 px-3 text-sm',
    },
    // input-input
    {
      'sui-input-wrapper': 'relative w-full row justify-start',
      'sui-input':
        'text-on-surface grow bg-transparent border-none outline rounded-3 w-full outline-neutral-200 outline-1 disabled:(cursor-not-allowed! outline-transparent bg-disabled text-on-disabled) px-4 transition-colors focus:(outline-primary-700 outline-2)',
      'sui-input-size-sm': 'h-9 text-xs',
      'sui-input-size-md': 'h-11 text-sm',
      'sui-input-size-lg': 'h-13 text-base',
      'sui-input-icon': 'absolute top-50% translate-y--50% aspect-square h-full center pointer-events-none',
      'sui-input-label':
        'w-max px-1 left-3 top-50% translate-y--50% transition-all duration-200 pointer-events-none absolute peer-not-placeholder-shown:floating-label peer-focus:floating-label peer-disabled:text-on-disabled',
    },
    // select
    {
      'sui-select-wrapper': 'relative w-full',

      'sui-select-trigger':
        'text-on-surface-muted gap-4 relative row bg-transparent border-none outline rounded-3 w-full outline-neutral-200 outline-1 px-4 transition-colors cursor-pointer sui-disabled:(bg-disabled! text-on-disabled! outline-transparent! pointer-events-none)',

      'sui-select-size-sm': '[&_.sui-select-trigger]:h-9 text-xs [&_.sui-select-icon_>_*]:(w-3 h-3)',
      'sui-select-size-md': '[&_.sui-select-trigger]:h-11 text-sm [&_.sui-select-icon_>_*]:(w-4 h-4)',
      'sui-select-size-lg': '[&_.sui-select-trigger]:h-13 text-base [&_.sui-select-icon_>_*]:(w-5 h-5)',

      'sui-select-icon': 'aspect-square center',

      'sui-select-label':
        'w-max px-1 left-3 top-50% translate-y--50% transition-all duration-200 pointer-events-none absolute',

      'sui-select-dropdown':
        ' list-none bg-white border flex flex-col shadow-dropdown rounded-3 w-full max-h-50 top-115% left-0 z-1 absolute overflow-y-auto p-0 m-0',

      'sui-select-dropdown-item':
        'min-h-10 px-4 row cursor-pointer row justify-between gap-2 transition-all duration-300 ease-out sui-disabled:(text-on-disabled! cursor-default!) hover-sui-enabled:(bg-neutral-100 pl-5)',
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
  variants: [
    // disabled:
    (matcher) => {
      if (!matcher.startsWith('sui-disabled:')) return matcher
      return {
        matcher: matcher.slice(13),
        selector: (s) => `${s}:disabled, ${s}[data-disabled="true"]`,
      }
    },
    // enabled
    (matcher) => {
      if (!matcher.startsWith('sui-enabled:')) return matcher
      return {
        matcher: matcher.slice(12),
        selector: (s) => `${s}:enabled, ${s}[data-disabled="false"]`,
      }
    },
  ],
  // ...
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
