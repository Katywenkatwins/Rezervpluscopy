const CACHE_NAME = 'rezerv-id-v2';
const BASE_PATH = '/Rezervplus';
const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/favicon.svg`,
  `${BASE_PATH}/icon-placeholder.svg`,
  `${BASE_PATH}/icon-192x192.svg`,
  `${BASE_PATH}/icon-512x512.svg`,
  `${BASE_PATH}/offline.html`
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(urlsToCache).catch((error) => {
          console.error('[SW] Cache addAll failed:', error);
          // Cache individual items that succeed
          return Promise.all(
            urlsToCache.map(url => 
              cache.add(url).catch(err => console.warn(`[SW] Failed to cache: ${url}`, err))
            )
          );
        });
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          console.log('[SW] Serving from cache:', event.request.url);
          return response;
        }
        
        console.log('[SW] Fetching:', event.request.url);
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Cache the new response
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch((error) => {
          console.error('[SW] Fetch failed:', error);
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match(`${BASE_PATH}/offline.html`);
          }
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});