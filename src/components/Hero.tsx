import { ArrowRight, MapPin, CircleDot, Scissors, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-dark via-gray-dark to-dark overflow-hidden pt-8 md:pt-12 pb-4 md:pb-6">
      {/* Fade from black at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
      
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

      <div className="container-custom relative z-10 pb-8 md:pb-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 md:whitespace-nowrap">
            <span className="text-primary">CAROTAJ</span> <span className="text-white">și</span> <span className="text-primary">TĂIERI BETON</span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-6">
            BETON • CĂRĂMIDĂ • BCA • ASFALT <span className="whitespace-nowrap">• PIATRĂ</span>
          </p>

          <p className="text-xl md:text-2xl text-gray-light mb-6 max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap">
            <MapPin className="h-6 w-6 md:h-7 md:w-7 text-primary" />
            <span className="text-primary font-bold">Suceava, Botoșani</span>
            <span className="text-white font-bold">și împrejurimi</span>
          </p>

          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
            <span className="text-white font-bold">Soluții beton</span> <span className="text-primary font-bold">(și în beton)</span>
          </p>

          {/* CTA Buttons - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 px-4">
            <a 
              href="tel:0758663415"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-black font-display font-bold text-xl py-5 px-10 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-primary/50 flex items-center justify-center gap-3"
            >
              <Phone className="h-6 w-6" />
              Sună Acum
            </a>
            <a 
              href="#oferta"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-black font-display font-bold text-xl py-5 px-10 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-primary/50 flex items-center justify-center gap-3"
            >
              <ArrowRight className="h-6 w-6" />
              Ofertă Gratuită
            </a>
          </div>

          {/* Servicii principale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-16 px-4">
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
                return (
                  <div 
                    className="bg-gray-dark/50 backdrop-blur-sm border border-gray-medium rounded-lg p-5 flex flex-col items-center group hover:bg-gray-dark/80 hover:border-primary hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                  >
                    <div className="group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <p className="text-white font-display font-bold text-lg mb-2 mt-2 group-hover:text-primary transition-colors duration-300">{service.title}</p>
                    <p className="text-gray-light text-center text-sm group-hover:text-white transition-colors duration-300">
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