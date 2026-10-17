import { Plus, Phone } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: "Faceți mizerie mult? Cum procedați cu praful și apa?",
      answer: "Lucrăm curat! În beton carotăm cu apă și o aspirăm continuu. Pe uscat aspirăm tot praful cu aspirator profesional. La tăieri protejăm zona și mobilierul. La final curățăm complet și ridicăm molozul. Totul rămâne curat."
    },
    {
      question: "În cât timp puteți veni să faceți lucrarea?",
      answer: "De obicei intervenim în 1-2 zile lucrătoare. Pentru urgențe putem veni chiar în aceeași zi. Suntem disponibili 24/7 la telefon 0758 663 415. Lucrăm în Suceava, Botoșani și localitățile din jur (Rădăuți, Fălticeni, Vatra Dornei, Dorohoi, etc.)."
    },
    {
      question: "Până la ce dimensiune puteți face găuri?",
      answer: "Facem găuri de la Ø 30mm până la Ø 500mm. Avem carote profesionale pentru orice dimensiune."
    },
    {
      question: "Cât durează să faceți o gaură pentru hotă?",
      answer: "O gaură standard pentru hotă într-un perete de 30-40cm durează 30-60 minute. Timpul variază în funcție de grosime și tipul materialului (beton, cărămidă, BCA). Pentru lucrări mai complexe sau multiple găuri, poate varia durata de timp."
    },
    {
      question: "Evaluarea la fața locului se plătește?",
      answer: "Nu. Evaluarea la fața locului este gratuită. Venim, vedem lucrarea și vă spunem prețul înainte să începem."
    },
    {
      question: "Pe ce materiale lucrați și cât de gros poate fi peretele?",
      answer: "Lucrăm pe orice tip de material: beton (inclusiv beton armat), cărămidă, BCA, piatră, asfalt. Avem echipament profesional specializat care poate carota pereți de peste 1 metru grosime."
    }
  ]

  // Generate Schema.org FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* Add FAQ Schema to page */}
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="intrebari" className="theme-alt scroll-mt-16 lg:scroll-mt-20 py-16 md:py-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="heading-lg">Întrebări Frecvente despre serviciile oferite</h2>
            <p className="mt-4 text-lg text-mute">
              Răspunsuri la cele mai frecvente întrebări despre serviciile noastre de carotare, tăiere și demolări în beton.
            </p>
            <p className="mt-6 text-lg">Nu găsiți răspunsul?</p>
            <a href="tel:+40758663415" className="btn btn-accent mt-3 h-auto min-h-14 py-3 w-full sm:w-auto whitespace-normal text-center">
              <Phone className="h-5 w-5" strokeWidth={2.25} />
              Sunați-ne la 0758 663 415
            </a>
          </div>

          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, index) => (
              <details key={faq.question} {...{ name: 'intrebari' }} open={index === 0} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display font-bold text-lg md:text-xl leading-snug transition-colors duration-200 group-hover:text-accent-ink">
                    {faq.question}
                  </h3>
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/15 text-accent transition-[transform,background-color,color] duration-300 group-open:rotate-45 group-open:bg-accent group-open:text-graphite">
                    <Plus className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-mute leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
