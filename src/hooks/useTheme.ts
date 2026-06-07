import { useCallback, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  // Keep the mobile browser chrome color in sync with the theme.
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#141210' : '#f5f1e8')
}

export function useTheme() {
  // Start with 'dark' so prerendered HTML and the first client render match
  // (hydration-safe); the pre-paint script in index.html has already set the
  // real theme on <html>, so sync state from there after mount.
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Intentional one-time post-hydration sync (React's documented pattern
    // for server/client content differences) — runs once, renders twice max.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (document.documentElement.dataset.theme === 'light') setTheme('light')
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* localStorage unavailable */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
