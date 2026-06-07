import { LanguageProvider, useI18n } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LanguageBubble from './components/LanguageBubble'

function SkipLink() {
  const { t } = useI18n()
  return (
    <a href="#main" className="skip-link">
      {t.skip}
    </a>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <LanguageBubble />
    </LanguageProvider>
  )
}
