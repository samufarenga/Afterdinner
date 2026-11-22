// service worker: la pagina dell'app arriva sempre fresca dalla rete, così si apre già aggiornata
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  const keys = await caches.keys(); await Promise.all(keys.map(k => caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener("fetch", e => {
  if(e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request, {cache: "no-store"}).catch(() => fetch(e.request)));
});
