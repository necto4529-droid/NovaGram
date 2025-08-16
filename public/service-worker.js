self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
