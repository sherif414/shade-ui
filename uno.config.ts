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
    colors: {
      disabled: '#e5e7eb',
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
        disabled: '#9ca3af',
      },
    },
  },
  shortcuts: [
    // common
    {
      center: 'flex items-center justify-center',
      column: 'flex flex-col items-center',
      row: 'flex flex-row items-center',
      'floating-label': 'scale-85 top--0.5 left-3 bg-white',
    },
    // button
    {
      'sui-button':
        'center gap-2 border-none cursor-pointer font-medium outline outline-transparent rounded-4 leading-none outline-2 outline-offset-2 transition whitespace-nowrap capitalize active-enabled:scale-95 focus-visible:outline-primary-700 disabled:(cursor-not-allowed bg-disabled! text-on-disabled!)',
      'sui-button-v-filled': 'hover:bg-primary-800 bg-primary-700 text-on-primary',
      'sui-button-v-text': 'hover:bg-primary-100 bg-transparent',
      'sui-button-size-sm': 'px-4 h-9 text-xs',
      'sui-button-size-md': 'px-6 h-11 text-sm',
      'sui-button-size-lg': 'px-8 h-14 text-base',
      'sui-button-icon-only': 'h-10 px-3 text-sm',
    },
    // input-input
    {
      'sui-input-wrapper': 'relative w-full row justify-start',
      'sui-input':
        'grow bg-transparent border-none outline rounded-4 h-11 w-full outline-neutral-200 outline-1 read-only:(pointer-events-none outline-transparent bg-light-400) disabled:(cursor-not-allowed outline-transparent bg-light-900) px-4 transition-colors placeholder:text-sm focus:(outline-primary-700 outline-2) read-only:focus:(outline-gray-200 outline-1 cursor-default)',
      'sui-input-size-sm': 'h-9',
      'sui-input-size-md': 'h-11',
      'sui-input-size-lg': 'h-14',
      'sui-input-icon': 'absolute w-10 h-full center left-0',
      'sui-input-label':
        'w-max px-1 text-gray-400 left-4 top-50% translate-y--50% text-sm transition-all duration-300 pointer-events-none absolute',
    },
    // select
    {
      'sui-select': 'relative w-full text-sm text-gray-900',
      'sui-select-button':
        'bg-transparent border-none flex outline rounded-3 [&:focus_.sui-select-label]:text-primary-700! w-full outline-1 outline-neutral-200 px-4 transition-colors relative items-center justify-between focus:outline-primary-700 focus:outline-2',
      'sui-select-size-sm': 'h-9',
      'sui-select-size-md': 'h-11',
      'sui-select-size-lg': 'h-14',
      'sui-select-label':
        'transition-all duration-300 left-4 top-50% translate-y--50% pointer-events-none absolute px-1 text-gray-400',
      'sui-select-dropdown':
        ' list-none bg-white border flex flex-col shadow  rounded-4  w-full max-h-70 top-115% left-0 z-1 absolute overflow-y-auto p-0 m-0',

      'sui-select-dropdown-item': 'min-h-10 px-4 hover:bg-light-600 row',
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
