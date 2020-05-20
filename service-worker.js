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
    "url": "assets/js/16.df9bc136.js",
    "revision": "85b8c2445261c1eb8d2b1326715d2d4e"
  },
  {
    "url": "assets/js/17.b507e5e8.js",
    "revision": "999520440453f81e59b032c7e1315a7a"
  },
  {
    "url": "assets/js/18.ca4e8ab6.js",
    "revision": "c9b29641c67652b9fd98f9582033500e"
  },
  {
    "url": "assets/js/19.419bf626.js",
    "revision": "6cb88f2076dc022de5603ff4c8db4d8d"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.f83b7261.js",
    "revision": "369d7e01607cc5e5ba551b0d10a31b54"
  },
  {
    "url": "assets/js/21.b76c64e2.js",
    "revision": "2ceef7af5147e3a9ac8e0764c45d6303"
  },
  {
    "url": "assets/js/22.4c14d55a.js",
    "revision": "b1f93b68f2a0bc67e4c73d8764bb0e28"
  },
  {
    "url": "assets/js/23.aa82898e.js",
    "revision": "4a69782587328a4fa89831358621bac9"
  },
  {
    "url": "assets/js/24.2d50a2c3.js",
    "revision": "900c257acd2d357c4d68b6c88d65a304"
  },
  {
    "url": "assets/js/25.59298cc2.js",
    "revision": "18c94e4b5c08aa245225a71d54079fc2"
  },
  {
    "url": "assets/js/26.3a82f0ba.js",
    "revision": "c2e052ebb132b190f9cc8f4e4fda23f2"
  },
  {
    "url": "assets/js/27.5e0d7b5e.js",
    "revision": "141fc558d4c154e1159f1780b227dbbe"
  },
  {
    "url": "assets/js/28.70123688.js",
    "revision": "b01fb820dc0f2165182ad947f522be11"
  },
  {
    "url": "assets/js/29.9aa1ee24.js",
    "revision": "cc7584a6b83b43a99fb6e42322c4652c"
  },
  {
    "url": "assets/js/3.d5588be5.js",
    "revision": "dbbe340b837124aeb222664f35b98152"
  },
  {
    "url": "assets/js/30.6df50524.js",
    "revision": "3b05402f446b536912bb77f2aa1320b2"
  },
  {
    "url": "assets/js/31.3566bd82.js",
    "revision": "65a4376e16cb70ef90b459009dc9170f"
  },
  {
    "url": "assets/js/32.ddfc810b.js",
    "revision": "3bc3b2c5f239ba068f716175b756f516"
  },
  {
    "url": "assets/js/33.bf994585.js",
    "revision": "ce36c418fe8dd6ebc5fa7ef0bbb42774"
  },
  {
    "url": "assets/js/34.4db0e491.js",
    "revision": "af2e6c258a38a158ed09a4e53c47fbac"
  },
  {
    "url": "assets/js/35.7c708282.js",
    "revision": "556e4ed29254b154c2e0507b92d45221"
  },
  {
    "url": "assets/js/36.b0d61273.js",
    "revision": "776ecf46ae100a409a0035ea46b327cc"
  },
  {
    "url": "assets/js/37.0099c756.js",
    "revision": "86319b418ef3c76c48ff8cf5b3bbd495"
  },
  {
    "url": "assets/js/38.2b3b3b09.js",
    "revision": "c44c755061bfcfcdc0b8dc098dfae057"
  },
  {
    "url": "assets/js/39.8afff317.js",
    "revision": "27536a20bea6a67bb7a032922f74378d"
  },
  {
    "url": "assets/js/4.4fac96f7.js",
    "revision": "a029826d6df3f7f13a5eafaa196ab144"
  },
  {
    "url": "assets/js/40.869fb63e.js",
    "revision": "aacc7ceab7bf26e4bfcb0c6f69592819"
  },
  {
    "url": "assets/js/41.3826b140.js",
    "revision": "e55d28fb575cfd800bbb5fc08b7653ae"
  },
  {
    "url": "assets/js/42.5714c6d4.js",
    "revision": "8d715c4e9c288c0bb196421c1b24bbcf"
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
    "url": "assets/js/app.25aff798.js",
    "revision": "34943cbc67979e5a3286296a84d5bcef"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "53cb8fe17680bbe528caaee04d242db4"
  },
  {
    "url": "front/htmlcss/chapter1.html",
    "revision": "7fa5a23dade8830b14db8ee21fec98f7"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "3b1cfec2df33357e722c3889ad7d2a6d"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "5481defed72c4cb48d72610aad01f21a"
  },
  {
    "url": "front/react/chapter_01.html",
    "revision": "b0d8bd86e4bc50510d8c559db3c7626f"
  },
  {
    "url": "front/react/chapter_02.html",
    "revision": "146bb337b27735bec51daa2e29ea1e7c"
  },
  {
    "url": "front/react/chapter_03.html",
    "revision": "dde450449a028b8ba8823829171dd593"
  },
  {
    "url": "front/react/chapter_04.html",
    "revision": "68bfb551436ab6752ad26588c5555131"
  },
  {
    "url": "front/react/chapter_05.html",
    "revision": "2005bd09ddf687a6642ec6b66c668d6d"
  },
  {
    "url": "front/react/chapter_06.html",
    "revision": "9a1f42ad33ffde2a41784db95287beb0"
  },
  {
    "url": "front/react/Diff.png",
    "revision": "1f522dc11891365ce77c7650f517495a"
  },
  {
    "url": "front/react/index.html",
    "revision": "9c1e9ade26f53cb09bfe0b02fc82e95f"
  },
  {
    "url": "front/react/例1.1.png",
    "revision": "6db0ed40087460c9bb06089e3ca6bf5b"
  },
  {
    "url": "front/react/例1.png",
    "revision": "3cc608bf09f98b508922f827bf3d2823"
  },
  {
    "url": "front/react/公用模块.png",
    "revision": "3ad0c8345f651302ac2593d22e012948"
  },
  {
    "url": "front/react/组件对比.png",
    "revision": "76a08c1fb114c199726f17b7487135a0"
  },
  {
    "url": "front/react/虚拟DOM的概念.png",
    "revision": "4682482ad4ba2a9ea076307b87d3f027"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "809f3ddd03ce97dcc00013665b665df5"
  },
  {
    "url": "front/vue/index.html",
    "revision": "c3170c846987db63678d7e0653c0b70b"
  },
  {
    "url": "guide/index.html",
    "revision": "76cf4e773dc0500cacfa887d9ebcb262"
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
    "revision": "d6de625b1042b59610ea8b2f58c31972"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "bfb1c2e3136efa790e6268a9157fcc59"
  },
  {
    "url": "mobile/application/a-one.html",
    "revision": "c121385ef8545a7e21cd551b61055eaa"
  },
  {
    "url": "mobile/application/b-tow.html",
    "revision": "300ae00ab9f349d47d93694025686dda"
  },
  {
    "url": "mobile/application/d-three.html",
    "revision": "0c0d44231fa64af8ce10c772c6e09a81"
  },
  {
    "url": "mobile/application/e-four.html",
    "revision": "31cac195e4c3c34d70a98003872c787f"
  },
  {
    "url": "mobile/application/index.html",
    "revision": "0dfd11b5fb237eacac0465f33c490eae"
  },
  {
    "url": "others/interview/index.html",
    "revision": "be20e36b872d49901491f42310357350"
  },
  {
    "url": "others/utils/index.html",
    "revision": "948ae028eea53ef5a59e188f0c27a6d3"
  },
  {
    "url": "project/project/chapter_01.html",
    "revision": "28581fd0ba48c0d4a69cd967eeae2e98"
  },
  {
    "url": "project/project/index.html",
    "revision": "99ee6fe1ce293bf0246ccb600781fc10"
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
    "revision": "42faca9d92585071a41909faa5e8b768"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "b286b758cf29d8929629163c796d11ed"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "fb64af50b8cd80ba8ca718b59fbd008f"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "7f2a1617486b4e87052e52454bc77691"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "e94c5727b106020cc0ca1a95cb4ee829"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "80ad28e1a4943815966b586de52d7979"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "794945dc23d4892d345bdb76e20f6142"
  },
  {
    "url": "tools/git/h-svn.html",
    "revision": "db248060a1cb5a47ee36b24738bb73bd"
  },
  {
    "url": "tools/git/index.html",
    "revision": "f0c4f12617734a03a6dec5a9209ccf75"
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
    "revision": "a3ff670f175826511b874d3107c2984d"
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
