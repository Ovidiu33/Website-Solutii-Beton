import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { FaTiktok } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`fixed top-0 w-full z-50 ${isMenuOpen ? 'bg-dark' : 'bg-transparent backdrop-blur-sm'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center flex-1">
            <a href="#" className="text-3xl md:text-4xl lg:text-4xl font-display font-bold text-white hover:scale-105 hover:text-primary transition-all duration-300">
              CAROTAJ <span className="text-primary">BETON</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-2">
            <a href="#servicii" className="text-base lg:text-lg text-white hover:text-primary transition-colors relative group font-semibold">
              Servicii
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#despre" className="text-base lg:text-lg text-white hover:text-primary transition-colors relative group font-semibold">
              Despre Noi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#galerie-imagini" className="text-base lg:text-lg text-white hover:text-primary transition-colors relative group font-semibold">
              Galerie
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#intrebari" className="text-base lg:text-lg text-white hover:text-primary transition-colors relative group font-semibold">
              Întrebări
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-base lg:text-lg text-white hover:text-primary transition-colors relative group font-semibold">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Phone Number - Desktop Only */}
          <div className="hidden md:flex items-center justify-end flex-1 gap-8">
            <a 
              href="tel:0758663415" 
              className="text-white hover:text-primary transition-colors font-bold text-lg lg:text-xl flex items-center gap-2 relative group"
            >
              <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
              <span>0758 663 415</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <a 
              href="https://www.tiktok.com/@solutii.beton.sv" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 text-white p-3.5 rounded-lg transition-all duration-300 flex items-center justify-center"
              aria-label="TikTok"
            >
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label={isMenuOpen ? "Închide meniu" : "Deschide meniu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-dark bg-dark">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#servicii" 
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicii
              </a>
              <a 
                href="#despre" 
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Despre Noi
              </a>
              <a 
                href="#galerie-imagini" 
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </a>
              <a 
                href="#intrebari" 
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Întrebări
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://www.tiktok.com/@solutii.beton.sv" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark border border-gray-medium hover:bg-primary hover:border-primary text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTiktok className="h-5 w-5" />
                <span>TikTok</span>
              </a>
              <a 
                href="tel:0758663415" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                <span>0758 663 415</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
