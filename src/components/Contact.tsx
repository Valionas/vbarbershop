import { useEffect, useState } from 'react'
import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

type DaySchedule = { open: string; close: string } | null

function scheduleFor(day: number): DaySchedule {
  if (day === 0) return brand.hours.sunday
  if (day === 6) return brand.hours.saturday
  return brand.hours.weekdays
}

const formatRange = (s: DaySchedule, closedLabel: string) =>
  s ? `${s.open} – ${s.close}` : closedLabel

/* Small inline icons (stroke inherits the accent color via CSS) */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

export default function Contact() {
  const { t } = useI18n()
  const tel = `tel:${brand.phone.replace(/\s/g, '')}`

  // The visitor's clock only exists in the browser — computed after mount
  // so the prerendered HTML and the first client render match.
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    // Intentional one-time post-hydration sync (client-only data).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date())
  }, [])

  const day = now?.getDay()
  const schedule = now ? scheduleFor(now.getDay()) : null
  const hhmm = now ? now.toTimeString().slice(0, 5) : ''
  const isOpen = !!(schedule && hhmm >= schedule.open && hhmm < schedule.close)

  const rows = [
    { label: t.contact.weekdays, s: brand.hours.weekdays, isToday: day !== undefined && day >= 1 && day <= 5 },
    { label: t.contact.saturday, s: brand.hours.saturday, isToday: day === 6 },
    { label: t.contact.sunday, s: brand.hours.sunday, isToday: day === 0 },
  ]

  const { lat, lng } = brand.geo
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.005},${lat - 0.003},${lng + 0.005},${lat + 0.003}&layer=mapnik&marker=${lat},${lng}`

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
              <h3 className="contact-card__title">
                <PinIcon /> {t.contact.visit}
              </h3>
              <p className="contact-card__value">{brand.address}</p>
              <iframe
                className="contact-card__map"
                src={mapSrc}
                title={t.contact.visit}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="contact-card__link">
                {t.contact.directions} →
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact__cell">
            <div className="contact-card">
              <h3 className="contact-card__title">
                <PhoneIcon /> {t.contact.call}
              </h3>
              <p className="contact-card__value contact-card__value--lg">{brand.phone}</p>
              <a href={tel} className="btn btn--primary contact-card__call">
                {t.contact.callNow}
              </a>
              <h3 className="contact-card__title contact-card__title--gap">{t.contact.write}</h3>
              <p className="contact-card__value">
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="contact__cell">
            <div className="contact-card">
              <div className="contact-card__head">
                <h3 className="contact-card__title">
                  <ClockIcon /> {t.contact.hours}
                </h3>
                {now && (
                  <span className={`status ${isOpen ? 'status--open' : 'status--closed'}`}>
                    <span className="status__dot" aria-hidden="true" />
                    {isOpen && schedule
                      ? `${t.contact.openNow} · ${t.contact.until} ${schedule.close}`
                      : t.contact.closedNow}
                  </span>
                )}
              </div>
              <ul className="contact-card__hours">
                {rows.map((row) => (
                  <li key={row.label} className={row.isToday ? 'is-today' : undefined}>
                    <span>
                      {row.label}
                      {row.isToday && <span className="today-chip">{t.contact.today}</span>}
                    </span>
                    <span>{formatRange(row.s, t.contact.closed)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
