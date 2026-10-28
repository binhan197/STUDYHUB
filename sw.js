/* Study Hub app-shell cache. Does not cache external videos or personal user data. */
const CACHE_NAME='studyhub-shell-2026-10-28-pwa-v4-pink-player';
const APP_FILES=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon.svg'];
const SHELL_URL=new URL('index.html',self.registration.scope).href;
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('studyhub-shell-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;
 const url=new URL(request.url),scope=new URL(self.registration.scope);
 if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE_NAME).then(c=>c.put(SHELL_URL,copy)));}return response;}).catch(async()=>await caches.match(SHELL_URL)||Response.error()));return;
 }
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
