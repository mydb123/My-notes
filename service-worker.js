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
    "url": "assets/js/14.92b5da34.js",
    "revision": "3d6b5985c20da4d9b35a2775d4fef57c"
  },
  {
    "url": "assets/js/15.1c9814ff.js",
    "revision": "0849d1eec07e2d4cca150c100109991e"
  },
  {
    "url": "assets/js/16.43ad056d.js",
    "revision": "f97c52dddf3210005d8281911d61c718"
  },
  {
    "url": "assets/js/17.2a05d881.js",
    "revision": "269924b20732192ae4b20dab1681aef9"
  },
  {
    "url": "assets/js/18.33c13e35.js",
    "revision": "0172ff892c038b5fd8c9124692ad1914"
  },
  {
    "url": "assets/js/19.d9295004.js",
    "revision": "370ab38a59bc4e6396380655d3532cee"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.aa830e32.js",
    "revision": "1d18d7faf8d2ceb549958d351a3b0c42"
  },
  {
    "url": "assets/js/21.522334ae.js",
    "revision": "3a35aacb2b309ce7f65beb1c8dadb7bb"
  },
  {
    "url": "assets/js/22.1b7f0df4.js",
    "revision": "a38a4a3cfebdec01fb4b753bb5d99661"
  },
  {
    "url": "assets/js/23.e714e9a0.js",
    "revision": "67206515a0ec69f78c799e2ff30f45a9"
  },
  {
    "url": "assets/js/24.a4a05f76.js",
    "revision": "f2381e0f418e63c673bbd9ca34b37a89"
  },
  {
    "url": "assets/js/25.b8d2f788.js",
    "revision": "a29b3b3b76cfcdc12c316f75b58e151d"
  },
  {
    "url": "assets/js/26.a6edbc62.js",
    "revision": "ff7b3b74ffa62828bc2efbf010c0dc11"
  },
  {
    "url": "assets/js/27.52401000.js",
    "revision": "298b1a2aaa8faae041bfc141e493b2d3"
  },
  {
    "url": "assets/js/28.a96e06a5.js",
    "revision": "b01fb820dc0f2165182ad947f522be11"
  },
  {
    "url": "assets/js/29.32e592de.js",
    "revision": "995f85069eb77bcc28519455277aa327"
  },
  {
    "url": "assets/js/3.d5588be5.js",
    "revision": "dbbe340b837124aeb222664f35b98152"
  },
  {
    "url": "assets/js/30.ff5213ee.js",
    "revision": "bf346d72e77cb1e9f2ab20da7c613cac"
  },
  {
    "url": "assets/js/4.4a819886.js",
    "revision": "0d4f8f127facd6a0c1be89d59f2fb303"
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
    "url": "assets/js/app.59ab12f4.js",
    "revision": "a6f3e6399356a35f4d4e388d8f39ea11"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "f5a63599e7533c233204ab72a7fa5dcd"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "76b48c0bd471889bddda40fe84b61bc1"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "24aa5dc01216c8b39988f1f635093f91"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "c4a3ad22d7b6c042e388375dcc1e8800"
  },
  {
    "url": "front/vue/index.html",
    "revision": "3a41e1f129c6addf2d999db5403a4eef"
  },
  {
    "url": "guide/index.html",
    "revision": "3b4b398cc5a6a4ef61a14aeca254e8a4"
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
    "revision": "1ff3bcec029b8725560143d875540c26"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "c5ce460fc545ec850a651892e4833239"
  },
  {
    "url": "mobile/application/index.html",
    "revision": "72804a397a9b56cf4a2ffb0b9b200c54"
  },
  {
    "url": "mobile/application/one.html",
    "revision": "31c2e04a85b23ee3617299be5e0829db"
  },
  {
    "url": "others/interview/index.html",
    "revision": "4df64c1f0ff16f3c7be74189e4850291"
  },
  {
    "url": "others/utils/index.html",
    "revision": "4d3e787ad591bc95a9e39d7e0c9528b8"
  },
  {
    "url": "project/project/index.html",
    "revision": "0b1a0002cba0d9dabcb548451b896cfb"
  },
  {
    "url": "tools/application/代码内容.png",
    "revision": "fc95a518c859f4a714e16fc543ef478e"
  },
  {
    "url": "tools/application/引入.png",
    "revision": "732c5aba7f04f74e93d53f3850571a6a"
  },
  {
    "url": "tools/git/a-config.html",
    "revision": "3176f169c729b1ee929272a1a0b94ed8"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "e30a7d4009ab7452f4716fb9c4966787"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "4a9b06e9e977cea68468e9c433165c88"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "c4fbb8986be98ee6e911fa9e66fdbc02"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "4f6b4cc5150210833eeb5b41ab6aa575"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "dc8e6d831017ccf43e926e74265034cf"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "664a6a7fa464ddcf94ecc04940ed3826"
  },
  {
    "url": "tools/git/h-svn.html",
    "revision": "a0d86dc2e580e8f48557356c04e99f61"
  },
  {
    "url": "tools/git/index.html",
    "revision": "99c12d106e20589823a18a3dd97173e3"
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
    "revision": "80d68e5cb4e78a9dace3eaaf93a3f1df"
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
