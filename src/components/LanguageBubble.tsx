import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import { languages } from '../i18n/translations'

const flagSrc = (flag: string) => `${import.meta.env.BASE_URL}flags/${flag}.png`

/** Floating language switcher bubble (bottom-right corner). */
export default function LanguageBubble() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close when clicking outside or pressing Escape.
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = languages.find((l) => l.code === lang) ?? languages[0]

  return (
    <div className={`lang-bubble ${open ? 'lang-bubble--open' : ''}`} ref={ref}>
      <ul className="lang-bubble__list" role="listbox" aria-label="Language">
        {languages.map((l, i) => (
          <li
            key={l.code}
            role="option"
            aria-selected={l.code === lang}
            style={{ transitionDelay: `${(languages.length - i) * 35}ms` }}
            className={`lang-bubble__option ${l.code === lang ? 'lang-bubble__option--active' : ''}`}
          >
            <button
              type="button"
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
            >
              <img className="lang-bubble__flag" src={flagSrc(l.flag)} alt="" width={22} height={16} />
              <span className="lang-bubble__label">{l.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="lang-bubble__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={`Language: ${current.label}`}
        aria-expanded={open}
      >
        <img className="lang-bubble__flag" src={flagSrc(current.flag)} alt="" width={22} height={16} />
        <span className="lang-bubble__code">{current.code.toUpperCase()}</span>
      </button>
    </div>
  )
}
