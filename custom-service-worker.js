importScripts("/precache-manifest.bcc308f757fc0d6731dca1385dc40d13.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const bgSyncPlugin = new workbox.backgroundSync.Plugin('todoQueue', {
  maxRetentionTime: 24 * 60
});

workbox.routing.registerRoute(
  /\.(?:js|css|html|json)$/,
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  'http://localhost:3000',
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  'http://localhost:3000/items',
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  'https://pwademo.github.io',
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  'https://pwademo.github.io/items',
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  new RegExp('^https://jsonserver.github.io/'),
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      })
    ]
  })
);
