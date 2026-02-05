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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#1a1a1a] border-2 border-primary/40 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#1a1a1a] border-b-2 border-primary/40 px-6 py-5 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">Termeni și Condiții</h2>
          <button
            onClick={onClose}
            className="text-gray-light hover:text-primary transition-colors"
            aria-label="Închide"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        {/* Content */}
        <div 
          className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-160px)] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
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
          <div className="space-y-8 text-gray-light text-base leading-relaxed">
            {/* Date firma - MUTAT SUS */}
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
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

            {/* GDPR */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">GDPR - Politica de Confidențialitate</h3>
              <p className="text-base leading-relaxed mb-3">
                Această politică de confidențialitate stabilește modul în care <strong className="text-white">S.C. SULERU RENOV S.R.L.</strong> utilizează 
                și protejează orice informație pe care o furnizați atunci când utilizați acest site web.
              </p>
              <p className="text-base leading-relaxed mb-3">
                S.C. SULERU RENOV S.R.L. se angajează să asigure protejarea confidențialității. Dacă vă cerem să furnizați anumite informații 
                prin care puteți fi identificat atunci când utilizați acest site, puteți fi siguri că aceasta va fi utilizată numai în 
                conformitate cu această declarație de confidențialitate.
              </p>
              <p className="text-base leading-relaxed">
                S.C. SULERU RENOV S.R.L. poate modifica din când în când această politică prin actualizarea acestei pagini. 
                Ar trebui să verificați din când în când această pagină pentru a vă asigura că sunteți mulțumit de orice schimbare.
              </p>
            </section>

            {/* Ce colectăm */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Ce Colectăm</h3>
              <p className="text-base leading-relaxed mb-3">Putem colecta următoarele informații:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>numele și prenumele</li>
                <li>informații de contact, inclusiv număr de telefon și adresa de e-mail</li>
                <li>informații despre locația lucrării (adresă, detalii tehnice)</li>
                <li>alte informații relevante pentru prestarea serviciilor solicitate</li>
              </ul>
            </section>

            {/* Ce facem cu informațiile */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Ce Facem cu Informațiile Pe Care Le Adunăm</h3>
              <p className="text-base leading-relaxed mb-3">Solicităm aceste informații pentru a înțelege nevoile dvs. și pentru a vă oferi un serviciu mai bun, în special pentru:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Menținerea evidenței interne și facturare</li>
                <li>Contactarea dumneavoastră pentru confirmarea programărilor și detalii despre lucrări</li>
                <li>Îmbunătățirea produselor și serviciilor noastre</li>
                <li>Trimiterea de oferte sau informații despre serviciile noastre (doar cu acordul dumneavoastră)</li>
              </ul>
            </section>

            {/* Securitate */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Securitate</h3>
              <p className="text-base leading-relaxed">
                Ne angajăm să ne asigurăm că informațiile dvs. sunt sigure. Pentru a preveni accesul sau dezvăluirea neautorizată, 
                am pus în practică proceduri fizice, electronice și manageriale adecvate pentru protejarea și asigurarea informațiilor 
                pe care le colectăm online.
              </p>
            </section>

            {/* Cookie-uri */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Cum Folosim Cookie-urile</h3>
              <p className="text-base leading-relaxed mb-4">
                Un cookie este un fișier mic care solicită permisiunea de a fi plasat pe unitatea hard disk a computerului. 
                Odată ce sunteți de acord, fișierul este adăugat, iar modulul cookie vă ajută să analizați traficul web sau 
                vă informează când vizitați un anumit site.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Utilizăm cookie-urile din jurnalul de trafic pentru a identifica ce pagini sunt folosite. Acest lucru ne ajută 
                să analizăm date despre traficul de pagini web și să îmbunătățim site-ul nostru pentru a ne adapta nevoilor clienților. 
                Utilizăm aceste informații numai în scopuri de analiză statistică.
              </p>
              <p className="text-base leading-relaxed">
                Puteți alege să acceptați sau să refuzați cookie-urile. Majoritatea browserelor web acceptă automat cookie-urile, 
                dar de obicei puteți modifica setarea browserului pentru a refuza cookie-urile dacă preferați.
              </p>
            </section>

            {/* Legături către alte site-uri */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Legături Către Alte Site-uri Web</h3>
              <p className="text-base leading-relaxed">
                Site-ul nostru poate conține legături către alte site-uri de interes. Cu toate acestea, odată ce ați utilizat 
                aceste linkuri pentru a părăsi site-ul nostru, trebuie să rețineți că nu avem control asupra acelui alt site web. 
                Prin urmare, nu putem fi responsabili pentru protecția și confidențialitatea oricăror informații pe care le furnizați 
                în timp ce vizitați astfel de site-uri.
              </p>
            </section>

            {/* Controlarea informațiilor */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Controlarea Informațiilor Dvs. Personale</h3>
              <p className="text-base leading-relaxed mb-3">Puteți alege să restricționați colectarea sau utilizarea informațiilor dvs. personale în următoarele moduri:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-base">
                <li>Ori de câte ori vi se cere să completați un formular pe site, puteți indica faptul că nu doriți ca informațiile să fie folosite în scopuri de marketing direct</li>
                <li>Dacă ați fost de acord în prealabil cu utilizarea informațiilor dvs. personale în scopuri de marketing direct, vă puteți schimba opinia în orice moment scriind sau trimițând e-mail la <a href="mailto:sulerurenov@yahoo.com" className="text-primary hover:underline font-semibold">sulerurenov@yahoo.com</a></li>
              </ul>
              <p className="mt-4 text-base leading-relaxed">
                Nu vom vinde, distribui sau închiria informațiile dvs. personale unor terțe părți decât dacă avem permisiunea dvs. 
                sau dacă legea ne cere să facem acest lucru.
              </p>
              <p className="mt-4 text-base leading-relaxed">
                Dacă credeți că orice informație pe care o deținem este incorectă sau incompletă, vă rugăm să ne scrieți sau 
                să ne trimiteți un e-mail cât mai curând posibil. Vom corecta cu promptitudine orice informație găsită incorectă.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#1a1a1a] border-t-2 border-primary/40 px-6 py-5">
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all text-lg"
          >
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  )
}

export default TermsModal
