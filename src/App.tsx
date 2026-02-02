import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import TikTokGallery from './components/TikTokGallery'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <WhyUs />
      <Services />
      <TikTokGallery />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
