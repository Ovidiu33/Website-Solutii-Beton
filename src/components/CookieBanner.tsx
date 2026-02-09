import { useState, useEffect } from 'react'
import { X, Cookie, Check, Ban } from 'lucide-react'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookies = document.cookie.split(';').map(c => c.trim())
    const hasConsent = cookies.some(c => c.startsWith('cookie-consent='))
    
    if (!hasConsent) {
      // Show banner after a small delay
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    // Set cookie consent for 1 year
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `cookie-consent=accepted; expires=${expires.toUTCString()}; path=/`
    setShowBanner(false)
  }

  const handleReject = () => {
    // Set cookie consent rejection for 1 year
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `cookie-consent=rejected; expires=${expires.toUTCString()}; path=/`
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slideUp">
        <div className="bg-gradient-to-br from-gray-dark to-dark border border-primary/30 rounded-xl shadow-2xl p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Cookie className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-display font-bold text-white mb-1 flex items-center gap-1.5">
              <Cookie className="h-4 w-4 text-primary" /> Cookies
              </h3>
              <p className="text-xs text-gray-light leading-relaxed">
                Folosim doar cookies esențiale. <strong className="text-white">Fără tracking</strong>.
              </p>
            </div>
            <button
              onClick={handleReject}
              className="flex-shrink-0 text-gray-light hover:text-white transition-colors"
              aria-label="Închide"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="flex-1 flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-dark text-black py-2 px-3 rounded-lg text-xs font-bold transition-colors"
            >
              <Check className="h-3 w-3" /> Accept
            </button>
            <button
              onClick={handleReject}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white py-2 px-3 rounded-lg text-xs font-bold transition-colors"
            >
              <Ban className="h-3 w-3" /> Refuz
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookieBanner
