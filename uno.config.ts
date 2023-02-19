import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: [
    // common
    {
      center: 'flex items-center justify-center',
      column: 'flex flex-col items-center',
      row: 'flex flex-row items-center',
      'floating-label': 'scale-85 text-gray-900 translate-y--160% translate-x--4',
    },
    // button
    {
      'sui-button':
        'center gap-2 border-none cursor-pointer font-medium outline outline-transparent rounded-4px leading-none outline-2 outline-offset-2 transition whitespace-nowrap capitalize enabled-active:scale-95 focus-visible:outline-dark-800 disabled:(cursor-not-allowed text-gray-400)',
      'sui-button-v-filled': 'hover:bg-dark-400 disabled:bg-gray-200! bg-dark-900 text-gray-100',
      'sui-button-v-text': 'hover:bg-light-600 enabled-active:bg-light-900 bg-transparent',
      'sui-button-size-sm': 'px-6 h-8 text-xs',
      'sui-button-size-md': 'px-10 h-10 text-sm',
      'sui-button-size-lg': 'px-12 h-12 text-base',
      'sui-button-icon-only': 'h-10 px-3 text-sm',
    },
    // input-input
    {
      'sui-input-wrapper': 'h-10 relative w-full row justify-start',
      'sui-input':
        'grow bg-transparent border-none outline rounded-1 h-10 w-full outline-gray-200 outline-1 read-only:(pointer-events-none outline-transparent bg-light-400) disabled:(cursor-not-allowed outline-transparent bg-light-900) px-4 transition-colors placeholder:text-sm focus:(outline-dark-600 outline-2) read-only:focus:(outline-gray-200 outline-1 cursor-default)',
      'sui-input-icon': 'absolute w-10 h-full center left-0',
      'sui-input-label': 'w-max text-gray-400 text-sm transition duration-300 pointer-events-none absolute',
    },
    // select
    {
      'sui-select': 'relative w-full text-sm text-gray-900',
      'sui-select-button':
        'bg-transparent border-none flex outline rounded-1 h-10 w-full outline-1 outline-gray-200 px-4 transition-colors relative items-center justify-between focus:outline-dark-600 focus:outline-2',

      'sui-select-label': 'transition duration-300 left-4 pointer-events-none absolute',
      'sui-select-dropdown':
        'bg-white border flex flex-col min-w-full rounded-1 w-full max-h-48 top-115% left-0 z-1 absolute overflow-y-auto p-0 m-0',

      'sui-select-dropdown-item': 'py-2 px-4 hover:bg-light-600',
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
