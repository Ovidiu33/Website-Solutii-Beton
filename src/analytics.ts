// Events reach Google Analytics only after cookie consent: before "Accept" gtag.js is never loaded,
// so nothing is queued that could be sent later.
export const track = (event: string, params: Record<string, string> = {}) => {
  if (window.gaLoaded && window.gtag) window.gtag('event', event, params)
}

const areaOf = (el: Element) =>
  el.closest('header') ? 'header' : el.closest('footer') ? 'footer' : el.closest('section[id]')?.id ?? 'bara-mobil'

export const trackContactClicks = () => {
  const onClick = (e: MouseEvent) => {
    const link = (e.target as Element | null)?.closest('a[href]') as HTMLAnchorElement | null
    if (!link) return
    if (link.href.startsWith('tel:')) track('click_call', { area: areaOf(link) })
    else if (link.href.includes('wa.me/')) track('click_whatsapp', { area: areaOf(link) })
  }
  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
