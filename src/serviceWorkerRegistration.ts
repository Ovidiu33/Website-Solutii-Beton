// Service Worker Registration
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Folosim import.meta.env.BASE_URL pentru a fi compatibil cu GitHub Pages
      const swUrl = `${import.meta.env.BASE_URL}sw.js`;

      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          console.log('✅ Service Worker înregistrat:', registration.scope);
          
          // Check pentru actualizări la fiecare 60 minute
          setInterval(() => {
            registration.update();
          }, 1000 * 60 * 60);
        })
        .catch(error => {
          console.error('❌ Service Worker eșuat:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
