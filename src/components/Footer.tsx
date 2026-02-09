import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import TermsModal from './TermsModal'
import PrivacyPolicyModal from './PrivacyPolicyModal'
import CookiePolicyModal from './CookiePolicyModal'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isCookieOpen, setIsCookieOpen] = useState(false)

  return (
    <footer className="bg-dark border-t border-gray-medium">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              CAROTARE <span className="text-primary">BETON</span>
            </h2>
            <p className="text-gray-light">
              Ne ocupăm de găuri și tăieturi în beton, fără complicații și fără promisiuni deșarte. Dacă ai nevoie de ajutor, suntem la un telefon distanță.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-4">Link-uri Rapide</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicii" className="text-gray-light hover:text-primary transition-colors">
                  Servicii
                </a>
              </li>
              <li>
                <a href="#despre" className="text-gray-light hover:text-primary transition-colors">
                  Despre Noi
                </a>
              </li>
              <li>
                <a href="#galerie-imagini" className="text-gray-light hover:text-primary transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#intrebari" className="text-gray-light hover:text-primary transition-colors">
                  Întrebări Frecvente
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-light hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="tel:0758663415" 
                    className="text-gray-light hover:text-primary transition-colors font-semibold"
                  >
                    0758 663 415
                  </a>
                  <p className="text-sm text-gray-light">Disponibil 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:contact@carotaretaierebeton.ro" 
                  className="text-gray-light hover:text-primary transition-colors break-all"
                >
                  contact@carotaretaierebeton.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-light">
                  Suceava, Botoșani
                </div>
              </li>
            </ul>
          </div>

          {/* Firma Autorizată */}
          <div>
            <div>
              <p className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                Firmă Autorizată Legal
              </p>
              <div className="text-gray-light text-sm space-y-1">
                <p><strong className="text-white">S.C. SULERU RENOV S.R.L.</strong></p>
                <p>CUI: RO38206793</p>
                <p>J33/1603/2017</p>
                <p className="text-xs">Str. Eroilor nr. 60, Bloc 115, Sc. D, Ap. 5, Suceava</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-medium mt-12 pt-8 pb-4">
          <div className="flex flex-col items-center gap-6">
            {/* ANPC SAL si SOL - Center */}
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://anpc.ro/ce-este-sal/" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Soluționarea Alternativă a Litigiilor"
              >
                <img 
                  src="https://layouth.ro/wp-content/uploads/resurse-publice/anpc-sal-mare.png"
                  alt="Soluționarea Alternativă a Litigiilor" 
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Soluționarea Online a Litigiilor"
              >
                <img 
                  src="https://layouth.ro/wp-content/uploads/resurse-publice/anpc-sol-mare.png"
                  alt="Soluționarea Online a Litigiilor" 
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Policy Buttons - Center row */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-xs text-primary hover:text-white border border-primary hover:bg-primary px-3 py-2 rounded transition-colors whitespace-nowrap"
              >
                Termeni și Condiții
              </button>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-xs text-primary hover:text-white border border-primary hover:bg-primary px-3 py-2 rounded transition-colors whitespace-nowrap"
              >
                Politica de Confidențialitate
              </button>
              <button
                onClick={() => setIsCookieOpen(true)}
                className="text-xs text-primary hover:text-white border border-primary hover:bg-primary px-3 py-2 rounded transition-colors whitespace-nowrap"
              >
                Politica Cookie
              </button>
            </div>

            {/* Copyright - Center bottom */}
            <p className="text-gray-light text-sm text-center">
              © {currentYear} Carotare Beton Suceava și Botoșani. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <CookiePolicyModal isOpen={isCookieOpen} onClose={() => setIsCookieOpen(false)} />
    </footer>
  )
}

export default Footer
