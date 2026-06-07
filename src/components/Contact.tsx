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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35Z" />
    <path d="M12.05 2a9.9 9.9 0 0 0-9.9 9.9c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01a9.9 9.9 0 0 0 9.9-9.9 9.84 9.84 0 0 0-2.9-7A9.84 9.84 0 0 0 12.05 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38 8.22 8.22 0 0 1 8.23-8.22 8.17 8.17 0 0 1 5.82 2.41 8.17 8.17 0 0 1 2.4 5.82 8.22 8.22 0 0 1-8.22 8.23Z" />
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
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost contact-card__whatsapp"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
              <div className="contact-card__bottom">
                <h3 className="contact-card__title">{t.contact.write}</h3>
                <p className="contact-card__value">
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </p>
                <p className="contact-card__hint">{t.contact.replyHint}</p>
              </div>
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
              <p className="contact-card__bottom contact-card__hint contact-card__hint--note">
                ✂ {t.contact.walkIns}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
