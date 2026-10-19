import { useState, useEffect, lazy, Suspense } from 'react'
import { X, Cookie, Check, Ban } from 'lucide-react'

const CookiePolicyModal = lazy(() => import('./CookiePolicyModal'))

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [isPolicyOpen, setIsPolicyOpen] = useState(false)

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
    window.loadGA?.()
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
      <aside aria-label="Cookie-uri" className="theme-dark fixed bottom-3 left-3 right-3 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 animate-slideUp rounded border border-white/15 bg-[#1c1c1c] p-4 shadow-2xl shadow-black/50 mb-[env(safe-area-inset-bottom)]">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-9 h-9 bg-accent/10 rounded flex items-center justify-center">
            <Cookie className="h-4 w-4 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-display font-bold mb-1">Cookie-uri</h3>
            <p className="text-sm text-mute leading-relaxed">
              Folosim cookie-uri pentru a analiza traficul și a îmbunătăți site-ul.{' '}
              <button
                type="button"
                onClick={() => setIsPolicyOpen(true)}
                className="text-accent-ink hover:text-accent underline underline-offset-2 transition-colors"
              >
                Detalii
              </button>
            </p>
          </div>
          <button
            onClick={handleReject}
            className="flex-shrink-0 h-8 w-8 -mt-1 -mr-1 flex items-center justify-center rounded text-mute hover:text-ink hover:bg-white/10 transition-colors"
            aria-label="Închide"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="btn btn-accent flex-1 h-11 px-3 text-sm"
          >
            <Check className="h-4 w-4" /> Accept
          </button>
          <button
            onClick={handleReject}
            className="btn btn-outline flex-1 h-11 px-3 text-sm"
          >
            <Ban className="h-4 w-4" /> Refuz
          </button>
        </div>
      </aside>

      {isPolicyOpen && (
        <Suspense fallback={null}>
          <CookiePolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
        </Suspense>
      )}
    </>
  )
}

export default CookieBanner
