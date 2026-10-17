import { Phone, Mail, MapPin } from 'lucide-react'
import { useState, lazy, Suspense } from 'react'
import Logo from './Logo'

const TermsModal = lazy(() => import('./TermsModal'))
const PrivacyPolicyModal = lazy(() => import('./PrivacyPolicyModal'))
const CookiePolicyModal = lazy(() => import('./CookiePolicyModal'))

const LINKS = [
  { href: '#servicii', label: 'Servicii' },
  { href: '#despre', label: 'Despre Noi' },
  { href: '#galerie-imagini', label: 'Galerie' },
  { href: '#intrebari', label: 'Întrebări Frecvente' },
  { href: '#contact', label: 'Contact' },
]

const POLICY_BTN = 'text-sm font-display font-semibold text-ink/80 hover:text-ink border border-white/15 hover:border-accent px-3.5 py-2 rounded transition-colors whitespace-nowrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isCookieOpen, setIsCookieOpen] = useState(false)

  return (
    <footer className="theme-dark border-t border-white/10 bg-[#0d0d0d] pb-20 lg:pb-0">
      <div className="container-custom pt-14 md:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <a href="#" className="group inline-flex" aria-label="eCAROTA, mergi la începutul paginii">
              <Logo className="h-7 w-auto" />
            </a>
            <h2 className="sr-only">eCAROTA</h2>
            <p className="mt-5 text-mute max-w-sm leading-relaxed">
              Ne ocupăm de găuri și tăieturi în beton, fără complicații și fără promisiuni deșarte. Dacă ai nevoie de ajutor, suntem la un telefon distanță.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-base">Link-uri Rapide</h3>
            <ul className="mt-4 space-y-3">
              {LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-mute hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-base">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+40758663415" className="font-display font-bold text-ink hover:text-accent transition-colors">
                    0758 663 415
                  </a>
                  <p className="text-sm text-mute">Disponibil 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@ecarota.ro" className="text-mute hover:text-ink transition-colors break-all">
                  contact@ecarota.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-mute">Suceava, Botoșani</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-display font-bold text-base flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true"></span>
              Firmă Autorizată Legal
            </p>
            <div className="mt-4 text-sm text-mute space-y-1">
              <p><strong className="text-ink">S.C. SULERU RENOV S.R.L.</strong></p>
              <p>CUI: RO38206793</p>
              <p>J33/1603/2017</p>
              <p>Str. Eroilor nr. 60, Bloc 115, Sc. D, Ap. 5, Suceava</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => setIsTermsOpen(true)} className={POLICY_BTN}>
              Termeni și Condiții
            </button>
            <button onClick={() => setIsPrivacyOpen(true)} className={POLICY_BTN}>
              Politica de Confidențialitate
            </button>
            <button onClick={() => setIsCookieOpen(true)} className={POLICY_BTN}>
              Politica Cookie
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
              title="Soluționarea Alternativă a Litigiilor"
            >
              <img src="/anpc-sal.webp" alt="Soluționarea Alternativă a Litigiilor" className="h-10 w-auto" width="156" height="40" loading="lazy" decoding="async" />
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
              title="Soluționarea Online a Litigiilor"
            >
              <img src="/anpc-sol.webp" alt="Soluționarea Online a Litigiilor" className="h-10 w-auto" width="143" height="40" loading="lazy" decoding="async" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-mute" suppressHydrationWarning>
          © {currentYear} eCarota – Carotare Beton Suceava și Botoșani. Toate drepturile rezervate.
        </p>
      </div>

      <Suspense fallback={null}>
        {isTermsOpen && <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />}
        {isPrivacyOpen && <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />}
        {isCookieOpen && <CookiePolicyModal isOpen={isCookieOpen} onClose={() => setIsCookieOpen(false)} />}
      </Suspense>
    </footer>
  )
}

export default Footer
