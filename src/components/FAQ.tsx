import { Plus, Phone } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: "Faceți mizerie? Ce faceți cu praful și cu apa?",
      answer: "Lucrăm curat. În beton carotăm cu apă și o aspirăm pe loc, iar pe uscat aspirăm praful cu un aspirator profesional. La tăieri acoperim zona și mobilierul. La final facem curat și luăm molozul cu noi."
    },
    {
      question: "În cât timp puteți veni?",
      answer: "De obicei venim în 1–2 zile lucrătoare, iar la urgențe chiar în aceeași zi. La telefon (0758 663 415) răspundem 24/7. Lucrăm în Suceava, Botoșani și în localitățile din jur: Rădăuți, Fălticeni, Vatra Dornei, Dorohoi și altele."
    },
    {
      question: "Până la ce dimensiune puteți face găuri?",
      answer: "Facem găuri de la Ø 30 mm până la Ø 600 mm. Avem carote profesionale pentru toate aceste diametre."
    },
    {
      question: "Cât durează să faceți o gaură pentru hotă?",
      answer: "O gaură obișnuită pentru hotă, într-un perete de 30–40 cm, durează între 30 și 60 de minute. Timpul depinde de grosimea peretelui și de material (beton, cărămidă sau BCA). Dacă sunt mai multe găuri sau lucrarea e mai complicată, durează mai mult."
    },
    {
      question: "Evaluarea la fața locului se plătește?",
      answer: "Nu, evaluarea la fața locului e gratuită. Venim, ne uităm la lucrare și îți spunem prețul înainte să începem."
    },
    {
      question: "Pe ce materiale lucrați și cât de gros poate fi peretele?",
      answer: "Lucrăm în beton (inclusiv beton armat), cărămidă, BCA, piatră și asfalt. Putem carota și pereți mai groși de 1 metru."
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
            <h2 className="heading-lg">Întrebări frecvente despre serviciile oferite</h2>
            <p className="mt-4 text-lg text-mute">
              Ce ne întreabă clienții cel mai des despre carotare, tăieri și demolări în beton.
            </p>
            <p className="mt-6 text-lg">Nu găsești răspunsul?</p>
            <a href="tel:+40758663415" className="btn btn-accent mt-3 h-auto min-h-14 py-3 w-full sm:w-auto whitespace-normal text-center">
              <Phone className="h-5 w-5" strokeWidth={2.25} />
              Sună-ne la 0758 663 415
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
