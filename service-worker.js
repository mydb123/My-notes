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
    "url": "assets/js/14.b0c6a14d.js",
    "revision": "bcb994288cf9f07db4085e028d1cbff3"
  },
  {
    "url": "assets/js/15.06f642b1.js",
    "revision": "e930d3fe719211386c8a27f1d88ff120"
  },
  {
    "url": "assets/js/16.4b6b58d0.js",
    "revision": "68a99242972bd7056c9d787137fd308b"
  },
  {
    "url": "assets/js/17.112909a1.js",
    "revision": "fec458cb6f5836f2278243759f2b6b78"
  },
  {
    "url": "assets/js/18.d2c441e6.js",
    "revision": "ab89ede74379fb285a1dd98da1330ea1"
  },
  {
    "url": "assets/js/19.4781e727.js",
    "revision": "4fd42ce713f993b4098c3bfdfa7d605f"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.55b7a59a.js",
    "revision": "61b30b42c977785b62c52cc6b2b2a444"
  },
  {
    "url": "assets/js/21.264408e8.js",
    "revision": "f27d6971a5d67874f17a81e61718f5bf"
  },
  {
    "url": "assets/js/22.8ee7d325.js",
    "revision": "b4dc40c87a00779a036fdfe05250311a"
  },
  {
    "url": "assets/js/23.72f9ea7b.js",
    "revision": "9bd43958b307644da004608293072327"
  },
  {
    "url": "assets/js/24.3e1c2ce4.js",
    "revision": "777c56cad576daf793e40ce8db2257cb"
  },
  {
    "url": "assets/js/25.f317471b.js",
    "revision": "25af2e6517c8b5cdb759fc3c4ed45221"
  },
  {
    "url": "assets/js/26.f9ae4e7a.js",
    "revision": "19c6551584cb5fcd045d8e552442b395"
  },
  {
    "url": "assets/js/27.f3b93fa3.js",
    "revision": "94b381d7383b98e375c0264e432607c3"
  },
  {
    "url": "assets/js/28.ba0ba6fc.js",
    "revision": "0e985b7e4c89346a6bcaac530b4d64c7"
  },
  {
    "url": "assets/js/29.3fd741c3.js",
    "revision": "a0e845de28fa92d1c816b2d6c5c97930"
  },
  {
    "url": "assets/js/3.d5588be5.js",
    "revision": "dbbe340b837124aeb222664f35b98152"
  },
  {
    "url": "assets/js/30.5ce9d9a2.js",
    "revision": "c0a1e67eebb7ba07e0cd8d60464a24ba"
  },
  {
    "url": "assets/js/31.206083f4.js",
    "revision": "f244fb2788cf94604c334425628c2aca"
  },
  {
    "url": "assets/js/32.4ef252ec.js",
    "revision": "8af903c68dbe2f24933b0f15412e515b"
  },
  {
    "url": "assets/js/33.a32232ed.js",
    "revision": "8479d9bdb989527ae8f661a823fc9215"
  },
  {
    "url": "assets/js/4.e0f5e2e2.js",
    "revision": "504f27ae295323dac83458d99385c650"
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
    "url": "assets/js/app.39a80c9c.js",
    "revision": "e4bd988c8a9dd16bab9d393b1ff568b1"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "eca4b2d86bcd881bd5b14b69f88a137d"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "0c7cd71c9b4a899646a97fd565c14c82"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "ca720486bd0e3eab8e1b23277ca798c9"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "f1f1ffae027f8b53e351c6983e89da90"
  },
  {
    "url": "front/vue/index.html",
    "revision": "3c844326ab7dc06af0db592d6a2cb3e3"
  },
  {
    "url": "guide/index.html",
    "revision": "504d1e207a9fb59a97f233c1540fd5d3"
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
    "revision": "f18f784076a2ca6421272cd8db1a877e"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "e7e3dba715131e8ab6d9010639d2336a"
  },
  {
    "url": "mobile/application/01.html",
    "revision": "4a54a6ffe6515f39b98a226ab457baa7"
  },
  {
    "url": "mobile/application/a-one.html",
    "revision": "b0d4805cad61c42aab2406b37db93512"
  },
  {
    "url": "mobile/application/b-tow.html",
    "revision": "7f46581869f497c55c8a0355c67c1d30"
  },
  {
    "url": "mobile/application/d-three.html",
    "revision": "9ef704e1fbcb91307cb26424496b9287"
  },
  {
    "url": "mobile/application/index.html",
    "revision": "1cd0144221863d18ed6e2b7de2ed1b4c"
  },
  {
    "url": "others/interview/index.html",
    "revision": "c7ab63996de55b07e6f87d3648e6ccb6"
  },
  {
    "url": "others/utils/index.html",
    "revision": "9984f433eca1584312e4a907ae2ecf2a"
  },
  {
    "url": "project/project/index.html",
    "revision": "d3f01df5577f82418e1dd3823fc8da7d"
  },
  {
    "url": "tools/application/代码内容.png",
    "revision": "fc95a518c859f4a714e16fc543ef478e"
  },
  {
    "url": "tools/application/传值1.png",
    "revision": "5f33b24e2badc967d40dc79b126cfb7f"
  },
  {
    "url": "tools/application/引入.png",
    "revision": "732c5aba7f04f74e93d53f3850571a6a"
  },
  {
    "url": "tools/application/引入tabar.png",
    "revision": "7eae8aeb117d6c71b8f0852fd77a3691"
  },
  {
    "url": "tools/application/页面.png",
    "revision": "b33acbf494ccbe478e00119c5ba12646"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "a81d176fcb30cd69e47295a4088f9e0e"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "0ae65e58f0e849c02693f15494bcbaae"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "f75f638beb2fa69f4aa214ea80ede72b"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "19edc1f5019ebdc5ad3177fa1ca38009"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "0e07c03d08470fca1537b1eeae15021b"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "e27afac857806961ae0d3eeab16fd860"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "99632fabaec9510d01795c697e413008"
  },
  {
    "url": "tools/git/h-svn.html",
    "revision": "c9da9aa94c0e794eea85c73bf09008b0"
  },
  {
    "url": "tools/git/index.html",
    "revision": "35976542f69c8597f8e9494200e7c667"
  },
  {
    "url": "tools/git/ssh_login/svn忽略.png",
    "revision": "0addc297cb4f146303cf964e21989842"
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
    "revision": "2105b043cdbbdf6eb8f6d7e75120af9f"
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
