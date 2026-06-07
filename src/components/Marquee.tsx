import { Fragment } from 'react'
import { brand } from '../config/brand'
import { useI18n } from '../i18n/LanguageContext'

export default function Marquee() {
  const { t } = useI18n()
  const phrases = [...t.marquee, `Est. ${brand.est}`]
  // Render the strip twice for a seamless infinite loop.
  const strip = (key: string) => (
    <div className="marquee__strip" aria-hidden={key === 'b'}>
      {phrases.map((phrase, i) => (
        <Fragment key={`${key}-${i}`}>
          <span className="marquee__item">{phrase}</span>
          <span className="marquee__sep">✦</span>
        </Fragment>
      ))}
    </div>
  )

  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        {strip('a')}
        {strip('b')}
      </div>
    </div>
  )
}
