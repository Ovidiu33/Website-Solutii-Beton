import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { useState, FormEvent, lazy, Suspense } from 'react'
import { track } from '../analytics'

const TermsModal = lazy(() => import('./TermsModal'))

const ZONES = ['Suceava', 'Botoșani', 'Rădăuți', 'Fălticeni', 'Vatra Dornei', 'Dorohoi']
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Carotare+%C8%99i+T%C4%83iere+Beton+Suceava'

const FIELD = 'w-full h-12 px-4 rounded bg-surface border border-white/15 text-ink placeholder:text-mute/70 transition-colors duration-200 hover:border-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'
const LABEL = 'block font-display font-semibold text-sm text-ink/85 mb-2'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const form = e.currentTarget

    try {
      const response = await fetch('/contact.php', { method: 'POST', body: new FormData(form) })
      const result = await response.json().catch(() => ({ ok: false }))
      if (!response.ok || !result.ok) throw new Error(`HTTP ${response.status}`)

      track('generate_lead', { service: String(new FormData(form).get('service') ?? '') })
      setSubmitMessage('✅ Mulțumim! Am primit cererea și te sunăm în curând.')
      form.reset()
      setAcceptTerms(false)
    } catch (error) {
      setSubmitMessage('❌ Cererea nu a putut fi trimisă. Sună-ne direct la 0758 663 415.')
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const info = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Telefon',
      body: <a href="tel:+40758663415" className="font-display font-extrabold text-2xl text-accent-ink hover:text-accent transition-colors">0758 663 415</a>,
      note: 'Disponibil 24/7',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      body: <a href="mailto:contact@ecarota.ro" className="font-semibold text-accent-ink hover:text-accent transition-colors break-all">contact@ecarota.ro</a>,
      note: 'Răspundem în cel mult 24 de ore',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Zonă de lucru',
      body: <p className="text-ink">Județele Suceava și Botoșani</p>,
      note: 'Ne deplasăm și în restul Moldovei',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Program',
      body: <p className="text-ink">Luni–vineri, 7:00–17:00</p>,
      note: 'Pentru urgențe ne poți suna oricând',
    },
  ]

  return (
    <section id="contact" className="theme-dark scroll-mt-16 lg:scroll-mt-20 py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-2xl">
          <h2 className="heading-lg">Hai să discutăm</h2>
          <p className="mt-4 text-lg md:text-xl text-mute">
            Sună-ne sau lasă-ne un mesaj mai jos. Sfatul și evaluarea la fața locului sunt gratuite.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <h3 className="font-display font-bold text-2xl">Date de contact</h3>

            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {info.map(item => (
                <li key={item.title} className="group flex items-start gap-4 py-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-accent/10 text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-graphite">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display font-semibold text-sm text-mute">{item.title}</h4>
                    <div className="mt-1">{item.body}</div>
                    <p className="mt-1 text-sm text-mute">{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="font-display font-bold text-lg">Zone deservite</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ZONES.map(zone => (
                  <li key={zone} className="rounded border border-white/15 px-3 py-1.5 font-display font-semibold text-sm">
                    {zone}
                  </li>
                ))}
                <li className="px-1 py-1.5 font-display font-semibold text-sm text-mute">și împrejurimi</li>
              </ul>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-5 inline-flex items-center gap-1.5 font-display font-bold text-accent-ink"
              >
                Ne găsești pe Google Maps
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Pe desktop cardul are înălțimea coloanei din stânga: „Despre lucrare” crește și umple spațiul */}
          <div id="oferta" className="lg:col-span-7 lg:flex lg:flex-col scroll-mt-24 rounded border border-white/10 bg-surface/60 p-6 md:p-8">
            <h3 className="font-display font-bold text-2xl">Cere o ofertă gratuită</h3>

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:flex-1 lg:grid-rows-[auto_auto_1fr_auto_auto]" onSubmit={handleSubmit}>
              {/* Anti-spam: câmp invizibil pentru oameni, completat doar de boți */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              <div>
                <label htmlFor="name" className={LABEL}>Nume *</label>
                <input type="text" id="name" name="name" required autoComplete="name" className={FIELD} placeholder="Ion Popescu" />
              </div>

              <div>
                <label htmlFor="phone" className={LABEL}>Telefon *</label>
                <input type="tel" id="phone" name="phone" required autoComplete="tel" className={FIELD} placeholder="07xx xxx xxx" />
              </div>

              <div>
                <label htmlFor="email" className={LABEL}>Email</label>
                <input type="email" id="email" name="email" autoComplete="email" className={FIELD} placeholder="ion@exemplu.ro" />
              </div>

              <div>
                <label htmlFor="service" className={LABEL}>Serviciu *</label>
                <select id="service" name="service" required defaultValue="" className={`${FIELD} cursor-pointer`}>
                  <option value="">Alege serviciul</option>
                  <option value="carotaj">Carotare în beton</option>
                  <option value="taiere">Tăiere beton</option>
                  <option value="demontare">Demolări</option>
                  <option value="altele">Altceva</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:flex lg:flex-col">
                <label htmlFor="message" className={LABEL}>Despre lucrare *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${FIELD} h-auto py-3 resize-none lg:flex-1`}
                  placeholder="Ex.: gaură de Ø 150 mm pentru hotă, perete de beton de 30 cm, Suceava"
                ></textarea>
              </div>

              <div className="sm:col-span-2 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#FF6B00]"
                  required
                />
                <label htmlFor="acceptTerms" className="text-sm text-mute leading-relaxed cursor-pointer">
                  Sunt de acord cu{' '}
                  <button
                    type="button"
                    onClick={() => setIsTermsOpen(true)}
                    className="text-accent-ink underline decoration-accent/50 underline-offset-2 hover:decoration-accent font-semibold transition-colors"
                  >
                    Termenii și condițiile
                  </button>
                  {' '}și cu prelucrarea datelor mele pentru această cerere *
                </label>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !acceptTerms}
                  className="btn btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {isSubmitting ? 'Se trimite…' : 'Trimite cererea'}
                </button>

                {submitMessage && (
                  <p role="status" className={`mt-4 text-center font-medium ${submitMessage.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {isTermsOpen && (
        <Suspense fallback={null}>
          <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        </Suspense>
      )}
    </section>
  )
}

export default Contact
