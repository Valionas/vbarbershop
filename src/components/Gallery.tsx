import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

export default function Gallery() {
  const { t } = useI18n()

  return (
    <section id="work" className="section gallery">
      <div className="container">
        <Reveal className="section__header">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 className="section__title">{t.work.title}</h2>
          <p className="section__text section__text--center">{t.work.subtitle}</p>
        </Reveal>

        <div className="gallery__grid">
          {brand.images.gallery.map((item, i) => (
            <Reveal key={item.src} delay={(i % 4) * 80} className="gallery__cell">
              <figure className="gallery__item">
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption className="gallery__overlay">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
