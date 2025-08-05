 self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "/legalidade-espiritual/",
        "/legalidade-espiritual/index.html",
        "/legalidade-espiritual/style.css",
        "/legalidade-espiritual/app.js",
        "/legalidade-espiritual/manifest.json",
        "/legalidade-espiritual/icons/icon-192.png",
        "/legalidade-espiritual/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
