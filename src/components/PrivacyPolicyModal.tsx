import { X } from 'lucide-react'
import { useEffect } from 'react'

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
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
          <h2 className="text-2xl md:text-3xl font-bold text-white">Politica de Confidențialitate</h2>
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
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cine suntem?</h3>
              <p className="text-base leading-relaxed">
                Prezenta Politică de Confidențialitate definește condițiile de utilizare a site-ului 
                <strong className="text-white"> Soluții Beton</strong>.
              </p>
              <p className="mt-2 text-base leading-relaxed">
                <strong className="text-white">S.C. SULERU RENOV S.R.L.</strong> (CUI: RO38206793, J33/1603/2017) 
                încearcă să protejeze dreptul la intimitate și la imagine al utilizatorilor site-ului. 
                Ne propunem să oferim utilizatorilor o experiență online sigură.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Ce date personale colectăm?</h3>
              <p className="text-base leading-relaxed">Pe acest site sunt colectate următoarele categorii de date:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>Numele și prenumele</li>
                <li>Număr de telefon</li>
                <li>Adresă de e-mail</li>
                <li>Adresa IP de pe care ați accesat acest site</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Formulare de contact</h3>
              <p className="text-base leading-relaxed">
                Prin intermediul formularului de contact, ne puteți adresa întrebări sau puteți solicita oferte. 
                Datele dvs. vor fi utilizate exclusiv în scopul analizării solicitării dvs. și pentru a vă contacta 
                în legătură cu serviciile noastre.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">În ce scop folosim datele?</h3>
              <p className="text-base leading-relaxed">Datele personale sunt colectate în scopul:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>Trimiterii de răspunsuri la solicitările primite prin formularele de contact online</li>
                <li>Pentru a vă transmite comunicările/informațiile obligatorii, în baza obligațiilor noastre legale</li>
                <li>Pentru a răspunde la întrebările dvs. sau atunci când ne contactați</li>
              </ul>
              <p className="mt-3 font-semibold text-primary">
                Datele personale colectate pe acest site nu sunt folosite și nu sunt transmise unor terți în scop 
                de marketing direct, fără acordul prealabil al utilizatorului.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cât timp păstrăm datele?</h3>
              <p className="text-base leading-relaxed">
                Datele personale sunt păstrate pe o perioadă necesară pentru îndeplinirea scopului pentru care 
                au fost colectate și conform obligațiilor legale aplicabile.
              </p>
              <p className="mt-2 text-base leading-relaxed">
                Ștergerea datelor personale nu se va realiza dacă:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>Datele sunt necesare pentru îndeplinirea unei obligații legale</li>
                <li>Există un interes public</li>
                <li>Datele sunt necesare pentru constatarea, exercitarea sau apărarea unui drept în instanță</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Ce drepturi aveți asupra datelor?</h3>
              <p className="text-base leading-relaxed">Utilizatorii au următoarele drepturi:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>De a fi informați în legătură cu natura exactă a datelor stocate</li>
                <li>De a primi o copie a tuturor datelor proprii stocate</li>
                <li>De a actualiza datele stocate</li>
                <li>De a solicita ștergerea datelor</li>
                <li>De a vă retrage consimțământul pentru prelucrarea datelor</li>
                <li>De a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cum protejăm datele?</h3>
              <p className="text-base leading-relaxed">
                Site-ul folosește protocoale de securitate moderne și este găzduit pe platforme securizate. 
                Luăm toate măsurile necesare pentru a proteja datele dumneavoastră împotriva accesului neautorizat, 
                modificării, divulgării sau distrugerii.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Contact</h3>
              <p className="text-base leading-relaxed">
                În cazul în care aveți întrebări despre modul în care prelucrăm informațiile personale sau dacă 
                doriți să exercitați vreunul dintre drepturile menționate, vă rugăm să ne contactați la:
              </p>
              <div className="mt-3 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="font-semibold text-white">S.C. SULERU RENOV S.R.L.</p>
                <p>Email: <a href="mailto:contact@carotaretaierebeton.ro" className="text-primary hover:text-primary-light">contact@carotaretaierebeton.ro</a></p>
                <p>Telefon: <a href="tel:0758663415" className="text-primary hover:text-primary-light">0758 663 415</a></p>
                <p className="text-sm mt-2">Str. Eroilor nr. 60, Bloc 115, Sc. D, Ap. 5, Suceava</p>
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

export default PrivacyPolicyModal
