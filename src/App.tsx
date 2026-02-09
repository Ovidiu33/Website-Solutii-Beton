import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import TikTokGallery from './components/TikTokGallery'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import TrustBanner from './components/TrustBanner'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <TrustBanner />
        <Hero />
        <Services />
        <WhyUs />
        <TikTokGallery />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  )
}

export default App
