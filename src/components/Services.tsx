import { Circle, Wind, Layers, Square, Scissors, Hammer } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Circle className="h-10 w-10" />,
      title: "Carotaj Găuri pentru Hote Bucătărie",
      description: "Carotări profesionale pentru hote de bucătărie în beton, cărămidă sau BCA. Calculăm exact dimensiunile necesare pentru evacuarea eficientă a fumului și vaporilor.",
      features: ["Diametru până la Ø 500mm", "Orice grosime perete", "Finisaj curat", "Fără praf excesiv"]
    },
    {
      icon: <Wind className="h-10 w-10" />,
      title: "Găuri Ventilație și Aer Condiționat",
      description: "Găuri pentru ventilație, aerisire centrală și aparate de aer condiționat. Poziționare precisă conform proiectului, respectând normele de siguranță.",
      features: ["Aer condiționat", "Beton", "Pereți portanți", "Aerisiri centrale"]
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Tăiere Planșee",
      description: "Tăiem planșee din beton pentru scări, lifturi sau alte modificări structurale. Folosim discuri diamantate profesionale pentru tăiere precisă fără vibrații.",
      features: ["Orice grosime", "Tăiere cu disc", "Fără vibrații", "Demolări controlate"]
    },
    {
      icon: <Square className="h-10 w-10" />,
      title: "Tăiere Pereți și Deschideri",
      description: "Deschideri pentru uși, ferestre sau alte modificări în pereți portanți din beton, cărămidă sau BCA. Lucrăm cu atenție la structura portantă.",
      features: ["Pereți portanți", "Cărămidă", "BCA", "Beton"]
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Decupaje pentru Instalații",
      description: "Decupaje precise pentru instalații sanitare, electrice și termice. Lucrăm după măsurători exacte pentru canale și treceri tehnice.",
      features: ["Canale tehnice", "Țevi", "Cabluri", "Instalații"]
    },
    {
      icon: <Hammer className="h-10 w-10" />,
      title: "Demolări",
      description: "Demolări selective în beton fără să afectăm restul structurii. Lucrăm controlat pe balcoane, console și alte elemente. Ridicăm tot molozul.",
      features: ["Balcoane", "Console", "Elemente structurale", "Curățenie finală"]
    }
  ]

  return (
    <section id="servicii" className="relative py-4 md:py-8 bg-gradient-to-br from-dark via-gray-dark to-dark overflow-hidden scroll-mt-24">
      {/* Fade from black at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Ce Facem?</h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto mt-4">
            Carotări, tăieri, decupaje și demolări în beton, cărămidă, BCA, asfalt și piatră.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-dark border border-gray-medium rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-light mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-light">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
    </section>
  )
}

export default Services
