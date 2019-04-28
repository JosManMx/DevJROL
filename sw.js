; const CACHE_NAME = 'v1_cache_devjrafaelotero',
  urlsToCache = [
    './',
    './dist/build.js',
    './dist/avatar-j-rafael-otero2.jpg',
    './dist/chalkboard-teacher.svg',
    './dist/coffee.svg',
    './dist/database.svg',
    './dist/error.png',
    './dist/error.svg',
    './dist/eye.svg',
    './dist/loading.gif',
    './dist/play-pause.png',
    './dist/play-pause.svg',
    './dist/server.svg',
    './dist/video-play.png',
    './dist/video-play.svg',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
    'https://fonts.googleapis.com/css?family=Lato|Nova+Square',

  ]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          return res
        }
        return fetch(e.request)
      })
  )
})