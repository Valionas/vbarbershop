import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'
import { languages } from '../i18n/translations'

/** Floating language switcher bubble (bottom-right corner). */
export default function LanguageBubble() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close when clicking outside.
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
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
              <span className="lang-bubble__flag">{l.flag}</span>
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
        <span className="lang-bubble__flag">{current.flag}</span>
        <span className="lang-bubble__code">{current.code.toUpperCase()}</span>
      </button>
    </div>
  )
}
