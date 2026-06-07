import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function About() {
  const { t } = useI18n()

  const stats = [
    { value: brand.stats.years, label: t.about.stats.years },
    { value: brand.stats.clients, label: t.about.stats.clients },
    { value: `${brand.stats.rating} ★`, label: t.about.stats.rating },
  ]

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__frame">
            <img src={brand.images.about} alt={`${brand.name} barber at work`} loading="lazy" />
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="section__title">{t.about.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="section__text">{t.about.p1}</p>
            <p className="section__text">{t.about.p2}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="about__stats">
              {stats.map((stat) => (
                <div className="about__stat" key={stat.label}>
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
