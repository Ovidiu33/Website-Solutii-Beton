import { Shield, FileText, Scale, Lock } from 'lucide-react'

const TermsAndConditions = () => {
  return (
    <section id="termeni" className="relative py-16 md:py-24 bg-gradient-to-br from-dark via-gray-dark to-dark overflow-hidden scroll-mt-24">
      {/* Fade from black at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h2 className="section-title">Termeni și Condiții</h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto mt-4">
            Informații legale și condiții de prestare servicii
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Firma Autorizată */}
          <div className="bg-gray-dark border border-primary/30 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Firmă Autorizată Legal</h3>
                <div className="space-y-3 text-gray-light">
                  <p className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">Denumire:</span>
                    <span>SULERU RENOV SRL</span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">CUI:</span>
                    <span>38206793</span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">Nr. Reg. Com.:</span>
                    <span>J33/1603/12.09.2017</span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">EUID:</span>
                    <span>ROONRC.J33/1603/2017</span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">Sediu Social:</span>
                    <span>Strada EROILOR, Nr. 60, Bloc 115, Scara D, Ap. 5, Suceava</span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">Activitate:</span>
                    <span>4120 - Lucrări de construcții a clădirilor rezidențiale și nerezidențiale</span>
                  </p>
                  <p className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">Director:</span>
                    <span>Cătălina Elena VARTIC</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Servicii */}
          <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              1. Prestare Servicii
            </h3>
            <div className="space-y-4 text-gray-light">
              <p>
                <strong className="text-white">1.1.</strong> SULERU RENOV SRL prestează servicii de carotare, tăiere și demolări în beton, 
                în județele Suceava și Botoșani, conform cerințelor legale în vigoare.
              </p>
              <p>
                <strong className="text-white">1.2.</strong> Serviciile includ: carotare beton (găuri Ø 30-500mm), tăiere planșee și pereți, 
                demolări controlate, găuri pentru instalații (hote, ventilații, conducte).
              </p>
              <p>
                <strong className="text-white">1.3.</strong> Toate lucrările se execută cu echipament profesional și de către personal calificat, 
                respectând normele de siguranță în vigoare.
              </p>
            </div>
          </div>

          {/* Ofertare și Prețuri */}
          <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">2. Ofertare și Prețuri</h3>
            <div className="space-y-4 text-gray-light">
              <p>
                <strong className="text-white">2.1.</strong> Ofertele de preț se stabilesc individual, în funcție de complexitatea lucrării, 
                dimensiunile găurilor, grosimea betonului și locația șantierului.
              </p>
              <p>
                <strong className="text-white">2.2.</strong> Prețurile comunicate telefonic sunt orientative. Prețul final se confirmă după 
                evaluarea la fața locului.
              </p>
              <p>
                <strong className="text-white">2.3.</strong> Clientul este informat despre costurile suplimentare (deplasare în afara zonei acoperite, 
                lucrări în weekend/sărbători) înainte de începerea lucrărilor.
              </p>
            </div>
          </div>

          {/* Responsabilități */}
          <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">3. Responsabilități</h3>
            <div className="space-y-4 text-gray-light">
              <p>
                <strong className="text-white">3.1. Obligațiile prestatorului:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Executarea lucrărilor conform standardelor profesionale</li>
                <li>Utilizarea echipamentului corespunzător</li>
                <li>Protejarea zonei de lucru și curățarea după finalizare</li>
                <li>Respectarea termenelor stabilite</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">3.2. Obligațiile clientului:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Furnizarea informațiilor corecte despre lucrare (planuri, dimensiuni)</li>
                <li>Asigurarea accesului la șantier și la rețelele de utilități (apă, curent)</li>
                <li>Îndepărtarea obiectelor fragile din zona de lucru</li>
                <li>Plata conform înțelegerii</li>
              </ul>
            </div>
          </div>

          {/* Garanții */}
          <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">4. Garanții</h3>
            <div className="space-y-4 text-gray-light">
              <p>
                <strong className="text-white">4.1.</strong> Garantăm calitatea execuției lucrărilor conform normelor tehnice în vigoare.
              </p>
              <p>
                <strong className="text-white">4.2.</strong> Nu ne asumăm răspunderea pentru defecțiuni cauzate de starea excepțională 
                a structurii (ex: beton degradat, armături corodate, structuri nesigure) dacă acestea nu au fost semnalate înainte.
              </p>
              <p>
                <strong className="text-white">4.3.</strong> Eventualele reclamații se rezolvă în termen de 48 ore de la semnalare.
              </p>
            </div>
          </div>

          {/* Protecția Datelor */}
          <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" />
              5. Protecția Datelor Personale (GDPR)
            </h3>
            <div className="space-y-4 text-gray-light">
              <p>
                <strong className="text-white">5.1.</strong> Colectăm și procesăm date personale (nume, telefon, email, adresă) 
                exclusiv pentru prestarea serviciilor și comunicarea cu clienții.
              </p>
              <p>
                <strong className="text-white">5.2.</strong> Datele personale nu sunt transmise către terți fără acordul clientului, 
                cu excepția obligațiilor legale (ex: facturare).
              </p>
              <p>
                <strong className="text-white">5.3.</strong> Clientul are dreptul de acces, rectificare și ștergere a datelor conform 
                Regulamentului (UE) 2016/679 (GDPR).
              </p>
              <p>
                <strong className="text-white">5.4.</strong> Pentru exercitarea drepturilor GDPR: 
                <a href="mailto:contact@carotaretaierebeton.ro" className="text-primary hover:underline ml-1">
                  contact@carotaretaierebeton.ro
                </a>
              </p>
            </div>
          </div>

          {/* Anulări */}
          <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">6. Anulări și Reprogramări</h3>
            <div className="space-y-4 text-gray-light">
              <p>
                <strong className="text-white">6.1.</strong> Anulările sau reprogramările se pot face telefonic cu minim 24 ore înainte de 
                data stabilită, fără costuri suplimentare.
              </p>
              <p>
                <strong className="text-white">6.2.</strong> Anulările făcute cu mai puțin de 24 ore înainte sau după prezentarea echipei 
                la locație pot atrage costuri de deplasare.
              </p>
            </div>
          </div>

          {/* Contact Legal */}
          <div className="bg-gray-dark border border-primary/30 rounded-lg p-6 text-center">
            <p className="text-gray-light">
              Pentru întrebări legate de termeni și condiții, sunați la{' '}
              <a href="tel:0758663415" className="text-primary hover:underline font-semibold">
                0758 663 415
              </a>
              {' '}sau scrieți la{' '}
              <a href="mailto:contact@carotaretaierebeton.ro" className="text-primary hover:underline">
                contact@carotaretaierebeton.ro
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
    </section>
  )
}

export default TermsAndConditions
