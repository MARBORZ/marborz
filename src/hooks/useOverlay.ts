import { useEffect } from 'react'

let locks = 0

// Hiding the scrollbar widens the page; pad by its width so nothing shifts.
// The fixed header reads --scroll-lock-gap for the same reason. Phones have overlay scrollbars, so it's 0 there.
function lockScroll() {
  const gap = window.innerWidth - document.documentElement.clientWidth
  document.documentElement.style.setProperty('--scroll-lock-gap', `${gap}px`)
  document.body.style.paddingRight = `${gap}px`
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  document.documentElement.style.removeProperty('--scroll-lock-gap')
  document.body.style.paddingRight = ''
  document.body.style.overflow = ''
}

// Shared behaviour for anything that covers the page (modal, mobile menu):
// lock page scroll while open and close on Escape. Counted, so two overlays can't unlock each other.
export function useOverlay(active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!active) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    if (locks++ === 0) lockScroll()

    return () => {
      document.removeEventListener('keydown', onKey)
      if (--locks === 0) unlockScroll()
    }
  }, [active, onClose])
}
