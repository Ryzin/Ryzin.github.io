/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4ed0a776a70c55736114c458f66b87c7"
  },
  {
    "url": "about/index.html",
    "revision": "2ea844b6d28e4c343df69ca8a93a2ef5"
  },
  {
    "url": "assets/css/0.styles.63a77fb6.css",
    "revision": "d571fc6798e69a0597ce17bd47bfca0a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.368aabc9.js",
    "revision": "9227befd006054d1136c3cfe874af4a7"
  },
  {
    "url": "assets/js/11.2102cae0.js",
    "revision": "7502dd5ac8a89998e5fdf2d17f20219e"
  },
  {
    "url": "assets/js/12.732edaa5.js",
    "revision": "884276af726d97b0ef9ffab5e27dc846"
  },
  {
    "url": "assets/js/13.8e4ce529.js",
    "revision": "7c53706777333b59da4ff878a963d1cf"
  },
  {
    "url": "assets/js/14.bfecfbf7.js",
    "revision": "f51b667c2f16832897587edd76738cca"
  },
  {
    "url": "assets/js/15.934a8f50.js",
    "revision": "5b2d7a65bc78ec9b68511e829d537292"
  },
  {
    "url": "assets/js/16.63c149af.js",
    "revision": "070c65ac7642dd2e40f50f5280d78d5e"
  },
  {
    "url": "assets/js/17.f9325a0e.js",
    "revision": "b6f9402e03ce349aa886cec4fbf0d963"
  },
  {
    "url": "assets/js/18.01319d28.js",
    "revision": "8041f0c545a0dc670efff94db9a42d1f"
  },
  {
    "url": "assets/js/19.5692014b.js",
    "revision": "0be7e06f1d66ca56cef4aeb71978f705"
  },
  {
    "url": "assets/js/2.b2096061.js",
    "revision": "21bc2c6ce86983d5774832e5f54512bd"
  },
  {
    "url": "assets/js/20.d09255a7.js",
    "revision": "ceaed481f1b43f9fb4f2817e073e604f"
  },
  {
    "url": "assets/js/21.7e92edd8.js",
    "revision": "69d856c6103ca633fa1084965c8732dc"
  },
  {
    "url": "assets/js/22.6fafc74a.js",
    "revision": "de7a9ef8fa042108e3ef924b154bee7d"
  },
  {
    "url": "assets/js/23.668d3d7c.js",
    "revision": "a813795b0e398b64cbe2f9adcfc514b3"
  },
  {
    "url": "assets/js/24.f4b52303.js",
    "revision": "ec65e422b141a1ab6578313fd7bd668c"
  },
  {
    "url": "assets/js/3.35a6ae17.js",
    "revision": "0c1dc0f38b3b0e11dc5073b2a555e154"
  },
  {
    "url": "assets/js/4.9142f0ef.js",
    "revision": "8b5fb86a44b0dcaccc5b939874f7d72a"
  },
  {
    "url": "assets/js/5.de591e44.js",
    "revision": "d3732dae7a4531bc698c8690abf48d89"
  },
  {
    "url": "assets/js/6.18475150.js",
    "revision": "d4fdb11593032342cfb1db2d3e91f806"
  },
  {
    "url": "assets/js/7.6d1bb3b8.js",
    "revision": "703b7afbcc4bfa3c0f76b80a7effb6bf"
  },
  {
    "url": "assets/js/8.9ff544e4.js",
    "revision": "fe9b4648660516c00d083dbd187bbd88"
  },
  {
    "url": "assets/js/9.45c77de2.js",
    "revision": "11d0346a60e024157db06326bb865e9a"
  },
  {
    "url": "assets/js/app.ce2d0ba1.js",
    "revision": "9e6f244c2810c9f61e74c167edea617e"
  },
  {
    "url": "build/faq.html",
    "revision": "49cf874d1575b0a393296052c4e6ebcd"
  },
  {
    "url": "build/hoshino.html",
    "revision": "d57f147e536ec6d63e44f5e74ae76e6d"
  },
  {
    "url": "build/index.html",
    "revision": "512d3beded900d8261b7072f765f808c"
  },
  {
    "url": "build/main.html",
    "revision": "d0cef4bb94a158a6935d417dc673c8df"
  },
  {
    "url": "build/slider.html",
    "revision": "a72792631cf20fe80df3d5235cc917e8"
  },
  {
    "url": "build/then.html",
    "revision": "b1146683a5802673a8d7458a9a2f7b13"
  },
  {
    "url": "cqcode/index.html",
    "revision": "178c78ec5be88abb7f19da43237c091a"
  },
  {
    "url": "help/a.html",
    "revision": "d7c4aae425fd0a3974e03dd9a3a53831"
  },
  {
    "url": "help/b.html",
    "revision": "1a7dc41866281b2d6aa9aab0fdd43233"
  },
  {
    "url": "help/c.html",
    "revision": "642aa409153f880fb4a8810924cfd165"
  },
  {
    "url": "help/d.html",
    "revision": "0e20a9d8ab5665e9e4959a48fee0f9a0"
  },
  {
    "url": "help/e.html",
    "revision": "7e318be20c0f6ee05b18b1bc9bd049aa"
  },
  {
    "url": "help/f.html",
    "revision": "30db676d58fffb8548051eebd8cdcce6"
  },
  {
    "url": "help/index.html",
    "revision": "e4478b413d3407881258e73dcfe15914"
  },
  {
    "url": "index.html",
    "revision": "d7a9ff0941c3afa4976082a8012af9a2"
  },
  {
    "url": "logo.png",
    "revision": "9300caf3491851b5c90852d84efed99a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
