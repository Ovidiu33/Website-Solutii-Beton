import { Circle, Wind, Layers, Square, Scissors, Hammer, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import Picture from './Picture'

type Service = {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  formValue: 'carotaj' | 'taiere' | 'demontare'
}

const ICON = 'h-6 w-6'

const GROUPS: { name: string; summary: string; badge?: string; image: { slug: string; alt: string }; services: Service[] }[] = [
  {
    name: 'CAROTĂRI',
    summary: 'Găuri pentru hote • Ventilații • Aerisiri centrale • Aer condiționat',
    badge: 'Până la Ø 600 mm',
    image: { slug: 'carotaj-santier', alt: 'Carotare în beton pe un șantier mare' },
    services: [
      {
        icon: <Circle className={ICON} />,
        title: 'Carotare pentru hote de bucătărie',
        description: 'Facem gaura pentru hotă în beton, cărămidă sau BCA. Alegem diametrul potrivit hotei și tubulaturii, ca aburul și mirosurile să iasă fără probleme.',
        features: ['Diametru până la Ø 600 mm', 'Orice grosime de perete', 'Margini curate', 'Aspirăm praful'],
        formValue: 'carotaj',
      },
      {
        icon: <Wind className={ICON} />,
        title: 'Găuri pentru ventilație și aer condiționat',
        description: 'Pentru ventilație, aerisirea centralei sau aparatul de aer condiționat. Facem găurile exact unde scrie în proiect și respectăm normele de siguranță.',
        features: ['Aer condiționat', 'Beton', 'Pereți portanți', 'Aerisiri centrale'],
        formValue: 'carotaj',
      },
      {
        icon: <Scissors className={ICON} />,
        title: 'Decupaje pentru instalații',
        description: 'Facem canale și treceri pentru țevi și cabluri, la instalațiile sanitare, electrice și termice. Măsurăm înainte, ca totul să se potrivească la montaj.',
        features: ['Canale tehnice', 'Țevi', 'Cabluri', 'Instalații'],
        formValue: 'carotaj',
      },
    ],
  },
  {
    name: 'TĂIERI ȘI DECUPAJE',
    summary: 'Planșee • Pereți • Deschideri • Demolări controlate',
    image: { slug: 'taiere-deschidere', alt: 'Deschidere tăiată în perete de beton' },
    services: [
      {
        icon: <Layers className={ICON} />,
        title: 'Tăiere planșee',
        description: 'Tăiem planșee din beton pentru scări, lifturi sau alte modificări de structură. Lucrăm cu disc diamantat, precis și fără vibrații.',
        features: ['Orice grosime', 'Tăiere cu disc', 'Fără vibrații', 'Demolări controlate'],
        formValue: 'taiere',
      },
      {
        icon: <Square className={ICON} />,
        title: 'Tăiere pereți și deschideri',
        description: 'Facem deschideri pentru uși și ferestre în pereți din beton, cărămidă sau BCA, inclusiv în pereți portanți. Lucrăm atent, ca să nu slăbim structura.',
        features: ['Pereți portanți', 'Cărămidă', 'BCA', 'Beton'],
        formValue: 'taiere',
      },
      {
        icon: <Hammer className={ICON} />,
        title: 'Demolări',
        description: 'Demolăm doar ce trebuie: balcoane, console și alte elemente din beton, fără să afectăm restul clădirii. La final ridicăm tot molozul.',
        features: ['Balcoane', 'Console', 'Elemente structurale', 'Curățenie finală'],
        formValue: 'demontare',
      },
    ],
  },
]

const preselect = (value: string) => {
  const select = document.getElementById('service') as HTMLSelectElement | null
  if (select) select.value = value
}

const Services = () => {
  // The photos sit just below the first screen, so the browser would fetch them together with the hero photo.
  // They load once the visitor scrolls near the section; the same photos are in the gallery markup for crawlers.
  const sectionRef = useRef<HTMLElement>(null)
  const [showPhotos, setShowPhotos] = useState(false)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowPhotos(true)
        observer.disconnect()
      }
    }, { rootMargin: '600px 0px' })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="servicii" className="theme-alt scroll-mt-16 lg:scroll-mt-20 py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-2xl">
          <h2 className="heading-lg">Ce facem?</h2>
          <p className="mt-4 text-lg md:text-xl text-mute">
            Carotări, tăieri, decupaje și demolări în beton, cărămidă, BCA, asfalt și piatră.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {GROUPS.map(group => (
            <article key={group.name} className="group/card rounded bg-surface border border-ink/10 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-ink/20 hover:shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)]">
              <div className="relative aspect-[16/9] bg-ink/10 overflow-hidden">
                {showPhotos && <Picture
                  slug={group.image.slug}
                  alt={group.image.alt}
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 46vw, calc(100vw - 2rem)"
                  width={1200}
                  height={900}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
                />}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="font-display font-extrabold text-2xl md:text-[1.75rem] tracking-tight">{group.name}</p>
                  {group.badge && (
                    <span className="rounded bg-accent px-2.5 py-1 font-display font-bold text-sm text-graphite">{group.badge}</span>
                  )}
                </div>
                <p className="mt-2 text-mute">{group.summary}</p>

                <ul className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
                  {group.services.map(service => (
                    <li key={service.title} className="group/row py-6 last:pb-0 grid grid-cols-[2.75rem_1fr] gap-x-4 gap-y-3 sm:gap-y-0">
                      <div className="flex h-11 w-11 items-center justify-center rounded bg-accent/10 text-accent-ink transition-colors duration-300 group-hover/row:bg-accent group-hover/row:text-graphite sm:row-span-2">
                        {service.icon}
                      </div>
                      <h3 className="self-center font-display font-bold text-xl leading-snug">{service.title}</h3>
                      <div className="col-span-2 sm:col-span-1 sm:col-start-2">
                        <p className="sm:mt-2 text-mute leading-relaxed">{service.description}</p>
                        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Detalii">
                          {service.features.map(feature => (
                            <li key={feature} className="rounded bg-ink/[0.06] px-2.5 py-1 text-sm text-ink/80">
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#oferta"
                          onClick={() => preselect(service.formValue)}
                          className="group/link mt-4 inline-flex items-center gap-1.5 font-display font-bold text-accent-ink"
                        >
                          Ofertă gratuită
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" strokeWidth={2.5} />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
