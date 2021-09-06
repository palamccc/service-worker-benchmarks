const scriptName = 'sw-no-fetch.js';
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