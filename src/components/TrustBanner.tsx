import { Award, Wrench, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TrustBanner = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    { 
      icon: <Wrench className="h-5 w-5 md:h-6 md:w-6" />, 
      number: "10+", 
      label: "Ani Experiență",
      highlight: true
    },
    { 
      icon: <Award className="h-5 w-5 md:h-6 md:w-6" />, 
      number: "5000+", 
      label: "Lucrări" 
    },
    { 
      icon: <Shield className="h-5 w-5 md:h-6 md:w-6" />, 
      number: "100%", 
      label: "Garanție Calitate" 
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="relative bg-gradient-to-b from-primary via-primary/80 via-40% via-primary/40 via-70% to-primary/20 py-0 md:py-0.5 mt-20 md:mt-24 pb-1 md:pb-2 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center">
          {/* Trust Stats */}
          <div className={`grid grid-cols-3 gap-6 md:gap-8 lg:gap-12 transition-all duration-1000 mt-2 md:mt-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-110 min-h-[70px] md:min-h-[85px]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-black mb-1 flex items-center justify-center drop-shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black leading-none mb-1 drop-shadow-sm">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base lg:text-lg text-black font-bold uppercase tracking-tight drop-shadow-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
