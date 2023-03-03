import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { theme, variants } from './src/preset'

export default defineConfig({
  theme,
  shortcuts: [
    // common
    {
      center: 'flex items-center justify-center',
      column: 'flex flex-col items-center',
      row: 'flex flex-row items-center',
      'floating-label': 'scale-80 top--0.5 bg-white left-0',
    },
    // button
    {
      'sui-button':
        'center border-none cursor-pointer outline outline-transparent rounded-8px leading-none transition-all whitespace-nowrap capitalize active-enabled:scale-95 focus-visible:(outline-primary-600 outline-2) disabled:(cursor-not-allowed bg-disabled! text-on-disabled!)',

      'sui-button-v-filled': 'hover:bg-primary-800 bg-primary-600  text-on-primary focus-visible:outline-offset-2',
      'sui-button-v-text': 'hover:bg-neutral-100 bg-transparent',
      'sui-button-v-outline':
        'hover:(bg-light-600 outline-transparent) bg-transparent outline-1 outline-neutral-200 disabled:outline-transparent',

      'sui-button-size-sm': 'px-8 h-8 text-xs gap-2',
      'sui-button-size-md': 'px-10 h-10 text-sm gap-2',
      'sui-button-size-lg': 'px-12 h-12 text-base gap-4',
      'sui-button-icon-only': 'h-10 px-3 text-sm',
    },
    // input
    {
      'sui-input-wrapper': 'relative w-full row justify-start',
      'sui-input':
        ' text-on-surface grow bg-white border-none outline-neutral-200 rounded-8px w-full outline outline-1 disabled:(cursor-not-allowed! bg-disabled text-on-disabled outline-transparent) px-4 transition-colors focus:(outline-primary-600 outline-2)',
      'sui-input-size-sm': 'h-9 text-xs',
      'sui-input-size-md': 'h-11 text-sm',
      'sui-input-size-lg': 'h-13 text-base',
      'sui-input-icon': 'absolute top-50% translate-y--50% aspect-square h-full center pointer-events-none',
      'sui-input-label':
        'w-max left-3 px-1 top-50% translate-y--50% transition-all duration-200 ease-out pointer-events-none absolute peer-not-placeholder-shown:floating-label peer-focus:floating-label peer-disabled:text-on-disabled',
    },
    // textarea
    {
      'sui-textarea-wrapper': 'relative w-full',
      'sui-textarea':
        ' px-4 py-2 text-on-surface bg-white border-none outline-neutral-200 rounded-8px w-full outline outline-1 disabled:(cursor-not-allowed! bg-disabled text-on-disabled outline-transparent) transition-colors focus:(outline-primary-600 outline-2)',
      'sui-textarea-label':
        'px-1 m-0 text-sm text-on-surface-muted w-max top-2 left-2 transition-all duration-200 ease-out pointer-events-none absolute',
    },
    // select
    {
      'sui-select-wrapper': 'relative w-full sui-disabled:cursor-not-allowed',

      'sui-select-trigger':
        'text-on-surface-muted gap-4 relative row border-none outline rounded-8px w-full outline-neutral-200 outline-1 px-4 transition-colors cursor-pointer  sui-disabled:(bg-disabled! text-on-disabled! outline-transparent! pointer-events-none) focus:(outline-primary-600 outline-2 text-primary-600)',

      'sui-select-size-sm': '[&_.sui-select-trigger]:h-9 text-xs [&_.sui-select-icon_>_*]:(w-3 h-3)',
      'sui-select-size-md': '[&_.sui-select-trigger]:h-11 text-sm [&_.sui-select-icon_>_*]:(w-4 h-4)',
      'sui-select-size-lg': '[&_.sui-select-trigger]:h-13 text-base [&_.sui-select-icon_>_*]:(w-5 h-5)',

      'sui-select-icon': 'aspect-square center',

      'sui-select-label':
        'w-max left-3 px-1 top-50% translate-y--50% transition-all duration-200 pointer-events-none absolute',

      'sui-select-dropdown':
        ' list-none bg-white border flex flex-col shadow-dropdown rounded-8px w-full max-h-50 top-115% left-0 z-1 absolute overflow-y-auto p-0 m-0',

      'sui-select-dropdown-item':
        'min-h-10 px-4 row cursor-pointer row justify-between gap-2 transition-all duration-300 ease-out sui-disabled:(text-on-disabled! cursor-default!) hover-sui-enabled:(bg-primary-50 pl-5)',
    },
    // checkbox
    {
      'sui-checkbox-wrapper': 'rounded-8px relative',
      'sui-checkbox':
        'cursor-pointer appearance-none outline-hidden border-none block m-0 p-0 rounded-inherit w-24px h-24px shadow-inset shadow-border-base shadow-checkbox-base disabled:(bg-disabled) disabled-checked:(shadow-checkbox-active! shadow-primary-200!) checked:(shadow-checkbox-active shadow-primary) enabled-not-checked-hover:(shadow-checkbox-hover shadow-primary) not-checked:transition-shadow focus-visible:(outline outline-primary outline-2)',
      'sui-checkbox-svg': 'block absolute left-0 top-0 fill-white pointer-events-none scale-101 translate-z-0',
      'sui-checkbox-check': 'fill-none stroke-2 stroke-white origin-[10.5px_16px] scale-100 translate-z-0',
      'sui-checkbox-dot': 'origin-[10.5px_15.5px] translate-x-14px translate-y--14px translate-z-0 scale-100 ',
    },
    // switch
    {
      'sui-switch-wrapper': 'rounded-12px relative cursor-pointer',
      'sui-switch':
        'disabled:(bg-disabled! cursor-not-allowed) disabled-checked:(bg-primary-200!) cursor-pointer appearance-none outline-hidden border-none bg-neutral-200 block m-0 p-0 rounded-inherit w-38px h-24px checked:bg-primary-600 focus-visible:(outline-2 outline outline-primary)',
      'sui-switch-svg':
        'block absolute left-0 top-0 pointer-events-none fill-white w-38px h-24px scale-101 translate-z-0',
    },
    // radio
    {
      'sui-radio-wrapper': 'rounded-12px relative',
      'sui-radio':
        'disabled:(bg-disabled! cursor-not-allowed) disabled-checked:(shadow-checkbox-active! shadow-primary-200!) appearance-none outline-hidden border-none bg-none block cursor-pointer m-0 p-0 rounded-inherit w-24px h-24px shadow-radio-base shadow-border-base checked:(shadow-primary shadow-radio-active) not-checked:transition-shadow enabled-not-checked-hover:(shadow-primary shadow-radio-hover)',
    },
    // badge
    {
      'sui-badge': 'relative',
      'sui-badge-dot':
        'z-1 w-4 h-4 rounded-full absolute right--6px top--6px pointer-events-none border-2 border-solid border-white',
      'sui-badge-value':
        'min-w-4 h-4.5 center z-1 text-xs rounded-full text-on-primary px-1 absolute left-full translate-x--50% bottom-full translate-y-50% pointer-events-none border-2 border-solid border-white',
    },
    // toast
    {
      'sui-toast-layout': 'fixed left-50% top-70px -translate-x-50% center flex-col gap-4 z-9999 pointer-events-none',
      'sui-toast': ' text-sm center gap-2 px-4 h-9 rounded-4px transition-all -translate-y-2.5 opacity-0',
      'sui-toast-content': 'max-w-500px truncate',
      'toast-warn': 'bg-yellow bg-opacity-10 text-yellow shadow',
      'toast-success': 'bg-green bg-opacity-10 text-green shadow',
      'toast-danger': 'bg-red bg-opacity-10 text-red shadow',
      'toast-info': 'bg-blue bg-opacity-10 text-blue shadow',
      'toast-notification': 'bg-blue bg-opacity-10 text-blue shadow',
    },
  ],
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
