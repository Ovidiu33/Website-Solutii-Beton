import { useEffect, useState } from 'react'
import { Phone, FileText } from 'lucide-react'
import { WhatsAppIcon } from './icons'
import { WHATSAPP_URL } from './WhatsAppButton'

const MobileActionBar = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('acasa')
    const contact = document.getElementById('contact')
    if (!hero) return
    const state = { pastHero: false, atContact: false }
    const update = () => setVisible(state.pastHero && !state.atContact)
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.target === hero) state.pastHero = !entry.isIntersecting
        if (entry.target === contact) state.atContact = entry.isIntersecting
      }
      update()
    })
    observer.observe(hero)
    if (contact) observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Contact rapid"
      className={`theme-dark lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite/95 backdrop-blur pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-3 gap-2 p-2">
        <a href="tel:+40758663415" tabIndex={visible ? 0 : -1} className="btn btn-accent h-14 px-2 flex-col gap-1 text-sm sm:h-12 sm:flex-row sm:gap-2.5 sm:text-base">
          <Phone className="h-6 w-6 sm:h-5 sm:w-5" strokeWidth={2.25} />
          Sună
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1} className="btn h-14 px-2 flex-col gap-1 text-sm sm:h-12 sm:flex-row sm:gap-2.5 sm:text-base bg-[#25D366] text-graphite hover:bg-[#3ee07a]">
          <WhatsAppIcon className="h-6 w-6 shrink-0" />
          WhatsApp
        </a>
        <a href="#oferta" tabIndex={visible ? 0 : -1} className="btn btn-outline h-14 px-2 flex-col gap-1 text-sm sm:h-12 sm:flex-row sm:gap-2.5 sm:text-base">
          <FileText className="h-6 w-6 sm:h-5 sm:w-5" strokeWidth={2.25} />
          Ofertă
        </a>
      </div>
    </nav>
  )
}

export default MobileActionBar
