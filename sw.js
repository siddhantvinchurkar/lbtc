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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "database.rules.json",
    "revision": "a8dec78530cbd4ee9ece4713904434e1"
  },
  {
    "url": "firebase.json",
    "revision": "eeda74789c63c8417915519dcd56ff1c"
  },
  {
    "url": "firestore.indexes.json",
    "revision": "d0d232b38004a74922103ec90544265a"
  },
  {
    "url": "firestore.rules",
    "revision": "fc029dbd9cab19099a150474dc715e1a"
  },
  {
    "url": "images/icons/favicon.png",
    "revision": "6063754496f065c996d580880be30c0c"
  },
  {
    "url": "images/logo-small.png",
    "revision": "80f8791d8cff572274a5114289561788"
  },
  {
    "url": "images/logo.png",
    "revision": "52603725df5babaaaeaf3eaf1a94a272"
  },
  {
    "url": "index.html",
    "revision": "d4767c160d2fb1e7ef7b9b680d9aabfc"
  },
  {
    "url": "main.js",
    "revision": "c55d77f4f61f4c53e6ae1800fe8530c3"
  },
  {
    "url": "manifest.json",
    "revision": "1c2ee23ee271cd0c3d67fc0c177cf6c0"
  },
  {
    "url": "README.md",
    "revision": "337446b7c20bde17bf276c2270590b0b"
  },
  {
    "url": "storage.rules",
    "revision": "166a8a900000c71f8e5a5cb4247fa6d4"
  },
  {
    "url": "workbox-config.js",
    "revision": "c76a44a20ab5e9a2ca10359f84e6f48e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
