import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    boxShadow: {
      dropdown: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      'checkbox-base': 'inset 0px 0px 0px 2px var(--un-shadow-color)',
      'checkbox-hover': 'inset 0px 0px 0px 3px var(--un-shadow-color)',
      'checkbox-active': 'inset 0px 0px 0px 12px var(--un-shadow-color)',
      'radio-base': 'inset 0px 0px 0px 2px var(--un-shadow-color)',
      'radio-hover': 'inset 0px 0px 0px 3px var(--un-shadow-color)',
      'radio-active': 'inset 0px 0px 0px 6.75px var(--un-shadow-color)',
    },
    colors: {
      disabled: '#f3f4f6',
      success: '#339900',
      danger: '#ff0000',
      warn: '#ffaa00',
      border: {
        base: '#d1d5db',
      },
      primary: {
        50: '#4a4a4a',
        100: '#3c3c3c',
        200: '#323232',
        300: '#2d2d2d',
        400: '#222222',
        500: '#1f1f1f',
        600: '#1c1c1e',
        700: '#1b1b1b',
        800: '#181818',
        900: '#0f0f0f',
        DEFAULT: '#0f0f0f',
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
        'min-h-10 px-4 row cursor-pointer row justify-between gap-2 transition-all duration-300 ease-out sui-disabled:(text-on-disabled! cursor-default!) hover-sui-enabled:(bg-neutral-100 pl-5)',
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
    // toast
    {
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
  safelist: [
    'bg-primary',
    'bg-warn',
    'bg-danger',
    'bg-success',
    'text-primary',
    'text-danger',
    'text-success',
    'text-warn',
  ],
})

/**
 // https://github.com/windicss/windicss/blob/main/src/config/colors.ts

import type { Theme } from './types'

export const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  rose: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  },
  fuchsia: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
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
  indigo: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  sky: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  teal: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  lime: {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
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

  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  stone: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
  },
  light: {
    50: '#fdfdfd',
    100: '#fcfcfc',
    200: '#fafafa',
    300: '#f8f9fa',
    400: '#f6f6f6',
    500: '#f2f2f2',
    600: '#f1f3f5',
    700: '#e9ecef',
    800: '#dee2e6',
    900: '#dde1e3',
  },
  dark: {
    50: '#4a4a4a',
    100: '#3c3c3c',
    200: '#323232',
    300: '#2d2d2d',
    400: '#222222',
    500: '#1f1f1f',
    600: '#1c1c1e',
    700: '#1b1b1b',
    800: '#181818',
    900: '#0f0f0f',
  }, 
 
 */
