import { useState, useEffect } from 'react'
import img1 from '../assets/gallery/carotaj,prima poza vreau.jpeg'
import img2 from '../assets/gallery/Gaura centrala.jpeg'
import img3 from '../assets/gallery/carotaj pe santier.jpeg'
import img4 from '../assets/gallery/Gauri traversare tevi.jpeg'
import img5 from '../assets/gallery/imagine_decupaj_beton.jpg'
import img6 from '../assets/gallery/taiere_beton1.jpeg'
import img7 from '../assets/gallery/taiere_beton3.jpeg'
import img8a from '../assets/gallery/carotaj-500mm-1.jpeg'
import img8b from '../assets/gallery/carotaj-500mm-2.jpeg'

const Gallery = () => {
  const images = [
    { src: img1, alt: "Carotare în beton cu stativ" },
    { src: img6, alt: "Carotaj beton și evacuare moloz" },
    { src: img3, alt: "Lucrări carotaj beton pe șantier mare" },
    { src: img4, alt: "Găuri pentru traversare țevi și instalații" },
    { src: img2, alt: "Gaură pentru centrală" },
    { src: img5, alt: "Decupaj perete beton" },
    { src: img7, alt: "Carotaj perete beton 90 cm" },
    { src: [img8a, img8b], alt: "Carotaj în beton ⌀500 mm", slideshow: true },
  ];

  return (
    <section id="galerie-imagini" className="relative py-20 bg-dark overflow-hidden">
      {/* Fade from black at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="section-title mb-8 text-center">Galerie Lucrări Realizate</h2>
        <p className="text-gray-light text-center mb-12 max-w-2xl mx-auto">
          Lucrări de carotaj, tăiere și demolări în beton armat, realizate cu echipament profesional
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <GalleryItem key={idx} image={img} />
          ))}
        </div>
      </div>
      
      {/* Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-dark pointer-events-none"></div>
    </section>
  );
};

const GalleryItem = ({ image }: { image: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isSlideshow = image.slideshow && Array.isArray(image.src);

  useEffect(() => {
    // Detectează dacă e mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Auto-slideshow doar pe mobile
    if (!isSlideshow || !isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.src.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isSlideshow, isMobile, image.src]);

  const currentSrc = isSlideshow 
    ? (isMobile ? image.src[currentIndex] : (isHovered ? image.src[1] : image.src[0]))
    : image.src;

  return (
    <div 
      className="group bg-gray-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={currentSrc} 
          alt={image.alt} 
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 text-gray-light text-center text-sm leading-relaxed">{image.alt}</div>
    </div>
  );
};

export default Gallery;
