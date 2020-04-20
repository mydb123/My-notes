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
    "url": "assets/js/12.5250ed79.js",
    "revision": "c4a12d21206d64eec22626b1721ed481"
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
    "url": "assets/js/app.1225d204.js",
    "revision": "4f48dc9d9579e08663b9851668549b2d"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "a8af0db088a40913033d23848fddd088"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "278f3c43d8c0af74cbf64bc17bb0a24f"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "a3f9cb6f1961d73ec80104560d7e8561"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "73fbd563fd00dabcfb03cf566427af9b"
  },
  {
    "url": "front/vue/index.html",
    "revision": "a0f7d7626875228b1ec7ab02592dac75"
  },
  {
    "url": "guide/index.html",
    "revision": "25c9a9a418d40582e2d935be9205ae12"
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
    "revision": "29f9517e6dff626cfd3c29a948ce6f7e"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "b3fb9a997a5b4d83e4b64dd4bd58a513"
  },
  {
    "url": "others/interview/index.html",
    "revision": "517e9804d97c2a167b5b7535f35ef0c6"
  },
  {
    "url": "others/utils/index.html",
    "revision": "4e78dcc63c96331e3af8b6bd7c760787"
  },
  {
    "url": "project/project/index.html",
    "revision": "99b82cbf0f4a537cd894175074272b56"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "ff262360f3248533a2db80595cd137d6"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "5399c38c153c40a981fb2d5472c17e6f"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "3ee1875a3c3e89c628c9ed1a64656851"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "019ca5a33b76bf66825234383e095a0b"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "43134050edd5071f07398edb2ba5ea3d"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "a22547e84d974cf90850e1982f381554"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "f2762d2631f833e24c40744c34556743"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a3a6e082b8db2e2a6ee6fc1746f71907"
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
    "revision": "f279ea6af66efd91daac38ccdef36e87"
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
