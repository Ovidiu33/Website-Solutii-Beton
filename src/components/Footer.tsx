import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-gray-medium">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              SOLUȚII <span className="text-primary">BETON</span>
            </h3>
            <p className="text-gray-light mb-6">
              Ne ocupăm de găuri și tăieturi în beton, fără complicații și fără promisiuni deșarte. Dacă ai nevoie de ajutor, suntem la un telefon distanță.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@solutii.beton.sv" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-dark hover:bg-primary border border-gray-medium hover:border-primary rounded-lg flex items-center justify-center transition-all"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Link-uri Rapide</h4>
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
                <a href="#galerie" className="text-gray-light hover:text-primary transition-colors">
                  Galerie
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
            <h4 className="text-lg font-display font-bold text-white mb-4">Contact</h4>
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
                  className="text-gray-light hover:text-primary transition-colors"
                >
                  sulerurenov@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-gray-light">
                  Suceava, Botoșani
                  <br />
                  <span className="text-sm"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-medium mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-light text-sm">
              © {currentYear} Carotaj Beton Suceava și Botoșani. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
