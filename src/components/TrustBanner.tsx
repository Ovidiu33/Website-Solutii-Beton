import { Award, Wrench, Shield, Phone, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TrustBanner = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    { 
      icon: <Wrench className="h-6 w-6 md:h-7 md:w-7" />, 
      number: "10+", 
      label: "Ani Experiență",
      highlight: true
    },
    { 
      icon: <Award className="h-6 w-6 md:h-7 md:w-7" />, 
      number: "5000+", 
      label: "Lucrări" 
    },
    { 
      icon: <Shield className="h-6 w-6 md:h-7 md:w-7" />, 
      number: "100%", 
      label: "Garanție Calitate" 
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="relative bg-gradient-to-r from-primary via-yellow-500 to-primary py-2 md:py-4 mt-24 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Trust Stats */}
          <div className={`grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                 className="flex flex-col items-center text-center transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`${stat.highlight ? 'text-dark' : 'text-gray-900'} mb-0.5`}>
                  {stat.icon}
                </div>
                <div className={`text-lg md:text-2xl lg:text-3xl font-bold ${stat.highlight ? 'text-dark' : 'text-gray-900'} leading-none`}>
                  {stat.number}
                </div>
                <div className={`text-xs md:text-sm ${stat.highlight ? 'text-dark font-bold' : 'text-gray-900'} mt-0.5 uppercase tracking-wide`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`flex flex-row items-center gap-3 lg:gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            <div className="hidden lg:block w-px h-16 bg-gray-900/30"></div>
            
            <div className="flex flex-row gap-3 items-center">
              <a
                href="tel:0758663415"
                className="group bg-dark hover:bg-gray-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 animate-bounce group-hover:animate-none" />
                <span>Sună Acum!</span>
              </a>
              
              <a
                href="#oferta"
                className="group bg-white hover:bg-gray-100 text-dark px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 whitespace-nowrap"
              >
                <span>Ofertă Gratuită</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
