/// <reference types="vite/client" />

interface Window {
  // Defined in index.html; loads Google Analytics after cookie consent
  loadGA?: () => void
}
