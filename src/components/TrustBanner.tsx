const STATS = [
  { number: '10+', label: 'Ani Experiență' },
  { number: '5000+', label: 'Lucrări' },
  { number: '100%', label: 'Garanție Calitate' },
  { number: '24/7', label: 'Răspundem la telefon' },
]

const TrustBanner = () => {
  return (
    <section className="theme-dark border-t border-white/10" aria-label="Pe scurt despre noi">
      <div className="container-custom">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <li
              key={stat.label}
              className={`py-6 md:py-8 ${index % 2 === 1 ? 'pl-5 border-l border-white/10' : ''} ${index > 1 ? 'border-t border-white/10 lg:border-t-0' : ''} ${index === 2 ? 'lg:pl-5 lg:border-l' : ''}`}
            >
              <p className="font-display font-extrabold text-3xl md:text-4xl text-accent tracking-tight leading-none">{stat.number}</p>
              <p className="mt-2 font-display font-semibold text-sm md:text-base text-mute">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TrustBanner
