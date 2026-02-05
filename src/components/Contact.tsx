import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import TermsModal from './TermsModal'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Configurează cu datele tale din EmailJS dashboard
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Înlocuiește cu Service ID-ul tău
        'YOUR_TEMPLATE_ID',     // Înlocuiește cu Template ID-ul tău
        e.currentTarget,
        'YOUR_PUBLIC_KEY'       // Înlocuiește cu Public Key-ul tău
      )
      
      setSubmitMessage('✅ Mesaj trimis cu succes! Te contactăm în curând.')
      e.currentTarget.reset()
    } catch (error) {
      setSubmitMessage('❌ Eroare la trimitere. Sună direct la 0758 663 415.')
      console.error('EmailJS error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-gradient-to-br from-dark via-gray-dark to-dark overflow-hidden scroll-mt-8">
      {/* Fade from black at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Hai Să Discutăm</h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto mt-4">
            Sună pentru consultanță gratuită și ofertă personalizată. Răspundem rapid!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              Informații Contact
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-gray-dark border border-gray-medium rounded-lg hover:border-primary transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Telefon</h4>
                  <a 
                    href="tel:0758663415" 
                    className="text-2xl font-display font-bold text-primary hover:text-orange-600 transition-colors"
                  >
                    0758 663 415
                  </a>
                  <p className="text-sm text-gray-light mt-1">Disponibil 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-gray-dark border border-gray-medium rounded-lg hover:border-primary transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <a 
                    href="mailto:sulerurenov@yahoo.com" 
                    className="text-primary hover:text-orange-600 transition-colors"
                  >
                    sulerurenov@yahoo.com
                  </a>
                  <p className="text-sm text-gray-light mt-1">Răspundem în max 24h</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-gray-dark border border-gray-medium rounded-lg hover:border-primary transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Zonă Acoperire</h4>
                    <p className="text-gray-light">Suceava, Botoșani și județe</p>
                  <p className="text-sm text-gray-light mt-1">Deplasare rapidă în toată Moldova</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-gray-dark border border-gray-medium rounded-lg hover:border-primary transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Program</h4>
                  <p className="text-gray-light">Luni - Vineri: 7:00 - 17:00</p>
                  <p className="text-sm text-gray-light mt-1">Posibilitate intervenții urgente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="oferta" className="scroll-mt-32">
            <h3 className="text-2xl font-display font-bold text-white mb-8">
              Solicită Ofertă
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-light mb-2">
                  Nume complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-medium rounded-lg text-white placeholder-gray-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="Ion Popescu"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-light mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-medium rounded-lg text-white placeholder-gray-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="0758 663 415"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-medium rounded-lg text-white placeholder-gray-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="ion@exemplu.ro"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-light mb-2">
                  Tip serviciu *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-medium rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Selectează...</option>
                  <option value="carotaj">Carotaj în beton</option>
                  <option value="taiere">Tăiere beton</option>
                  <option value="demontare">Demontare selectivă</option>
                  <option value="altele">Altele</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-light mb-2">
                  Descriere lucrare *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-dark border border-gray-medium rounded-lg text-white placeholder-gray-light focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Dimensiuni, locație, material,..."
                ></textarea>
              </div>

              {/* Terms Acceptance */}
              <div className="flex items-start gap-3 p-4 bg-gray-dark/50 rounded-lg transition-colors">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="peer w-5 h-5 appearance-none bg-gray-800 border-2 border-gray-medium rounded cursor-pointer transition-all duration-200 checked:bg-primary checked:border-primary hover:border-primary/70 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                    required
                  />
                  <svg
                    className="absolute w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <label htmlFor="acceptTerms" className="text-sm text-gray-light leading-relaxed cursor-pointer">
                  Accept{' '}
                  <button
                    type="button"
                    onClick={() => setIsTermsOpen(true)}
                    className="text-primary hover:text-orange-400 underline decoration-primary/50 hover:decoration-primary font-semibold transition-colors"
                  >
                    Termenii și Condițiile
                  </button>
                  {' '}de prelucrare a datelor personale *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !acceptTerms}
                className="w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite Solicitare'}
              </button>

              {submitMessage && (
                <p className={`text-center font-medium ${submitMessage.startsWith('✅') ? 'text-green-500' : 'text-red-500'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Terms Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
    </section>
  )
}

export default Contact
