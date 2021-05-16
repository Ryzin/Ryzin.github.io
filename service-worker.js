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
    "revision": "24c134061bb472b57aa2b5526841fe81"
  },
  {
    "url": "about/index.html",
    "revision": "cc24a64774acb88c22326f23488bb43d"
  },
  {
    "url": "assets/css/0.styles.ff70b751.css",
    "revision": "87358e3c5e98cff3e2b92d9937ed6cf6"
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
    "url": "assets/js/app.7aea2c81.js",
    "revision": "0abe243dbad45b899076fb1ec60d11a7"
  },
  {
    "url": "build/faq.html",
    "revision": "0027a06106f00c7f81057b70cea1a06c"
  },
  {
    "url": "build/hoshino.html",
    "revision": "ec73bc9f0b41bc70be3fc0426e7a4f50"
  },
  {
    "url": "build/index.html",
    "revision": "43e9d097d2f2924ede5248e9608a48d6"
  },
  {
    "url": "build/main.html",
    "revision": "c7d7593f571e92e43af43b7466baca0c"
  },
  {
    "url": "build/slider.html",
    "revision": "8ab93471b70bf754b9b696e6d1771f58"
  },
  {
    "url": "build/then.html",
    "revision": "540e25fa9a77ada78b648f5d7a23668c"
  },
  {
    "url": "cqcode/index.html",
    "revision": "4389376248e8c784d9ce865d9bc65e91"
  },
  {
    "url": "help/a.html",
    "revision": "d24e8a7c97a0f208f08b62a9784780e1"
  },
  {
    "url": "help/b.html",
    "revision": "32fa114ffdbbdd1b9c785dcf1377da4e"
  },
  {
    "url": "help/c.html",
    "revision": "98460a728e774cac31af8c282449f07d"
  },
  {
    "url": "help/d.html",
    "revision": "7d1f2108a8a9cf6aefca871b2f4a21ea"
  },
  {
    "url": "help/e.html",
    "revision": "e73381d6f252438573049b1713075bd7"
  },
  {
    "url": "help/f.html",
    "revision": "9d893c963bd3e0d77dcf8f94a4905c3d"
  },
  {
    "url": "help/index.html",
    "revision": "7154dab94eba6537b05b839fbf78a04c"
  },
  {
    "url": "index.html",
    "revision": "87ff1b393fe972a28d2e709c6f0467a7"
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
