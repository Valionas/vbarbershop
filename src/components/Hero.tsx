import { useEffect, useRef } from 'react'
import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useI18n()
  const bgRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on the hero background.
  useEffect(() => {
    const el = bgRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.08)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div
        ref={bgRef}
        className="hero__bg"
        style={{ backgroundImage: `url(${brand.images.hero})` }}
        aria-hidden="true"
      />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__content container">
        <p className="eyebrow hero__eyebrow">
          {t.hero.eyebrow} · Est. {brand.est}
        </p>
        <h1 className="hero__title">
          <span className="hero__title-line">{t.hero.titleA}</span>
          <span className="hero__title-line hero__title-line--accent">{t.hero.titleB}</span>
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__ctas">
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="btn btn--primary btn--lg">
            {t.hero.ctaPrimary}
          </a>
          <a href="#work" className="btn btn--ghost btn--lg">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label={t.hero.scroll}>
        <span className="hero__scroll-label">{t.hero.scroll}</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
