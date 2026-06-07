import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LanguageBubble from './components/LanguageBubble'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
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
