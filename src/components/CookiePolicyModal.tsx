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
          <h2 className="text-2xl md:text-3xl font-bold text-white">Politica Cookie</h2>
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
                Cookie-urile sunt fișiere text de mici dimensiuni pe care un site le salvează pe computerul sau 
                dispozitivul dvs. mobil în momentul în care începeți să utilizați site-ul respectiv. Prin 
                intermediul cookie-urilor, site-ul își va „aminti" acțiunile și preferințele dvs. 
                (cum ar fi datele de autentificare, limba de afișare, dimensiunea fontului și alte preferințe 
                de afișare) pentru ca dvs. să nu fie nevoit să le reintroduceți atunci când reveniți pe site 
                sau când navigați de la o pagină la alta.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cum folosim cookie-urile?</h3>
              <p className="text-base leading-relaxed">
                Site-ul nostru folosește cookie-uri pentru a îmbunătăți experiența de navigare și pentru 
                funcționarea corectă a site-ului. Folosim cookie-uri pentru:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>Salvarea preferințelor utilizatorilor</li>
                <li>Cache pentru îmbunătățirea performanței site-ului</li>
                <li>Măsurarea traficului și analiza comportamentului utilizatorilor (cu acordul dvs.)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Tipuri de cookie-uri pe care le folosim</h3>
              
              <div className="space-y-4 mt-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="font-bold text-white mb-2">🔧 Cookie-uri necesare (esențiale)</h4>
                  <p className="text-base leading-relaxed">
                    Aceste cookie-uri sunt necesare pentru funcționarea corectă a site-ului și nu pot fi dezactivate. 
                    Includ cookie-uri pentru navigare, cache și Service Worker.
                  </p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="font-bold text-white mb-2">📊 Cookie-uri de performanță și analiză</h4>
                  <p className="text-base leading-relaxed">
                    Ne permit să măsurăm numărul de vizitatori și să vedem cum se deplasează vizitatorii pe site-ul nostru. 
                    Aceste informații ne ajută să îmbunătățim funcționarea site-ului.
                  </p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="font-bold text-white mb-2">💾 Cookie-uri de funcționalitate</h4>
                  <p className="text-base leading-relaxed">
                    Permit site-ului să țină minte alegerile făcute de dvs. (cum ar fi limba) și oferă funcții 
                    îmbunătățite și personalizate.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Service Worker și Cache</h3>
              <p className="text-base leading-relaxed">
                Site-ul folosește tehnologia Service Worker pentru a îmbunătăți performanța și pentru funcționare offline. 
                Service Worker-ul stochează în cache fișierele site-ului (imagini, CSS, JavaScript) pentru încărcare mai rapidă. 
                Aceste date sunt stocate local pe dispozitivul dvs.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cookie-uri terțe</h3>
              <p className="text-base leading-relaxed">
                Nu folosim cookie-uri de tracking sau publicitate de la terți. Site-ul nostru nu transmite datele 
                dvs. către agenții de publicitate sau rețele de marketing.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cum controlezi cookie-urile?</h3>
              <p className="text-base leading-relaxed">
                Puteți controla și/sau șterge cookie-urile așa cum doriți. Puteți șterge toate cookie-urile 
                care se află deja pe computerul dvs. și puteți seta majoritatea browserelor să împiedice plasarea 
                acestora. Cu toate acestea, dacă faceți acest lucru, poate fi necesar să ajustați manual unele 
                preferințe de fiecare dată când vizitați un site, iar unele servicii și funcționalități pot să 
                nu funcționeze.
              </p>
              
              <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <h4 className="font-semibold text-white mb-2">Cum ștergi cookie-urile din browser:</h4>
                <ul className="text-base space-y-2 ml-4">
                  <li><strong className="text-white">Chrome:</strong> Setări → Confidențialitate și securitate → Șterge datele de navigare</li>
                  <li><strong className="text-white">Firefox:</strong> Opțiuni → Confidențialitate și securitate → Cookie-uri și date ale site-urilor</li>
                  <li><strong className="text-white">Safari:</strong> Preferințe → Confidențialitate → Gestionare date site-uri web</li>
                  <li><strong className="text-white">Edge:</strong> Setări → Cookie-uri și permisiuni site → Gestionare și ștergere cookie-uri</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Actualizări ale politicii de cookie-uri</h3>
              <p className="text-base leading-relaxed">
                Ne rezervăm dreptul de a actualiza această politică de cookie-uri periodic pentru a reflecta 
                schimbările în practicile noastre sau din motive operaționale, legale sau de reglementare.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Contact</h3>
              <p className="text-base leading-relaxed">
                Dacă aveți întrebări despre modul în care folosim cookie-urile, vă rugăm să ne contactați:
              </p>
              <div className="mt-3 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="font-semibold text-white">S.C. SULERU RENOV S.R.L.</p>
                <p>Email: <a href="mailto:contact@carotaretaierebeton.ro" className="text-primary hover:underline font-semibold">contact@carotaretaierebeton.ro</a></p>
                <p>Telefon: <a href="tel:0758663415" className="text-primary hover:underline font-semibold">0758 663 415</a></p>
              </div>
            </section>

            <section className="text-center pt-6 border-t border-gray-medium">
              <p className="text-sm">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
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
