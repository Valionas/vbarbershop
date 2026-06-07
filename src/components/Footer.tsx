import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  const socials = [
    { label: 'Instagram', href: brand.social.instagram },
    { label: 'Facebook', href: brand.social.facebook },
    { label: 'TikTok', href: brand.social.tiktok },
  ]

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__mark">{brand.mark}</span>
          <div>
            <strong>{brand.name}</strong>
            <p>{t.footer.tagline}</p>
          </div>
        </div>

        <nav className="footer__social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>

        <p className="footer__rights">
          © {year} {brand.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
