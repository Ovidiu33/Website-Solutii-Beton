// Service Worker pentru performance 100/100
const CACHE_NAME = 'solutii-beton-v1';
const RUNTIME_CACHE = 'solutii-beton-runtime';
const BASE_PATH = '/Website-Solutii-Beton/';

// Asset-uri de cache-uit la install
const PRECACHE_URLS = [
  BASE_PATH,
  `${BASE_PATH}index.html`
];

// Install - precache asset-urile critice
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate - curăță cache-urile vechi
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - strategie cache-first pentru asset-uri statice
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Cache-first pentru asset-uri statice (JS, CSS, imagini cu hash)
  if (request.url.includes('/assets/') || 
      request.url.match(/\.(js|css|webp|jpg|jpeg|png|gif|svg|woff2?)$/i)) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(cache => {
        return cache.match(request).then(response => {
          if (response) {
            return response; // Cache hit
          }
          
          // Cache miss - fetch și salvează
          return fetch(request).then(fetchResponse => {
            // Cache doar răspunsuri valide
            if (fetchResponse && fetchResponse.status === 200) {
              cache.put(request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
    return;
  }

  // Network-first pentru HTML (ca să primești actualizări)
  if (request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Default: network-first
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
