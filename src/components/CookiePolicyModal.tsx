import { X } from 'lucide-react'
import { useEffect } from 'react'

interface CookiePolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

const CookiePolicyModal = ({ isOpen, onClose }: CookiePolicyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Withdraw consent: delete the consent cookie and the Google Analytics cookies, then reload so the banner shows again
  const resetCookieConsent = () => {
    const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
    document.cookie
      .split(';')
      .map(c => c.trim().split('=')[0])
      .filter(name => name === 'cookie-consent' || name.startsWith('_ga'))
      .forEach(name => {
        document.cookie = `${name}=; ${expired}`
        document.cookie = `${name}=; ${expired}; domain=.${location.hostname}`
      })
    location.reload()
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#1a1a1a] border-2 border-primary/40 rounded-xl max-w-4xl w-full max-h-[85vh] md:max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#1a1a1a] border-b-2 border-primary/40 px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Politica de cookie-uri</h2>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
            type="button"
            className="text-gray-light hover:text-primary transition-colors"
            aria-label="Închide"
          >
            <X className="h-6 w-6 md:h-7 md:w-7" />
          </button>
        </div>

        {/* Content */}
        <div 
          className="px-4 md:px-6 py-4 md:py-6 overflow-y-auto max-h-[calc(85vh-140px)] md:max-h-[calc(90vh-160px)] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              .overflow-y-auto::-webkit-scrollbar {
                display: none;
              }
            `
          }} />
          <div className="space-y-6 md:space-y-8 text-gray-light text-sm md:text-base leading-relaxed">
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Ce sunt cookie-urile?</h3>
              <p className="text-base leading-relaxed">
                Cookie-urile sunt fișiere text mici pe care un site le salvează în browserul de pe calculator sau telefon. Prin ele, site-ul poate ține minte anumite alegeri, ca să nu le faceți din nou la fiecare vizită.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cum folosim cookie-urile?</h3>
              <p className="text-base leading-relaxed">
                Pe acest site folosim doar două tipuri de cookie-uri:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>un cookie necesar, care ține minte dacă ați acceptat sau ați refuzat cookie-urile de analiză</li>
                <li>cookie-uri de analiză Google Analytics, doar dacă apăsați „Accept”</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Tipuri de cookie-uri pe care le folosim</h3>
              
              <div className="space-y-4 mt-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="font-bold text-white mb-2">🔧 Cookie-uri necesare (esențiale)</h4>
                  <p className="text-base leading-relaxed">
                    Sunt necesare ca site-ul să funcționeze corect și nu pot fi dezactivate. Pe acest site e unul singur: cookie-ul care ține minte alegerea dumneavoastră din bannerul de cookie-uri.
                  </p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="font-bold text-white mb-2">📊 Cookie-uri de performanță și analiză</h4>
                  <p className="text-base leading-relaxed">
                    Ne arată câți vizitatori avem și ce pagini văd, ca să putem îmbunătăți site-ul.
                  </p>
                  <p className="text-base leading-relaxed mt-2">
                    Folosim <strong className="text-white">Google Analytics 4</strong> (Google Ireland Ltd.), care plasează
                    cookie-urile <strong className="text-white">_ga</strong> și <strong className="text-white">_ga_*</strong> (valabile
                    până la 2 ani). Acestea sunt plasate <strong className="text-white">doar dacă apăsați „Accept”</strong> în
                    bannerul de cookie-uri; dacă refuzați, Google Analytics nu se încarcă deloc.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cache-ul browserului</h3>
              <p className="text-base leading-relaxed">
                Browserul păstrează local fișierele site-ului (imagini, CSS, JavaScript) pentru încărcare mai rapidă la
                vizitele următoare. Aceste fișiere nu conțin date personale și pot fi șterse oricând din setările browserului.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cookie-uri terțe</h3>
              <p className="text-base leading-relaxed">
                Singurele cookie-uri terțe sunt cele de analiză Google Analytics, plasate doar cu acordul dumneavoastră.
                Nu folosim cookie-uri de publicitate și nu transmitem datele dumneavoastră către agenții de publicitate
                sau rețele de marketing.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cum puteți controla cookie-urile?</h3>
              <p className="text-base leading-relaxed">
                Puteți șterge oricând cookie-urile salvate și puteți seta browserul să le blocheze. Dacă le blocați, pe unele site-uri va trebui să vă refaceți alegerile la fiecare vizită, iar unele funcții pot să nu meargă.
              </p>
              
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <h4 className="font-semibold text-white mb-2">Cum ștergeți cookie-urile din browser:</h4>
                <ul className="text-base space-y-2 ml-4">
                  <li><strong className="text-white">Chrome:</strong> Setări → Confidențialitate și securitate → Șterge datele de navigare</li>
                  <li><strong className="text-white">Firefox:</strong> Setări → Confidențialitate și securitate → Cookie-uri și date ale site-urilor</li>
                  <li><strong className="text-white">Safari:</strong> Setări → Confidențialitate → Gestionează datele site-urilor web</li>
                  <li><strong className="text-white">Edge:</strong> Setări → Cookie-uri și permisiuni site → Gestionare și ștergere cookie-uri</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mt-4">
                Vă puteți retrage oricând acordul pentru cookie-urile de analiză:
              </p>
              <button
                type="button"
                onClick={resetCookieConsent}
                className="mt-2 text-sm text-primary hover:text-white border border-primary hover:bg-primary px-4 py-2 rounded transition-colors"
              >
                Modifică acordul pentru cookie-uri
              </button>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Actualizări ale acestei politici</h3>
              <p className="text-base leading-relaxed">
                Actualizăm această politică atunci când se schimbă site-ul sau legislația. Data ultimei actualizări apare mai jos.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Contact</h3>
              <p className="text-base leading-relaxed">
                Pentru întrebări despre cookie-uri, ne puteți contacta:
              </p>
              <div className="mt-3 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="font-semibold text-white">S.C. SULERU RENOV S.R.L.</p>
                <p>Email: <a href="mailto:contact@ecarota.ro" className="text-primary hover:underline font-semibold">contact@ecarota.ro</a></p>
                <p>Telefon: <a href="tel:0758663415" className="text-primary hover:underline font-semibold">0758 663 415</a></p>
              </div>
            </section>

            <section className="text-center pt-6 border-t border-gray-medium">
              <p className="text-sm">
                Ultima actualizare: 19.10.2026
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#1a1a1a] border-t-2 border-primary/40 px-4 md:px-6 py-3 md:py-5">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
            type="button"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all text-base md:text-lg"
          >
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicyModal
