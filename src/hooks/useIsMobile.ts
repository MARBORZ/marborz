import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

const query = (breakpoint: number) => `(max-width: ${breakpoint - 0.02}px)`

export function useIsMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  // Read the real value on first render so mobile doesn't flash the desktop layout
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query(breakpoint)).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query(breakpoint))
    const onChange = () => setIsMobile(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [breakpoint])

  return isMobile
}
