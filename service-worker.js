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
    "url": "assets/css/0.styles.5acd7f6f.css",
    "revision": "933b82246b61fabff91bd50e37639f86"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3cd203bb.js",
    "revision": "f05066d801c423ad3518809eed2b1e62"
  },
  {
    "url": "assets/js/11.7bdb7e1b.js",
    "revision": "7244f510380fd11ddcd7d727d11d9dda"
  },
  {
    "url": "assets/js/12.3f3d4c5e.js",
    "revision": "4f909a538b8316ff707ff8b63444bc10"
  },
  {
    "url": "assets/js/13.52010527.js",
    "revision": "04275f6815381d284e97f4c9df48db16"
  },
  {
    "url": "assets/js/14.cdf6a9f0.js",
    "revision": "11f1e14ea0b3fb38bd1dc78ca0760f4d"
  },
  {
    "url": "assets/js/15.a2d5e8b1.js",
    "revision": "6820dbaf59d6128388669321e9d05bc6"
  },
  {
    "url": "assets/js/16.11cb225c.js",
    "revision": "1e5bf505d7c062f71ac037c781387a9b"
  },
  {
    "url": "assets/js/17.4b534663.js",
    "revision": "7fb0a58264b8a6d3d3ae152139e5d6ab"
  },
  {
    "url": "assets/js/18.e4594976.js",
    "revision": "ec75f435bada3bce1783f2363018e73c"
  },
  {
    "url": "assets/js/19.892892a4.js",
    "revision": "f655792683f5fe021b2ba2d6793f6f7c"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.de39fd54.js",
    "revision": "4175e5c2cf0b197ec7ad9652bf93bddc"
  },
  {
    "url": "assets/js/21.fc4a7094.js",
    "revision": "760b50381e0473746c74931158d7eb18"
  },
  {
    "url": "assets/js/22.657b10fc.js",
    "revision": "509d02f9022e9cbb4060a72bddf9eea8"
  },
  {
    "url": "assets/js/23.2e8fe0b3.js",
    "revision": "15621e0bcc12d20d3b15ec29bd20fead"
  },
  {
    "url": "assets/js/24.88c57f60.js",
    "revision": "df3d4168c3ffa883714297179245e450"
  },
  {
    "url": "assets/js/25.fbd56678.js",
    "revision": "f01dd61e3fddce8c07b5b31161e5689b"
  },
  {
    "url": "assets/js/26.a310648a.js",
    "revision": "e857da86364055f8cdadf4f17a23c82d"
  },
  {
    "url": "assets/js/27.89f6fbcd.js",
    "revision": "3a64a0a3c2d9990a3469067f1e5bda21"
  },
  {
    "url": "assets/js/3.82c3da60.js",
    "revision": "d099cde34c63211a473a6e4d05011847"
  },
  {
    "url": "assets/js/4.798fb7a4.js",
    "revision": "7a7024615c6a9943c439371f4b7eb7ec"
  },
  {
    "url": "assets/js/5.5a688d0c.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.f345e186.js",
    "revision": "0de86fabed8e52663444a1c99f514112"
  },
  {
    "url": "assets/js/7.93549bb8.js",
    "revision": "593c37155471613cab2beb484f9b0534"
  },
  {
    "url": "assets/js/8.5f59702a.js",
    "revision": "9e8c84372b4cc6c68381c03f6963bc10"
  },
  {
    "url": "assets/js/9.ff19f7df.js",
    "revision": "f68d77dbf5eb2a54ff10de88575d1306"
  },
  {
    "url": "assets/js/app.c406373b.js",
    "revision": "17b58ac31bac8bcd23478b905d45125f"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "d70b0011e5c10685e8937ce6bc07095b"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "a0424fd913ab5fe29b73c6c4bb5d8d3a"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "7d161e5e1add080a3c94dcab54a269cc"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "3436940f3c4ca3418009096d244f8f86"
  },
  {
    "url": "front/vue/index.html",
    "revision": "35c497c1eff2a06d82a985959b2e750c"
  },
  {
    "url": "guide/index.html",
    "revision": "d04b58ff4b5085afa751a3330b4991f3"
  },
  {
    "url": "icons/avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "icons/favicon.png",
    "revision": "f7b9be0c880b67c731a62c43b880866c"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "7ef60e8e233e6faf8098c036dad08f33"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "05df2711ebce6e51906e78699a9e5a68"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "0aa0fdce8a3e93f632c55412128c2300"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "5a22c37c125fb96b25b496dee21ad9e6"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "54dd2dfe1c0629fe4a7bcd7aa48a488b"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "5c528c091acb3e9b5b95ee30299789ec"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "49502ea7ee1dd400b29aec1229f54f7a"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "6b0be3960e12460030e471df8d55fd89"
  },
  {
    "url": "index.html",
    "revision": "fce7a5176dfc3b2d12158d545fc3b0d0"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "e289a9680ed92fc924e829d14c899baa"
  },
  {
    "url": "others/interview/index.html",
    "revision": "843b95f1ff6daa5be5f313fa30a06422"
  },
  {
    "url": "others/utils/index.html",
    "revision": "0e74dcf8b7592d84df03e0879f08a68d"
  },
  {
    "url": "project/project/index.html",
    "revision": "4ac2e4d82983e3ba90e6ae85e8ca02bf"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "99c6a1ed6accd3255a1219b4f60f244f"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "044185f5f1d78eb1270e2eb637f47298"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "0a11989fca90ec7b92352c05d1436c12"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "bb722c3b5ec023876c826fd3e9947f14"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "4f53b7a88f90c76a9eea54aa7d111942"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "0d615fd1837249e59936f179d24f4b98"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "c377d17700c09b46f5641f97b5e3ec03"
  },
  {
    "url": "tools/git/index.html",
    "revision": "93cd1ed4cfde523d1885c944302e7195"
  },
  {
    "url": "tools/git/ssh_login/基本命令.png",
    "revision": "45aafd589e83c6f5593e0fc472963720"
  },
  {
    "url": "tools/git/ssh_login/查看是否存在密钥.jpg",
    "revision": "24f5b35f309614e6af2b65dc98ff172e"
  },
  {
    "url": "tools/git/ssh_login/测试是否成功添加.jpg",
    "revision": "c9fa2ce4331096e2b68305e3429722dd"
  },
  {
    "url": "tools/git/ssh_login/添加公钥到github.jpg",
    "revision": "86407246a460a007650d8dbbcf668ff4"
  },
  {
    "url": "tools/git/ssh_login/生成密钥.jpg",
    "revision": "681c0fa44ad396dd510f3e517cf27863"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "a197f615a37ffe7c3e10053db79ff14b"
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
