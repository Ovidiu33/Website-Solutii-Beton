import { ArrowRight, MapPin, CircleDot, Scissors, Phone } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-gray-dark to-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 mt-8">
            <span className="text-primary">CAROTAJ</span> și <span className="text-primary">TĂIERI BETON</span>
          </h1>

          <p className="text-2xl md:text-3xl text-primary font-bold mb-4">
            Carotări, Tăieri și Demolări în Beton
          </p>

          <p className="text-xl md:text-2xl text-white mb-4">
            BETON • CĂRĂMIDĂ • BCA • ASFALT • PIATRĂ
          </p>

          <p className="text-xl md:text-2xl text-gray-light mb-8 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6 md:h-7 md:w-7 text-primary" />
            <span className="text-primary font-bold">Suceava, Botoșani și împrejurimi</span>
          </p>

          <p className="text-xl md:text-2xl text-white font-semibold mb-8">
            Soluții beton <span className="text-primary font-bold">(și în beton)</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:0758663415"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <span>Sună Acum</span>
            </a>
            <a
              href="#contact"
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <span>Solicită Ofertă</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Servicii principale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: <CircleDot className="h-12 w-12 text-primary mb-2" />,
                title: "CAROTĂRI",
                description: (
                  <>
                    Găuri hote • Ventilații • Aerisiri centrale • Aparate aer condiționat
                    <br />
                    Până la Ø 500mm
                  </>
                )
              },
              {
                icon: <Scissors className="h-12 w-12 text-primary mb-2" />,
                title: "TĂIERI DECUPAJE",
                description: "Planșee • Pereți • Demolări controlate • Orice complexitate"
              },
              {
                icon: <Phone className="h-12 w-12 text-primary mb-2" />,
                title: "INTERVENIM RAPID",
                description: "Răspundem la telefon 24/7 • 0758 663 415"
              }
            ].map((service, index) => {
              const ServiceCard = () => {
                const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.3 });
                
                return (
                  <div 
                    ref={elementRef}
                    className={`bg-gray-dark/50 backdrop-blur-sm border rounded-lg p-6 flex flex-col items-center group hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 ${
                      isVisible ? 'border-primary -translate-y-1 shadow-lg shadow-primary/20 scale-105 transition-all duration-500' : 'border-gray-medium transition-all duration-300'
                    }`}
                  >
                    <div className={`group-hover:scale-110 ${
                      isVisible ? 'scale-110 transition-transform duration-500' : 'transition-transform duration-300'
                    }`}>
                      {service.icon}
                    </div>
                    <h3 className="text-white font-display font-bold text-xl mb-2 mt-2">{service.title}</h3>
                    <p className="text-gray-light text-center">
                      {service.description}
                    </p>
                  </div>
                );
              };
              
              return <ServiceCard key={index} />;
            })}
          </div>
        </div>
      </div>
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-96 md:h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>

      {/* Scroll Indicator removed as requested */}
    </section>
  );
};

export default Hero;