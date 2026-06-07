import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Contact() {
  const { t } = useI18n()

  const hours = [
    { label: t.contact.weekdays, value: brand.hours.weekdays },
    { label: t.contact.saturday, value: brand.hours.saturday },
    { label: t.contact.sunday, value: brand.hours.sunday ?? t.contact.closed },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section__header">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="section__text section__text--center">{t.contact.subtitle}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__cell">
            <div className="contact-card">
              <h3 className="contact-card__title">{t.contact.visit}</h3>
              <p className="contact-card__value">{brand.address}</p>
              <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="contact-card__link">
                {t.contact.directions} →
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact__cell">
            <div className="contact-card">
              <h3 className="contact-card__title">{t.contact.call}</h3>
              <p className="contact-card__value">
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
              </p>
              <h3 className="contact-card__title contact-card__title--gap">{t.contact.write}</h3>
              <p className="contact-card__value">
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="contact__cell">
            <div className="contact-card">
              <h3 className="contact-card__title">{t.contact.hours}</h3>
              <ul className="contact-card__hours">
                {hours.map((row) => (
                  <li key={row.label}>
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="contact__cta-wrap">
          <div className="contact__cta">
            <h3>{t.contact.book}</h3>
            <p>{t.contact.bookHint}</p>
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="btn btn--primary btn--lg">
              {t.nav.book}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
