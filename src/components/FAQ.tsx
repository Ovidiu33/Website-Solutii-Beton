import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
      answer: "Facem găuri de la Ø 30mm până la Ø 500mm. Avem caroate profesionale pentru orice dimensiune."
    },
    {
      question: "Cât durează să faceți o gaură pentru hotă?",
      answer: "O gaură standard pentru hotă într-un perete de 30-40cm durează 30-60 minute. Timpul variază în funcție de grosime și tipul materialului (beton, cărămidă, BCA). Pentru lucrări mai complexe sau multiple găuri, poate varia durata de timp."
    },
    {
      question: "Pe ce materiale lucrați și cât de gros poate fi peretele?",
      answer: "Lucrăm pe orice tip de material: beton (inclusiv beton armat), cărămidă, BCA, piatră, asfalt. Avem echipament profesional specializat care poate carota pereți de peste 1 metru grosime."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="intrebari" className="relative py-16 md:py-24 bg-gradient-to-br from-dark via-gray-dark to-dark overflow-hidden scroll-mt-24">
        {/* Fade from black at top */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title">Întrebări Frecvente despre serviciile oferite</h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto mt-4">
              Răspunsuri la cele mai frecvente întrebări despre serviciile noastre de carotaj, tăiere și demolări în beton. 
              Nu găsiți răspunsul? <a href="tel:0758663415" className="text-primary hover:underline font-semibold">Sunați-ne la 0758 663 415</a>
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-dark border border-gray-medium rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-dark/50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-primary" />
                    ) : (
                      <Plus className="h-6 w-6 text-primary" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-light leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Fade to black */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
      </section>
    </>
  )
}

export default FAQ
