import { WhatsAppIcon } from './icons'

const phoneNumber = "40758663415" // Format internațional fără +
const message = "Bună ziua! Aș avea nevoie de o carotare sau o tăiere în beton."

export const WHATSAPP_URL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

const WhatsAppButton = () => {
  return (
    <aside aria-label="WhatsApp">
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#3ee07a] text-graphite rounded-full p-4 shadow-lg shadow-black/30 transition-colors duration-200 group"
      aria-label="Contactează-ne pe WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />

      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-graphite text-white px-3 py-2 rounded text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Scrie-ne pe WhatsApp
      </span>
    </a>
    </aside>
  )
}

export default WhatsAppButton
