export const variants = [
  // disabled:
  (matcher: string) => {
    if (!matcher.startsWith('sui-disabled:')) return matcher
    return {
      matcher: matcher.slice(13),
      selector: (s: string) => `${s}:disabled, ${s}[data-sui-disabled="true"]`,
    }
  },
  // enabled
  (matcher: string) => {
    if (!matcher.startsWith('sui-enabled:')) return matcher
    return {
      matcher: matcher.slice(12),
      selector: (s: string) => `${s}:enabled, ${s}:not:[data-sui-disabled="true"]`,
    }
  },
]
