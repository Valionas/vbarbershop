import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="section__header">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="section__title">{t.services.title}</h2>
          <p className="section__text section__text--center">{t.services.subtitle}</p>
        </Reveal>

        <div className="services__grid">
          {t.services.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 100} className="services__cell">
              <article className="service-card">
                <div className="service-card__top">
                  <h3 className="service-card__name">{item.name}</h3>
                  <span className="service-card__price">{brand.prices[i]}</span>
                </div>
                <p className="service-card__desc">{item.desc}</p>
                <span className="service-card__line" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
