import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-dark">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl md:text-3xl font-display font-bold text-white hover:opacity-90 transition-opacity">
              SOLUȚII <span className="text-primary">BETON</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicii" className="text-gray-light hover:text-primary transition-colors relative group">
              Servicii
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#despre" className="text-gray-light hover:text-primary transition-colors relative group">
              Despre Noi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#galerie" className="text-gray-light hover:text-primary transition-colors relative group">
              Galerie
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-light hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:0758663415" 
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>0758 663 415</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-dark">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#servicii" 
                className="text-gray-light hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicii
              </a>
              <a 
                href="#despre" 
                className="text-gray-light hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Despre Noi
              </a>
              <a 
                href="#galerie" 
                className="text-gray-light hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </a>
              <a 
                href="#contact" 
                className="text-gray-light hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
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
