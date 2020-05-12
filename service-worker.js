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
    "url": "assets/js/11.761bbbb2.js",
    "revision": "40553ab446743ebee14a889a62c6c09c"
  },
  {
    "url": "assets/js/12.401ad2ae.js",
    "revision": "9334b34ad7dfd9e922c56778ec627634"
  },
  {
    "url": "assets/js/13.aab957dc.js",
    "revision": "b35be7f11fce99691eacbd1281897e8e"
  },
  {
    "url": "assets/js/14.e2af92be.js",
    "revision": "7f26cba3a27eff2099a716b3f1f45991"
  },
  {
    "url": "assets/js/15.91daab99.js",
    "revision": "a978d3eac6248683c70177119ee1a732"
  },
  {
    "url": "assets/js/16.615e5a34.js",
    "revision": "f97c52dddf3210005d8281911d61c718"
  },
  {
    "url": "assets/js/17.a488ee7f.js",
    "revision": "91d425fb51aee90622d0093c9d7ab9bf"
  },
  {
    "url": "assets/js/18.bb7d89fd.js",
    "revision": "7967b81abd5f59ed1ff9eb0e8074d050"
  },
  {
    "url": "assets/js/19.c20de78a.js",
    "revision": "f0d40edc18d40d732e16d6518f0b5ab6"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.8c31d4f3.js",
    "revision": "7cf76b9d7a425ffbaa83b5b1cfa892b1"
  },
  {
    "url": "assets/js/21.9549a5f9.js",
    "revision": "0c119111eec7e06de1b1918c867b624e"
  },
  {
    "url": "assets/js/22.45355ccb.js",
    "revision": "2dc25b5b2e8790f3d5c1dd9741bac70e"
  },
  {
    "url": "assets/js/23.24f3715c.js",
    "revision": "253df5ceac2799f4ba5ff31728cc0b0e"
  },
  {
    "url": "assets/js/24.80972c8d.js",
    "revision": "99f329aa8e90eca1e5f892613d4245fa"
  },
  {
    "url": "assets/js/25.3ac25a9b.js",
    "revision": "97935a4fffa37434bf71669c2d5b2bca"
  },
  {
    "url": "assets/js/26.d278b635.js",
    "revision": "00ea8e9cfff407ef5329710aa226a642"
  },
  {
    "url": "assets/js/27.a7b3abc2.js",
    "revision": "c3ec69540483492a759569eb811856e8"
  },
  {
    "url": "assets/js/28.db336bec.js",
    "revision": "b22623b6bd910ade70d556e6d6d0dc8b"
  },
  {
    "url": "assets/js/29.071e60bf.js",
    "revision": "03228369bc9a1dcea9a2532ce0f50d0e"
  },
  {
    "url": "assets/js/3.d5588be5.js",
    "revision": "dbbe340b837124aeb222664f35b98152"
  },
  {
    "url": "assets/js/30.af0e7620.js",
    "revision": "3aa9844e2fa8d969593347fd4404f4c9"
  },
  {
    "url": "assets/js/31.3d24a4e6.js",
    "revision": "88ea990d0c2271478f3c6881736f88e0"
  },
  {
    "url": "assets/js/32.32244662.js",
    "revision": "fc4522abc86b08b494520a8b6608bcaf"
  },
  {
    "url": "assets/js/33.0d22a1a2.js",
    "revision": "9634464840e7ccdf99670f8625c49815"
  },
  {
    "url": "assets/js/34.5cb252c3.js",
    "revision": "1ce12d5e9736fb8faef75de753345f1a"
  },
  {
    "url": "assets/js/35.8788b332.js",
    "revision": "22364e833e461519f749f82d6116f58d"
  },
  {
    "url": "assets/js/36.5754cf3b.js",
    "revision": "25180172b31c7966503ce46466ca1d3c"
  },
  {
    "url": "assets/js/4.76c6130a.js",
    "revision": "a0c8c31dc732a26dd4ca43c9419d8472"
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
    "url": "assets/js/app.a079bd19.js",
    "revision": "4118ab22b5b19e2db5767d6658ac3d7f"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "7cc70a5fe3a954e45f10a5b36a138be7"
  },
  {
    "url": "front/htmlcss/chapter1.html",
    "revision": "1cf2320e6b60db207f7ec85cbd2cbbdd"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "786b40472d52ebe4617229ddf89b730c"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "68174175bfdc19a188e32353f9e51688"
  },
  {
    "url": "front/react/chapter01.html",
    "revision": "3c32bd7518734c30f527137afc326ac9"
  },
  {
    "url": "front/react/Diff.png",
    "revision": "1f522dc11891365ce77c7650f517495a"
  },
  {
    "url": "front/react/index.html",
    "revision": "72822cac1b5d9ec9418c76c27fb88c33"
  },
  {
    "url": "front/react/虚拟DOM的概念.png",
    "revision": "4682482ad4ba2a9ea076307b87d3f027"
  },
  {
    "url": "front/vue/amap.html",
    "revision": "2eec1ebf11328882385521e334b8c1d3"
  },
  {
    "url": "front/vue/index.html",
    "revision": "84d26b85f2f79135af09c7bff30a38b6"
  },
  {
    "url": "guide/index.html",
    "revision": "373d6ffa23738bfc1ee1e3fa2ae7bef7"
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
    "revision": "c0dd97c8828eca9860baa4d8e5a8cd9f"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "a70d6fa66bf7d64bcc89405fe3f3d7ef"
  },
  {
    "url": "mobile/application/a-one.html",
    "revision": "1724651ec9a709fff993538f4831009e"
  },
  {
    "url": "mobile/application/b-tow.html",
    "revision": "e27d106542e4439cef13e20369e6efb3"
  },
  {
    "url": "mobile/application/d-three.html",
    "revision": "1df6e36c762da3a3d627b9fc8389a113"
  },
  {
    "url": "mobile/application/e-four.html",
    "revision": "c8100e5a077d3727d4dd000cad267a12"
  },
  {
    "url": "mobile/application/index.html",
    "revision": "6f50395a63b74c1e669da7339de4a2ad"
  },
  {
    "url": "others/interview/index.html",
    "revision": "d7fa7ff9c27bbef508d879a9dee9cf78"
  },
  {
    "url": "others/utils/index.html",
    "revision": "4f134c66c8c8351780532b1ace1bb9e6"
  },
  {
    "url": "project/project/index.html",
    "revision": "c3fa46b26863d555897081e405aa458e"
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
    "revision": "d82ef55af69099b1ef9c0709ceb9cfd6"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "b3877867ddd3ac0adc5dd91238029482"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "f13f0fed6ed2504e72ec05c602e2d691"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "465cb0739a3da1b79310d4839d34f8f0"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "539c80724cab0f1ded479c9caee7cd7e"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "19edcdf9ed88ce93cc170ead910138e1"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "7bed42f3875166edc77a97734bc04ae9"
  },
  {
    "url": "tools/git/h-svn.html",
    "revision": "831db888d8871c854fec4e6339b6a202"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a7c613b6ce70b2f3b9e0050818532dfa"
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
    "revision": "0bfa5bfd00f4896cf10659952156e72e"
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
