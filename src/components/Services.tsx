import { Circle, Wind, Layers, Square, Scissors, Hammer } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Circle className="h-10 w-10" />,
      title: "Găuri Hote",
      description: "Carotări pentru hote de bucătărie în beton, cărămidă sau BCA. Calculăm exact dimensiunile necesare.",
      features: ["Diametru până la Ø 500mm", "Orice grosime perete", "Finisaj curat", "Fără praf excesiv"]
    },
    {
      icon: <Wind className="h-10 w-10" />,
      title: "Ventilații",
      description: "Găuri pentru ventilație, aerisire centrală și aparate de aer condiționat. Poziționare precisă conform proiectului.",
      features: ["Aer condiționat", "Beton armat", "Pereți portanți", "Aerisiri centrale"]
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Tăieri Planșee",
      description: "Tăiem planșee din beton pentru scări, lifturi sau alte modificări structurale.",
      features: ["Orice grosime", "Tăiere cu disc", "Fără vibrații", "Demolări controlate"]
    },
    {
      icon: <Square className="h-10 w-10" />,
      title: "Tăieri Pereți",
      description: "Deschideri pentru uși, ferestre sau alte modificări în pereți din beton, cărămidă, BCA.",
      features: ["Pereți portanți", "Cărămidă", "BCA", "Beton armat"]
    },
    {
      icon: <Scissors className="h-10 w-10" />,
      title: "Decupaje",
      description: "Decupaje pentru instalații sanitare, electrice, termice. Lucrăm precis după măsurători.",
      features: ["Canale tehnice", "Țevi", "Cabluri", "Instalații"]
    },
    {
      icon: <Hammer className="h-10 w-10" />,
      title: "Demolări",
      description: "Demolări selective fără să afectăm restul structurii. Ridicăm molozul.",
      features: ["Balcoane", "Console", "Elemente structurale", "Curățenie finală"]
    }
  ]

  return (
    <section id="servicii" className="relative py-20 bg-gradient-to-br from-gray-dark to-dark overflow-hidden">
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

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-light mb-6">
            Nu găsești ce cauți? Sună-ne pentru consultanță gratuită!
          </p>
          <a 
            href="tel:0758663415" 
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            <span>0758 663 415</span>
          </a>
        </div>
      </div>
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
    </section>
  )
}

export default Services
