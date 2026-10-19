import { ArrowRight, MapPin, Phone } from 'lucide-react'
import Picture from './Picture'
import { WhatsAppIcon } from './icons'
import { WHATSAPP_URL } from './WhatsAppButton'

const Hero = () => {
  return (
    <section id="acasa" className="theme-dark relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 phone:inset-auto phone:inset-x-0 phone:top-16 phone:aspect-video phone-short:aspect-[9/4]">
        <Picture
          slug="hero-mobile"
          mediaSlug={{ media: '(min-width: 768px)', slug: 'hero-wide' }}
          alt="Carotare în beton cu stativ Hilti DD 500 pe șantier"
          sizes="100vw"
          width={1600}
          height={900}
          priority
          className="h-full w-full object-cover object-[75%_center] phone:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/85 via-50% to-graphite/20 phone:bg-gradient-to-b phone:from-transparent phone:via-transparent phone:via-75% phone:to-graphite" />
      </div>

      <div className="container-custom pt-28 pb-12 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 phone:pt-[calc(4rem+56.25vw+1rem)] phone-short:pt-[calc(4rem+44.5vw+0.75rem)] short:pt-24 short:pb-10">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 font-display font-semibold text-base md:text-lg">
            <MapPin className="h-5 w-5 text-accent shrink-0" strokeWidth={2.25} />
            <span>
              <span className="text-accent">Suceava, Botoșani</span> și împrejurimi
            </span>
          </p>

          <h1 className="heading-xl uppercase text-[2.6rem] sm:text-6xl lg:text-7xl mt-5 phone:mt-4 phone-short:mt-2 short:text-5xl">
            <span>CAROTARE</span> <span className="text-accent normal-case">și</span>{' '}
            <span className="whitespace-nowrap">TĂIERI BETON</span>
          </h1>

          <p className="mt-6 phone:mt-4 phone-short:mt-3 font-display font-semibold text-sm sm:text-base tracking-[0.08em] text-mute">
            BETON • CĂRĂMIDĂ • BCA • ASFALT <span className="whitespace-nowrap">• PIATRĂ</span>
          </p>

          <p className="mt-3 phone-short:mt-2 text-lg md:text-xl text-ink/90 max-w-xl">
            <span className="font-semibold">Soluții beton</span> <span className="text-accent font-semibold">(și în beton)</span>.
            {' '}Găuri până la Ø 600 mm, tăieri și demolări controlate.
          </p>

          <div className="mt-8 phone:mt-6 phone-short:mt-4 flex flex-col sm:flex-row gap-3">
            <div className="flex gap-3">
              <a href="tel:+40758663415" className="btn btn-accent flex-1 sm:flex-none">
                <Phone className="h-5 w-5" strokeWidth={2.25} />
                Sună acum
              </a>
              {/* Pe mobil și tabletă WhatsApp stă lângă „Sună acum”; pe desktop e bula fixă (WhatsAppButton) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-graphite shadow-lg shadow-black/30 transition-[background-color,transform] duration-200 hover:bg-[#3ee07a] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Contactează-ne pe WhatsApp"
              >
                <WhatsAppIcon className="h-7 w-7" />
              </a>
            </div>
            <a href="#oferta" className="group btn btn-outline w-full sm:w-auto">
              Ofertă gratuită
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
