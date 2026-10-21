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
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 bg-black/90"
      onClick={onClose}
    >
      <div 
        className="modal-box relative flex flex-col bg-[#1a1a1a] border-2 border-primary/40 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 bg-[#1a1a1a] border-b-2 border-primary/40 px-4 md:px-6 py-3 md:py-5 flex items-center justify-between gap-3">
          <h2 className="min-w-0 text-2xl md:text-3xl font-bold text-white [overflow-wrap:anywhere]">Politica de confidențialitate</h2>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onClose()
            }}
            type="button"
            className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
            aria-label="Închide"
          >
            <X className="h-6 w-6 md:h-7 md:w-7" />
          </button>
        </div>

        {/* Content */}
        <div 
          className="flex-1 min-h-0 px-4 md:px-6 py-4 md:py-6 overflow-y-auto overscroll-contain bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
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
                Această politică explică ce date personale colectăm prin site-ul <strong className="text-white">eCarota (ecarota.ro)</strong> și cum le folosim.
              </p>
              <p className="mt-2 text-base leading-relaxed">
                <strong className="text-white">S.C. SULERU RENOV S.R.L.</strong> (CUI: RO38206793, J33/1603/2017) este operatorul acestor date. Le protejăm și le folosim doar în scopurile de mai jos.
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
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Formularul de contact</h3>
              <p className="text-base leading-relaxed">
                Prin formularul de contact ne puteți pune întrebări sau cere o ofertă. Folosim datele doar ca să analizăm cererea și să vă contactăm în legătură cu ea. Ca să vă putem suna rapid, datele din formular (nume, telefon, email, serviciu și mesaj)
                ne sunt transmise și ca notificare internă prin WhatsApp (Meta).
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">În ce scop folosim datele?</h3>
              <p className="text-base leading-relaxed">Folosim datele pentru:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>a răspunde la cererile trimise prin formularul de contact</li>
                <li>a vă transmite informările pe care ni le cere legea</li>
                <li>a vă răspunde când ne contactați telefonic sau pe email</li>
                <li>a măsura traficul pe site cu Google Analytics, doar dacă ați acceptat cookie-urile de analiză (detalii în Politica de cookie-uri)</li>
              </ul>
              <p className="mt-3 font-semibold text-primary">
                Nu folosim datele pentru marketing direct și nu le transmitem în acest scop altor firme fără acordul dumneavoastră.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cât timp păstrăm datele?</h3>
              <p className="text-base leading-relaxed">
                Păstrăm datele doar cât e nevoie pentru scopul în care le-am primit și cât ne obligă legea.
              </p>
              <p className="mt-2 text-base leading-relaxed">
                Nu putem șterge datele atunci când:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>sunt necesare pentru îndeplinirea unei obligații legale</li>
                <li>există un interes public</li>
                <li>sunt necesare pentru constatarea, exercitarea sau apărarea unui drept în instanță</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Ce drepturi aveți?</h3>
              <p className="text-base leading-relaxed">Aveți dreptul:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base mt-2">
                <li>să aflați ce date avem despre dumneavoastră</li>
                <li>să primiți o copie a acestor date</li>
                <li>să cereți corectarea lor</li>
                <li>să cereți ștergerea lor</li>
                <li>să vă retrageți oricând consimțământul</li>
                <li>să depuneți o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (<a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dataprotection.ro</a>)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Cum protejăm datele?</h3>
              <p className="text-base leading-relaxed">
                Site-ul folosește conexiune criptată (HTTPS) și este găzduit pe servere securizate. Luăm măsuri tehnice și organizatorice ca datele să nu ajungă la persoane neautorizate și să nu fie modificate, divulgate sau distruse.
              </p>
            </section>

            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Contact</h3>
              <p className="text-base leading-relaxed">
                Pentru întrebări despre datele dumneavoastră sau ca să vă exercitați drepturile de mai sus, ne puteți scrie sau suna:
              </p>
              <div className="mt-3 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="font-semibold text-white">S.C. SULERU RENOV S.R.L.</p>
                <p>Email: <a href="mailto:contact@ecarota.ro" className="text-primary hover:text-primary-light">contact@ecarota.ro</a></p>
                <p>Telefon: <a href="tel:0758663415" className="text-primary hover:text-primary-light">0758 663 415</a></p>
                <p className="text-sm mt-2">Str. Eroilor nr. 60, Bloc 115, Sc. D, Ap. 5, Suceava</p>
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
        <div className="shrink-0 bg-[#1a1a1a] border-t-2 border-primary/40 px-4 md:px-6 py-3 md:py-5">
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
