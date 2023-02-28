// @unocss-include
import { animate, timeline } from 'motion'

export function useToast(type: 'success' | 'warn' | 'danger' | 'info' | 'notification', content: string, timeOut = 5) {
  let toastEl = document.getElementById('sui-toast-el')
  if (!toastEl) {
    toastEl = document.createElement('div')
    toastEl.setAttribute('id', 'sui-toast-el')
    toastEl.classList.add('sui-toast-layout')
    document.body.appendChild(toastEl)
  }

  const newToast = document.createElement('div')
  const toastContent = document.createElement('p')

  newToast.classList.add('sui-toast', `toast-${type}`)
  toastContent.classList.add('sui-toast-content')

  toastContent.innerText = content
  newToast.innerHTML = icons[type]

  toastEl.appendChild(newToast).appendChild(toastContent)

  timeline([
    [newToast, { opacity: 1, y: [-10, 0] }],
    [newToast, { opacity: 0, marginTop: ['0px', '-52px'] }, { at: timeOut }],
  ]).finished.then(() => toastEl?.removeChild(newToast))
}

const icons = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check vue-feather__content"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  warn: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle vue-feather__content"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  danger: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle vue-feather__content"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info vue-feather__content"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  notification: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell vue-feather__content"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
}

const styles = ['toast-danger', 'toast-info', 'toast-notification', 'toast-success', 'toast-warn']
