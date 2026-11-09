const C="casa-v1";const F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png",
"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
"https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js",
"https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/environments/RoomEnvironment.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).catch(()=>{})));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res;}).catch(()=>r))));