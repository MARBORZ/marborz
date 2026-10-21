import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  // Read the real value on first render so mobile doesn't flash the desktop layout
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}
