import { Phone, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { TikTokIcon } from './icons'

const NAV = [
  { href: '#servicii', label: 'Servicii' },
  { href: '#despre', label: 'Despre noi' },
  { href: '#galerie-imagini', label: 'Galerie' },
  { href: '#intrebari', label: 'Întrebări' },
  { href: '#contact', label: 'Contact' },
]

const TIKTOK = 'https://www.tiktok.com/@carotare.taiere.beton'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  return (
    <header className="theme-dark fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-graphite">
      <div className="container-custom">
        <div className="flex items-center justify-between gap-6 narrow:gap-3 h-16 lg:h-20">
          <a href="#" className="group flex items-center shrink-0" aria-label="eCAROTA, mergi la începutul paginii">
            <Logo className="h-[22px] narrow:h-[19px] lg:h-[26px] w-auto" />
            <span className="sr-only">eCAROTA</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigare principală">
            {NAV.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline font-display font-semibold text-[15px] text-ink/75 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded text-ink/75 hover:text-ink hover:bg-white/5 transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a href="tel:+40758663415" className="btn btn-accent h-11 px-5 text-base">
              <Phone className="h-[18px] w-[18px]" strokeWidth={2.25} />
              <span>0758 663 415</span>
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-1 min-[360px]:gap-2">
            <a
              href={TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded text-ink/75 hover:text-ink hover:bg-white/5 transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a href="tel:+40758663415" className="btn btn-accent h-11 px-3 min-[360px]:px-4 text-base" aria-label="Sună la 0758 663 415">
              <Phone className="h-[18px] w-[18px]" strokeWidth={2.25} />
              <span className="hidden min-[360px]:inline">Sună</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded text-ink hover:bg-white/5"
              aria-label={isMenuOpen ? 'Închide meniu' : 'Deschide meniu'}
              aria-expanded={isMenuOpen}
              aria-controls="meniu-mobil"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div id="meniu-mobil" className="lg:hidden border-t border-white/10 bg-graphite">
          <nav className="container-custom flex flex-col py-3" aria-label="Navigare mobil">
            {NAV.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="font-display font-semibold text-xl text-ink py-3.5 border-b border-white/[0.06] hover:text-accent hover:pl-1 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-5 pb-3">
              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline h-12 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                <TikTokIcon className="h-5 w-5" />
                <span>TikTok</span>
              </a>
              <a href="tel:+40758663415" className="btn btn-accent h-12 text-base">
                <Phone className="h-5 w-5" />
                <span>0758 663 415</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
