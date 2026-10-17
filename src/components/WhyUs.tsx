import { Target, Wrench, Droplets, Phone } from 'lucide-react'
import Picture from './Picture'

const WhyUs = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Calculăm găurile cu precizie",
      description: "Măsurăm exact, calculăm dimensiunile și poziționăm fiecare gaură perfect. Zero improvizație."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Echipament profesional",
      description: "Mașini de carotat și tăiat de ultimă generație. Facem găuri până la Ø 500mm."
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Lucrăm curat",
      description: "Carotăm cu apă în beton și aspirăm apa. Pe uscat folosim aspirator profesional pentru tot praful. Ridicăm molozul la final."
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Intervenim rapid",
      description: "Răspundem la telefon 24/7. Lucrăm în Suceava, Botoșani și împrejurimi."
    }
  ]

  return (
    <section id="despre" className="theme-dark scroll-mt-16 lg:scroll-mt-20 py-16 md:py-24">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <h2 className="heading-lg">De ce noi?</h2>
          <p className="mt-4 font-display font-bold text-xl text-accent-ink">
            Calculăm găurile cu precizie
          </p>
          <p className="mt-2 text-lg text-mute max-w-md">
            Ne pricepem la carotări și tăieri. Lucrăm curat, rapid și la preț corect.
          </p>
          <div className="group mt-8 relative aspect-[4/3] overflow-hidden rounded border border-white/10 bg-surface">
            <Picture
              slug="carotaj-500-stativ"
              alt="Carotare Ø500 mm cu folie de protecție pe pereți și podea"
              sizes="(min-width: 1024px) 40vw, 100vw"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>

        <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px rounded overflow-hidden border border-white/10 bg-white/10">
          {features.map(feature => (
            <li key={feature.title} className="group bg-canvas p-6 md:p-8 transition-colors duration-300 hover:bg-surface">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-accent/10 text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-graphite">
                {feature.icon}
              </div>
              <h3 className="mt-5 font-display font-bold text-xl">{feature.title}</h3>
              <p className="mt-2 text-mute leading-relaxed">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyUs
