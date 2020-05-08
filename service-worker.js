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
    "url": "assets/js/11.8887ab6b.js",
    "revision": "24fd70794331a049c803e2947fa62c57"
  },
  {
    "url": "assets/js/12.39930c3c.js",
    "revision": "79d3f5fddcbbb0aa576dcf6cb88865f8"
  },
  {
    "url": "assets/js/13.12ba8064.js",
    "revision": "f0c009afd356210b7e16197697c444e3"
  },
  {
    "url": "assets/js/14.ca0aef1f.js",
    "revision": "11f1e14ea0b3fb38bd1dc78ca0760f4d"
  },
  {
    "url": "assets/js/15.3ae5ae5b.js",
    "revision": "be243a7634ff6c32d174d2dff1efe031"
  },
  {
    "url": "assets/js/16.e4a59fa2.js",
    "revision": "28b2f313c82bf44777ab98f825869bf4"
  },
  {
    "url": "assets/js/17.3e9fb10b.js",
    "revision": "98ba2fbdd243abbed8c80a49e48265ac"
  },
  {
    "url": "assets/js/18.07b7f020.js",
    "revision": "105e338510fbf1c0ec35ced20da3e838"
  },
  {
    "url": "assets/js/19.6c075415.js",
    "revision": "bc8ea7d2712a2c00f44c8b6790937fa6"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.3a72f8ec.js",
    "revision": "61b30b42c977785b62c52cc6b2b2a444"
  },
  {
    "url": "assets/js/21.911c64e7.js",
    "revision": "2ceef7af5147e3a9ac8e0764c45d6303"
  },
  {
    "url": "assets/js/22.1368d78f.js",
    "revision": "8571bc84d60762ba9b58d95f7a926909"
  },
  {
    "url": "assets/js/23.2e0a5075.js",
    "revision": "458b391d8d0c5a63c3b937bf0a975a02"
  },
  {
    "url": "assets/js/24.3dff65a1.js",
    "revision": "d801041e78f718533f36946e5a8fcbd0"
  },
  {
    "url": "assets/js/25.34067373.js",
    "revision": "fd67a95534a680b0bf59ad8eea3a6cdc"
  },
  {
    "url": "assets/js/26.9b0d472e.js",
    "revision": "9890f70b0745188727dba0429b7b152d"
  },
  {
    "url": "assets/js/27.500a4ae2.js",
    "revision": "1346a522ec0996db03f6d2ac3aeed0a4"
  },
  {
    "url": "assets/js/28.20f43131.js",
    "revision": "798193e41f529a45c087c36c56877d9d"
  },
  {
    "url": "assets/js/29.7bc3781e.js",
    "revision": "3e9dfebc4a700f99f162c06ceda5cace"
  },
  {
    "url": "assets/js/3.d5588be5.js",
    "revision": "dbbe340b837124aeb222664f35b98152"
  },
  {
    "url": "assets/js/30.d8629913.js",
    "revision": "cd5fd04bf03b5ba9a68330f67257f639"
  },
  {
    "url": "assets/js/31.e4345693.js",
    "revision": "e7087e5963c6798324f8ef2e7e8eda5f"
  },
  {
    "url": "assets/js/32.d99c3c2d.js",
    "revision": "b59e50ea5fa1f1a730e71b19df7680e7"
  },
  {
    "url": "assets/js/33.c9a37bd2.js",
    "revision": "c7716118b9ba4b66450af0392d6d5710"
  },
  {
    "url": "assets/js/34.555d2159.js",
    "revision": "e2b3dd1044dedee06b01ba8095e33fd2"
  },
  {
    "url": "assets/js/4.97c02cbe.js",
    "revision": "a85164fe29b4068384e20ad7580bd94b"
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
    "url": "assets/js/8.066728eb.js",
    "revision": "65a02c450caf96099b138f524150965f"
  },
  {
    "url": "assets/js/9.57260358.js",
    "revision": "f68d77dbf5eb2a54ff10de88575d1306"
  },
  {
    "url": "assets/js/app.c7c3789b.js",
    "revision": "1fb0772881c5fccb7c85a59c7b5402de"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "4cec7ae633150e71cc850545d58d56f1"
  },
  {
    "url": "front/htmlcss/01.html",
    "revision": "31a54d2223c63578d527c5f2c9e2ed08"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "a4ea085a3a16cffe11a0befdcf0a5160"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "da286eaa09bcd56b98252bb4265312e0"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "f0d46d39b378347b41ea3bf8b90a8e3c"
  },
  {
    "url": "front/vue/index.html",
    "revision": "383ad8c39ba12bd34ead4ad50492632a"
  },
  {
    "url": "guide/index.html",
    "revision": "be828a038a159f3bb1194f3b4b69393f"
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
    "revision": "00e32bc915da43644b9eeb3f5a06f5a9"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "be9d71345496ae20ec856711aa2ce142"
  },
  {
    "url": "mobile/application/01.html",
    "revision": "b52a28d8e912ee3d3c4687d386edc9be"
  },
  {
    "url": "mobile/application/a-one.html",
    "revision": "d7bbe004b1e9265c7c09ea1d670cb973"
  },
  {
    "url": "mobile/application/b-tow.html",
    "revision": "927fe9042995673d4236cd8910fae1ce"
  },
  {
    "url": "mobile/application/d-three.html",
    "revision": "117d309110d2bbd040d1450b7a7c3b47"
  },
  {
    "url": "mobile/application/index.html",
    "revision": "3bbfd8fa2c77632374e8d027dfcc8736"
  },
  {
    "url": "others/interview/index.html",
    "revision": "625894a51886e977aee7d43f3c73fb47"
  },
  {
    "url": "others/utils/index.html",
    "revision": "142979dd1fe97c79c721ea0bc717b36e"
  },
  {
    "url": "project/project/index.html",
    "revision": "5c8e233c83aed2914bf068cdbdae7b8c"
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
    "revision": "db1d2cc8e1c9c0bd0ffbdf89f873b0e9"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "56ca009989e6349567d9692db2cab4fd"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "8022705bb52093a2115b3904fa9b9376"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "ee3151f878fa1892481817a2a7f6b6f1"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "056365257dc61f6ada15dd74a87a0add"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "c2b1444b1ad29be8f6b914b5d6a7fd9b"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "e2b1219578b94f8b9f0dffd5aa992b1e"
  },
  {
    "url": "tools/git/h-svn.html",
    "revision": "dc0407a8e622ede613b3d93a894cf11a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "4f2db3a0fffec5a501460377174156a6"
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
    "revision": "28fae117895f3e723af363d33f3a32d0"
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
