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
    "revision": "fd0cb15e88887d556fbdc1a02ef2e36b"
  },
  {
    "url": "about/index.html",
    "revision": "98efbb4f9e020532a34a3f24291f1f8f"
  },
  {
    "url": "assets/css/0.styles.c77c164c.css",
    "revision": "36e04d67c103862d134b19a97dd7c1a9"
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
    "url": "assets/js/2.300973f0.js",
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
    "url": "assets/js/app.a659c5a0.js",
    "revision": "6ea78eb55a70a2bd6350f955f029c8cd"
  },
  {
    "url": "build/faq.html",
    "revision": "1313f605fca3ccde28cdbe78e8e5b7c6"
  },
  {
    "url": "build/hoshino.html",
    "revision": "eb186351d754a1641b699b5becf24c7f"
  },
  {
    "url": "build/index.html",
    "revision": "914e5f4d04f7351da3127f92cd1c4c3f"
  },
  {
    "url": "build/main.html",
    "revision": "a2a072cb8817f995fce7548840110306"
  },
  {
    "url": "build/slider.html",
    "revision": "2c73ff85e663246cda5b2191806d7ccb"
  },
  {
    "url": "build/then.html",
    "revision": "df5b50ede6da7fb20be782b396f68687"
  },
  {
    "url": "cqcode/index.html",
    "revision": "414ef0ad6e2b382496c28b1b5085a14f"
  },
  {
    "url": "help/a.html",
    "revision": "587aeacc4bca87421460dbee94979858"
  },
  {
    "url": "help/b.html",
    "revision": "17e8bf03045d3004c4c5f538fd069bcd"
  },
  {
    "url": "help/c.html",
    "revision": "cc99d3519107d976b9b69d22ce81dce7"
  },
  {
    "url": "help/d.html",
    "revision": "3986f35bbaa19d25792611fda3d52f11"
  },
  {
    "url": "help/e.html",
    "revision": "15f3b6316a3acf70af1e5832709ec6a0"
  },
  {
    "url": "help/f.html",
    "revision": "36c64998d632b97787a7e103635d51b0"
  },
  {
    "url": "help/index.html",
    "revision": "a3923105a38ab6facf44fb7580eb30f1"
  },
  {
    "url": "index.html",
    "revision": "13cd68c9867d681c022a6b644705d9e2"
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
