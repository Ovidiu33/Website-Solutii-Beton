import { X } from 'lucide-react'
import { useEffect } from 'react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  // Blochează scroll-ul pe body când modalul este deschis
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup la unmount
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
          <h2 className="text-2xl md:text-3xl font-bold text-white">Termeni și Condiții</h2>
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
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              .overflow-y-auto::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera */
              }
            `
          }} />
          <div className="space-y-6 md:space-y-8 text-gray-light text-sm md:text-base leading-relaxed">
            {/* Date firma - MUTAT SUS */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/50 rounded-xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-3">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                Date Societate
              </h3>
              <div className="space-y-3 text-base">
                <p className="text-white"><strong className="text-primary">Denumire:</strong> S.C. SULERU RENOV S.R.L.</p>
                <p className="text-white"><strong className="text-primary">CUI:</strong> RO38206793</p>
                <p className="text-white"><strong className="text-primary">Nr. Reg. Com.:</strong> J33/1603/2017</p>
                <p className="text-white"><strong className="text-primary">Sediu Social:</strong> Str. Eroilor nr. 60, Bloc 115, Sc. D, Ap. 5, Suceava</p>
                <p className="text-white"><strong className="text-primary">Activitate:</strong> 4120 - Lucrări de construcții a clădirilor rezidențiale și nerezidențiale</p>
                <p className="text-white">
                  <strong className="text-primary">Contact:</strong>{' '}
                  <a href="tel:0758663415" className="text-primary hover:underline font-semibold">0758 663 415</a>
                  {' | '}
                  <a href="mailto:sulerurenov@yahoo.com" className="text-primary hover:underline">sulerurenov@yahoo.com</a>
                </p>
              </div>
            </section>

            {/* Introducere */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">1. Introducere</h3>
              <p className="text-base leading-relaxed">
                Prezentele Termene și Condiții reglementează relația contractuală dintre <strong className="text-white">S.C. SULERU RENOV S.R.L.</strong> 
                (furnizor) și Client în cadrul prestării serviciilor de carotare în beton, tăiere beton, demolări controlate și lucrări conexe. 
                Prin solicitarea unei oferte sau acceptarea serviciilor, Clientul este de acord cu termenii și condițiile prezentate mai jos.
              </p>
            </section>

            {/* Obiectul contractului */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">2. Obiectul Contractului</h3>
              <p className="text-base leading-relaxed mb-3">Furnizorul oferă următoarele servicii:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li><strong className="text-white">Carotare în beton</strong> - găuriri de precizie cu diametre între 40mm și 500mm</li>
                <li><strong className="text-white">Tăiere beton</strong> - tăieturi liniare orizontale și verticale pentru demolări controlate</li>
                <li><strong className="text-white">Demolări parțiale</strong> - eliminarea selectivă a structurilor din beton armat</li>
                <li><strong className="text-white">Consultanță tehnică</strong> - evaluare și recomandări pentru proiecte complexe</li>
              </ul>
            </section>

            {/* Ofertare și comandă */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">3. Ofertare și Comandă</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Ofertele de preț sunt valabile <strong className="text-white">30 de zile</strong> de la data emiterii, dacă nu se specifică altfel</li>
                <li>Prețurile pot varia în funcție de complexitatea lucrării, accesibilitate, volum și condiții de la fața locului</li>
                <li>Comanda se consideră confirmată după acceptarea ofertei și plata avansului (dacă este cazul)</li>
                <li>Modificările solicitate de Client după acceptarea ofertei pot atrage costuri suplimentare</li>
              </ul>
            </section>

            {/* Responsabilitățile Clientului */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">4. Responsabilitățile Clientului</h3>
              <p className="text-base leading-relaxed mb-3">Clientul se obligă să:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Asigure <strong className="text-white">acces liber</strong> la zona de lucru și sursă de apă și electricitate dacă este necesar</li>
                <li>Furnizeze informații corecte despre <strong className="text-white">structura clădirii</strong>, instalații ascunse (cabluri, țevi, etc.)</li>
                <li>Obțină toate <strong className="text-white">autorizațiile necesare</strong> pentru lucrările de intervenție (dacă este cazul)</li>
                <li>Evacueze zona de lucru de persoane și obiecte sau bunuri valoroase</li>
                <li>Notifice Furnizorul în cazul descoperirii unor <strong className="text-white">obstacole neprevăzute</strong> (armături, instalații, etc.)</li>
              </ul>
            </section>

            {/* Responsabilitățile Furnizorului */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">5. Responsabilitățile Furnizorului</h3>
              <p className="text-base leading-relaxed mb-3">Furnizorul se obligă să:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Execută lucrările conform specificațiilor tehnice agreate cu Clientul</li>
                <li>Utilizeze echipamente profesionale și personal calificat</li>
                <li>Respecte normele de <strong className="text-white">protecția muncii și securitate</strong></li>
                <li>Lase zona de lucru într-o stare curată și ordonată după finalizare</li>
                <li>Informeze Clientul despre orice <strong className="text-white">impedimente tehnice</strong> descoperite în timpul lucrării</li>
              </ul>
            </section>

            {/* Durata execuției */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">6. Durata Execuției</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Termenele de execuție sunt estimate în funcție de complexitatea lucrării și se stabilesc în oferta de preț</li>
                <li>Întârzierile cauzate de <strong className="text-white">condiții meteo nefavorabile, accesibilitate redusă sau obstacole neprevăzute</strong> nu sunt imputabile Furnizorului</li>
                <li>Furnizorul va notifica Clientul în cazul unor întârzieri și va propune un nou termen de finalizare</li>
              </ul>
            </section>

            {/* Garanții și limitări */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">7. Garanții și Limitări de Răspundere</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Furnizorul garantează calitatea lucrărilor executate conform standardelor profesionale</li>
                <li>Furnizorul <strong className="text-white">nu răspunde</strong> pentru deteriorări cauzate de informații incorecte furnizate de Client (instalații nedeclarate, structuri ascunse, etc.)</li>
                <li>Clientul este responsabil pentru obținerea autorizațiilor necesare intervenției în structura clădirii</li>
                <li>Reclamațiile se primesc în termen de <strong className="text-white">48 ore</strong> de la finalizarea lucrării</li>
              </ul>
            </section>

            {/* Forță majoră */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">8. Forță Majoră</h3>
              <p className="text-base leading-relaxed">
                Niciuna dintre părți nu va fi răspunzătoare pentru neexecutarea obligațiilor contractuale dacă aceasta se datorează unui 
                eveniment de <strong className="text-white">forță majoră</strong> (calamități naturale, pandemii, restricții guvernamentale, etc.). 
                Partea afectată va notifica cealaltă parte în termen de 48 ore și va furniza dovezi ale evenimentului de forță majoră.
              </p>
            </section>

            {/* Confidențialitate și protecția datelor */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">9. Confidențialitate și Protecția Datelor</h3>
              <p className="text-base leading-relaxed">
                Datele personale ale Clientului sunt prelucrate conform <strong className="text-white">GDPR</strong> și a 
                Politicii de Confidențialitate a S.C. SULERU RENOV S.R.L. (disponibilă pe site). Datele sunt folosite exclusiv 
                pentru prestarea serviciilor și nu sunt transmise către terți fără acordul Clientului.
              </p>
            </section>

            {/* Litigii și legea aplicabilă */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">10. Litigii și Legea Aplicabilă</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Prezentele Termene și Condiții sunt guvernate de <strong className="text-white">legea română</strong></li>
                <li>Orice litigiu va fi soluționat pe cale amiabilă. În cazul imposibilității, litigiul va fi deferit instanțelor competente din <strong className="text-white">Suceava</strong></li>
                <li>Clientul poate accesa mecanismele de <strong className="text-white">soluționare alternativă a litigiilor</strong> (SAL) prin ANPC - <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://anpc.ro/ce-este-sal/</a></li>
                <li>Pentru litigii transfrontaliere, Clientul poate apela la platforma SOL - <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a></li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">11. Contact</h3>
              <p className="text-base leading-relaxed mb-3">
                Pentru întrebări sau clarificări privind acești Termeni și Condiții, vă rugăm să ne contactați:
              </p>
              <p className="text-white">
                <strong className="text-primary">Telefon:</strong>{' '}
                <a href="tel:0758663415" className="text-primary hover:underline font-semibold">0758 663 415</a>
              </p>
              <p className="text-white">
                <strong className="text-primary">Email:</strong>{' '}
                <a href="mailto:sulerurenov@yahoo.com" className="text-primary hover:underline">sulerurenov@yahoo.com</a>
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

export default TermsModal
