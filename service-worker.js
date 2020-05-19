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
    "url": "assets/js/10.469bd0e6.js",
    "revision": "6db9c9828f22cb78752cde18c2fc2486"
  },
  {
    "url": "assets/js/11.f85cb31e.js",
    "revision": "12de9114869f7b3e74da731be3233f19"
  },
  {
    "url": "assets/js/12.41d6646c.js",
    "revision": "07bac1ee594409f4252ab7c2186924f0"
  },
  {
    "url": "assets/js/13.e37c7b92.js",
    "revision": "030519ca40c89cc886597da113df5513"
  },
  {
    "url": "assets/js/14.c5d9e874.js",
    "revision": "da8fae610b139ec95ed73d022b7de9c4"
  },
  {
    "url": "assets/js/15.699c3319.js",
    "revision": "157d622fa177dbec834cddd913aefebd"
  },
  {
    "url": "assets/js/16.7a2ef430.js",
    "revision": "81061694eaabd3c21ebb1cc36db130c8"
  },
  {
    "url": "assets/js/17.138550a9.js",
    "revision": "a99701c1af11d253c30b364b462056f3"
  },
  {
    "url": "assets/js/18.71467577.js",
    "revision": "eb25ab5d3b7bede6c953b24ea12f67f4"
  },
  {
    "url": "assets/js/19.58629405.js",
    "revision": "164fc509049633860510c3fc25b303f9"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.b990dfe9.js",
    "revision": "61b30b42c977785b62c52cc6b2b2a444"
  },
  {
    "url": "assets/js/21.2ad8f729.js",
    "revision": "bec35f10c14ac0537d5c3581d40ae21c"
  },
  {
    "url": "assets/js/22.6493f722.js",
    "revision": "5fd20409588c73cf4168644b9bdc892d"
  },
  {
    "url": "assets/js/23.a8e1f374.js",
    "revision": "c8fc43ebe9e8257d17893ae342f62adc"
  },
  {
    "url": "assets/js/24.7d62cb6e.js",
    "revision": "bae94f045c33978d53ae8e03170efaad"
  },
  {
    "url": "assets/js/25.42f47ffd.js",
    "revision": "4a24a78ac73febc9bff82f2bd4b0879c"
  },
  {
    "url": "assets/js/26.a9903656.js",
    "revision": "0e658af2fcad6bdb63e51290005d9f25"
  },
  {
    "url": "assets/js/27.e037b6f1.js",
    "revision": "141fc558d4c154e1159f1780b227dbbe"
  },
  {
    "url": "assets/js/28.afc7821b.js",
    "revision": "4e6cce9a7ff692d1243e90bf79d070c6"
  },
  {
    "url": "assets/js/29.9c33df4c.js",
    "revision": "071f5bd47df5bb41c85bc0e402dea242"
  },
  {
    "url": "assets/js/3.d5588be5.js",
    "revision": "dbbe340b837124aeb222664f35b98152"
  },
  {
    "url": "assets/js/30.e030764e.js",
    "revision": "6f35eee487ea5a72e6e3d5b82911e2bd"
  },
  {
    "url": "assets/js/31.179ffe1a.js",
    "revision": "5c7ef9428f200d613b4e5d01640f5aac"
  },
  {
    "url": "assets/js/32.4a17138b.js",
    "revision": "ddcec5a6b71d7a1a239957ee393d6478"
  },
  {
    "url": "assets/js/33.cea06dc9.js",
    "revision": "9e01a839c544c35e1602001cf8d1d39f"
  },
  {
    "url": "assets/js/34.0d0aa3ca.js",
    "revision": "e81fce15f71761dce43414f3bd8a8129"
  },
  {
    "url": "assets/js/35.c2dc123e.js",
    "revision": "19a55a0b87c53ac64ba2bf0d15fc5c0d"
  },
  {
    "url": "assets/js/36.221764bb.js",
    "revision": "07c3b8ccdac11c04d31eb1eec2388af8"
  },
  {
    "url": "assets/js/37.bf37cb89.js",
    "revision": "0a4fddc06ce2e4b4671a5292a7a1b8b1"
  },
  {
    "url": "assets/js/38.d1dc0e27.js",
    "revision": "6ecdfe47232acfcdc77e7fe997654ad4"
  },
  {
    "url": "assets/js/39.f4e7fef0.js",
    "revision": "c3d27f099f204f33829f7c2e65afdecc"
  },
  {
    "url": "assets/js/4.9436a128.js",
    "revision": "d27b937071f6569782066fa57a9ed8c8"
  },
  {
    "url": "assets/js/40.717995bd.js",
    "revision": "f94cbd3218b3174a253a24979d27cca6"
  },
  {
    "url": "assets/js/41.e9284b0d.js",
    "revision": "8b83b466a2413923d4717ba39c95e4fb"
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
    "url": "assets/js/8.7674507a.js",
    "revision": "ce382cc4ad1a3769151a3963ba0368e7"
  },
  {
    "url": "assets/js/9.dfeb3fd1.js",
    "revision": "fd0e1d141ba5fb86e1b805cab81b8b00"
  },
  {
    "url": "assets/js/app.516de7fe.js",
    "revision": "4cdd188f138ababbb474c5554fbf00aa"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "ad747c2d4bcf1ade6f7ceab7dc45f91e"
  },
  {
    "url": "front/htmlcss/chapter1.html",
    "revision": "6ac9546d930bf7a60920941e21de3198"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "b48f0459b1a850e40974f6eb0c3b149c"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "bb2ca80a55e44e8674ec7331dc7ab0f8"
  },
  {
    "url": "front/react/chapter_01.html",
    "revision": "14c9e2f09d41fe41fff02333fc1c2ce4"
  },
  {
    "url": "front/react/chapter_02.html",
    "revision": "db2b8d95b396d5c6b566566b39771793"
  },
  {
    "url": "front/react/chapter_03.html",
    "revision": "f76cbecb887e0fd0658cc9522711a184"
  },
  {
    "url": "front/react/chapter_04.html",
    "revision": "e4ae45b5e07dd3b20be165fa6351f157"
  },
  {
    "url": "front/react/chapter_05.html",
    "revision": "ad999d0ee906bbcd7c3ad9d13fe9b546"
  },
  {
    "url": "front/react/Diff.png",
    "revision": "1f522dc11891365ce77c7650f517495a"
  },
  {
    "url": "front/react/index.html",
    "revision": "013b587ad46a09524b45c4bac7d02c5f"
  },
  {
    "url": "front/react/公用模块.png",
    "revision": "3ad0c8345f651302ac2593d22e012948"
  },
  {
    "url": "front/react/虚拟DOM的概念.png",
    "revision": "4682482ad4ba2a9ea076307b87d3f027"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "14b341d68f37e388bb29249ea5cf6a70"
  },
  {
    "url": "front/vue/index.html",
    "revision": "bc546af58ac6c7f30330812fa6eaaa24"
  },
  {
    "url": "guide/index.html",
    "revision": "586675a06cb6c2b256c812dd563f4af0"
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
    "revision": "7c08ae9086902fb991e7d1514468b3cb"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "19aa5f45ba98a36f51fd4798e65f97a5"
  },
  {
    "url": "mobile/application/a-one.html",
    "revision": "bf6a62285765999f63b859d37751d840"
  },
  {
    "url": "mobile/application/b-tow.html",
    "revision": "3fc9128db6c4137f127d8db052a9bfca"
  },
  {
    "url": "mobile/application/d-three.html",
    "revision": "275aac03f05d1be884dfaffef6ea9c3d"
  },
  {
    "url": "mobile/application/e-four.html",
    "revision": "e956f67f7ac06e651a125b9189b2c34d"
  },
  {
    "url": "mobile/application/index.html",
    "revision": "d08318ccf57094224b7e2403ea118979"
  },
  {
    "url": "others/interview/index.html",
    "revision": "90097343f24547826a8906c06cecb115"
  },
  {
    "url": "others/utils/index.html",
    "revision": "6b2adc17834476de7460146f6670a317"
  },
  {
    "url": "project/project/chapter_01.html",
    "revision": "2304b454d56e8a3a90f4f0ef99e161b1"
  },
  {
    "url": "project/project/index.html",
    "revision": "a70572f504b906fde22c08f936c7b667"
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
    "revision": "ae815beb89cc27e4c79ffa7ef83259be"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "68243413e80f8d91d71a7552636bd226"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "33e164e3c05b7c1f878bc8f8d387d80f"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "cbe73947fec1ba19cb72f42eb7d110de"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "28f282a14af2de320a24c2427390c554"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "167904303e8b763e70dbf3d43c41eb52"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "8546d65f57f37972c8c525da59d5b616"
  },
  {
    "url": "tools/git/h-svn.html",
    "revision": "f500dfc0ff5731006475ae674ab1dff3"
  },
  {
    "url": "tools/git/index.html",
    "revision": "66ff73bb88c4657511c5b8b4d6a64d44"
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
    "revision": "a896500544b0d648d0d43abcc223d64f"
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
