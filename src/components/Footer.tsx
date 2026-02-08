import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import TermsModal from './TermsModal'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  return (
    <footer className="bg-dark border-t border-gray-medium">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              SOLUȚII <span className="text-primary">BETON</span>
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
                  href="mailto:sulerurenov@yahoo.com" 
                  className="text-gray-light hover:text-primary transition-colors break-all"
                >
                  sulerurenov@yahoo.com
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
        <div className="border-t border-gray-medium mt-12 pt-8 text-center">
          <p className="text-gray-light text-sm mb-3">
            © {currentYear} Carotaj Beton Suceava și Botoșani. Toate drepturile rezervate.
          </p>
          <button
            onClick={() => setIsTermsOpen(true)}
            className="text-sm text-primary hover:text-white border border-primary hover:bg-primary px-4 py-2 rounded transition-colors"
          >
            Termeni și Condiții
          </button>
        </div>
      </div>

      {/* Terms Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  )
}

export default Footer
