import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { translations, languages } from './translations'
import type { Dict, Lang } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLang(): Lang {
  try {
    const stored = localStorage.getItem('lang')
    if (stored && languages.some((l) => l.code === stored)) return stored as Lang
  } catch {
    /* localStorage unavailable */
  }
  const browser = navigator.language?.slice(0, 2).toLowerCase()
  if (browser && languages.some((l) => l.code === browser)) return browser as Lang
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    document.documentElement.lang = next
    try {
      localStorage.setItem('lang', next)
    } catch {
      /* localStorage unavailable */
    }
  }, [])

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used inside <LanguageProvider>')
  return ctx
}
