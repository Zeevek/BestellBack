/* Service worker — À la Tentation
   Objectif : l'application reste utilisable hors ligne, même sans internet.
   Les données (commandes, clients…) ne passent jamais par ici :
   elles vivent dans IndexedDB, sur l'ordinateur ou la tablette. */

const CACHE = "tentation-v1";

const FICHIERS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/favicon.ico",
  "./icons/icon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-64.png",
  "./icons/icon-128.png",
  "./icons/icon-192.png",
  "./icons/icon-256.png",
  "./icons/icon-512.png",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png"
];

/* Installation : on met l'application en réserve. */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FICHIERS))
      .then(() => self.skipWaiting())
  );
});

/* Activation : on efface les anciennes versions du cache. */
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* Lecture : on sert d'abord le réseau (pour avoir les mises à jour),
   et on retombe sur la réserve si la connexion manque. */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (!req.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        const copie = res.clone();
        caches.open(CACHE).then(c => c.put(req, copie)).catch(() => {});
        return res;
      })
      .catch(() =>
        caches.match(req).then(r => r || caches.match("./index.html"))
      )
  );
});
