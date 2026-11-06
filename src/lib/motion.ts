export const MOTION_OK = '(prefers-reduced-motion: no-preference)'
export const PHONE = '(max-width: 767px)'

// Scrolls to an in-page section. CSS scroll-margin-top keeps it clear of the frame's top bar.
export function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  const smooth = matchMedia(MOTION_OK).matches
  target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
  target.focus({ preventScroll: true })
}
