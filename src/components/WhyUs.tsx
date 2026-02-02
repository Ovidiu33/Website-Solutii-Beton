import { Target, Wrench, Droplets, Phone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WhyUs = () => {
  const features = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Calculăm găurile cu precizie",
      description: "Măsurăm exact, calculăm dimensiunile și poziționăm fiecare gaură perfect. Zero improvizație."
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Echipament profesional",
      description: "Mașini de carotat și tăiat de ultimă generație. Facem găuri până la Ø 500mm."
    },
    {
      icon: <Droplets className="h-12 w-12 text-primary" />,
      title: "Lucrăm curat",
      description: "Carotăm cu apă în beton și aspirăm apa. Pe uscat folosim aspirator profesional pentru tot praful. Ridicăm molozul la final."
    },
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: "Intervenim rapid",
      description: "Răspundem la telefon 24/7. Lucrăm în Suceava, Botoșani și împrejurimi."
    }
  ]

  return (
    <section id="despre" className="relative py-20 bg-dark overflow-hidden">
      {/* Fade from black at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">De ce noi?</h2>
          <p className="text-xl text-primary font-bold max-w-2xl mx-auto mt-4 mb-2">
            Calculăm găurile cu precizie
          </p>
          <p className="text-lg text-gray-light max-w-2xl mx-auto">
            Ne pricepem la carotări și tăieri. Lucrăm curat, rapid și la preț corect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const FeatureCard = () => {
              const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.3 });
              
              return (
                <div 
                  ref={elementRef}
                  className={`bg-gray-dark border rounded-lg p-8 text-center group hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                    isVisible ? 'border-primary scale-105 shadow-lg shadow-primary/20 transition-all duration-500' : 'border-gray-medium transition-all duration-300'
                  }`}
                >
                  <div className={`mb-6 flex justify-center group-hover:scale-110 ${
                    isVisible ? 'scale-110 transition-transform duration-500' : 'transition-transform duration-300'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            };
            
            return <FeatureCard key={index} />;
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-medium">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">10+</div>
            <div className="text-gray-light">Ani de muncă pe șantier</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">5000+</div>
            <div className="text-gray-light">Lucrări făcute</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">Ø 500mm</div>
            <div className="text-gray-light">Găuri și tăieturi mari</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">100%</div>
            <div className="text-gray-light">Clienți mulțumiți</div>
          </div>
        </div>
      </div>
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
    </section>
  )
}

export default WhyUs
