const scriptName = 'sw-pass-thru.js';
const log = (msg) => console.log(`${scriptName}: ${msg}`);
log('start');


self.addEventListener('install', () => {
  log('install');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  log('activate');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});