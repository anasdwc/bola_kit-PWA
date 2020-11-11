importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox sukses`)
} else {
    console.log(`Workbox gagal`)
}

// Precaching dengan workbox
workbox.precaching.precacheAndRoute(
    [
        { url: '/index.html', revision: '1' },
        { url: '/team.html', revision: '1' },
        { url: '/manifest.json', revision: '1' },
        { url: '/nav.html', revision: '1' },
        { url: '/pages/home.html', revision: '1' },
        { url: '/pages/liga.html', revision: '1' },
        { url: '/pages/saved.html', revision: '1' },
        { url: '/css/materialize.min.css', revision: '1' },
        { url: '/js/materialize.min.js', revision: '1' },
        { url: '/js/nav.js', revision: '1' },
        { url: '/js/api.js', revision: '1' },
        { url: '/js/db.js', revision: '1' },
        { url: '/js/sw-regis.js', revision: '1' },
        { url: '/js/idb.js', revision: '1' },
        { url: '/js/notification.js', revision: '1'},
        { url: '/img/favicon.svg', revision: '1' },
        { url: '/img/favicon-192.png', revision: '1' },
        { url: '/img/favicon-512.png', revision: '1' }
    ],
    {
		ignoreUrlParametersMatching: [/.*/],
    }
)

// Caching Google Font
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-font-stylesheet'
    })
)

// Save cache for 1 year
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-font-stylesheet',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30
            })
        ]
    })
)

// Cache fetch API football
workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'data-API'
    })
)

// // Precaching manual
// const CACHE_NAME = "bola_kita-v1";
// let urlToCache = [
//     "/",
//     "/nav.html",
//     "/index.html",
//     "/team.html",
//     "/manifest.json",
//     "/pages/liga.html",
//     "/pages/home.html",
//     "/pages/saved.html",
//     "/css/materialize.min.css",
//     "/js/materialize.min.js",
//     "/js/nav.js",
//     "/js/api.js",
//     "/js/db.js",
//     "/js/idb.js",
//     "/js/notification.js",
//     "/img/favicon.svg",
//     "/img/favicon-192.png",
//     "/img/favicon-512.png",
//     "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap",
//     "https://fonts.googleapis.com/icon?family=Material+Icons"
// ];

// // Menyimpan Aset pada Cache
// self.addEventListener("install", function(event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(function(cache) {
//             return cache.addAll(urlToCache);
//         })
//     )
// })

// // Menggunakan Aset dari Cache
// // Baru: memeriksa cache dan mengemabil jika ada cache tersimpan
// // (cont) sambil melakukan permintaan ke server
// self.addEventListener("fetch", function(event) {
//     // Baru
//     const base_url = "https://api.football-data.org/v2/";

//     if (event.request.url.indexOf(base_url) > -1) {
//         event.respondWith(
//             caches.open(CACHE_NAME).then(function(cache) {
//                 return fetch(event.request).then(function(response) {
//                     cache.put(event.request.url, response.clone());
//                     return response;
//                 })
//             })
//         );
//     } else {
//         event.respondWith(
//             caches.match(event.request, {ignoreSearch: true}).then(function(response) {
//                 return response || fetch(event.request);
//             })
//         )
//     }
// });

// // Menghapus Cache Lama
// // Sebelumnya menggunakan cache name "firstpwa". Membuat var bernilai "firstpawa-v1"
// self.addEventListener("activate", function(event) {
//     event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//         return Promise.all(
//           cacheNames.map(function(cacheName) {
//             if (cacheName != CACHE_NAME) {
//               console.log("ServiceWorker: cache " + cacheName + " dihapus");
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       })
//     );
// });

self.addEventListener('push',(event) => {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }

    let options = {
        body: body,
        icon: '/img/favicon-192.png',
        vibrate: [100,50,100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Bola Kita', options)
    );
});