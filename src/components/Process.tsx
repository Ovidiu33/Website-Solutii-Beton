import { Phone } from 'lucide-react'

const STEPS = [
  {
    title: 'Ne suni sau ne scrii pe WhatsApp',
    text: 'Spune-ne ce diametru îți trebuie, cât de gros e peretele și din ce e făcut. O poză cu locul ne ajută mult.',
  },
  {
    title: 'Evaluare gratuită la fața locului',
    text: 'Dacă e nevoie, venim să vedem lucrarea fără niciun cost și îți spunem prețul înainte să începem.',
  },
  {
    title: 'Venim în 1–2 zile lucrătoare',
    text: 'Pentru urgențe putem veni chiar în aceeași zi, în Suceava, Botoșani și localitățile din jur.',
  },
  {
    title: 'Lucrăm curat, ridicăm molozul',
    text: 'Acoperim mobilierul și podeaua, carotăm cu apă și aspirăm pe loc. La final facem curat și luăm molozul cu noi.',
  },
]

const Process = () => {
  return (
    <section id="cum-lucram" className="theme-alt scroll-mt-16 lg:scroll-mt-20 py-16 md:py-24" aria-labelledby="cum-lucram-titlu">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 id="cum-lucram-titlu" className="heading-lg">Cum lucrăm</h2>
            <p className="mt-4 text-lg md:text-xl text-mute">De la primul telefon până la curățenia de la final.</p>
          </div>
          <a href="tel:+40758663415" className="btn btn-accent self-start md:self-auto">
            <Phone className="h-5 w-5" strokeWidth={2.25} />
            0758 663 415
          </a>
        </div>

        <ol className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded border border-white/10 bg-surface p-6 md:p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <span className="font-display font-extrabold text-5xl leading-none text-accent/90 transition-colors duration-300 group-hover:text-accent" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="mt-5 font-display font-bold text-xl leading-snug">{step.title}</h3>
              <p className="mt-2 text-mute leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
