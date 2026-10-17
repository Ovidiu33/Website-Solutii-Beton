import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import TrustBanner from './components/TrustBanner'
import CookieBanner from './components/CookieBanner'
import MobileActionBar from './components/MobileActionBar'
import { trackContactClicks } from './analytics'

function App() {
  useEffect(() => trackContactClicks(), [])

  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
      <CookieBanner />
    </div>
  )
}

export default App
