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
    "url": "assets/js/10.34e4d735.js",
    "revision": "94c558880f434fcea132cec7c8894799"
  },
  {
    "url": "assets/js/11.b4e1d08a.js",
    "revision": "91c38b5bf6b18478332b4b1161034ae7"
  },
  {
    "url": "assets/js/12.0622404e.js",
    "revision": "a6eb04688b2651d000b7cb4290eb267d"
  },
  {
    "url": "assets/js/13.16a73702.js",
    "revision": "102ceb78766044222ef690399a0cd3a0"
  },
  {
    "url": "assets/js/14.197205c2.js",
    "revision": "8ac3bd717db5ba8cf08dc2bde6fd4c12"
  },
  {
    "url": "assets/js/15.74ebe0d7.js",
    "revision": "d444564f8223193fc83f77548e479375"
  },
  {
    "url": "assets/js/16.3d1fbe07.js",
    "revision": "6be2d2cfe80553abfeb0599fbfedc1f8"
  },
  {
    "url": "assets/js/17.a4d06f47.js",
    "revision": "c2d0c73eb7106fe67304c0b1aac55541"
  },
  {
    "url": "assets/js/18.5f6a63a7.js",
    "revision": "855d5fedd446ed54f8e0cbf8a82cd841"
  },
  {
    "url": "assets/js/19.4fddd575.js",
    "revision": "f60c67b2e03250d76675c7b06648842c"
  },
  {
    "url": "assets/js/2.a0b16310.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/20.64d49020.js",
    "revision": "fd0baed0f1db1a9e06f5bda0ae2b3395"
  },
  {
    "url": "assets/js/21.38d1cee0.js",
    "revision": "386cbb2be923da4b2ef3be31c0011b76"
  },
  {
    "url": "assets/js/22.d7c58f7a.js",
    "revision": "de3066a9cfebf7c145a69d41a9bbe4d2"
  },
  {
    "url": "assets/js/23.514a106a.js",
    "revision": "a62496ff0a47e51ebe07fe082d4934d9"
  },
  {
    "url": "assets/js/24.2c70516a.js",
    "revision": "fe67513f685f14ee483e7045695ceab4"
  },
  {
    "url": "assets/js/25.2c40793c.js",
    "revision": "6d83bb57e9c8ec38962bd00b841c1d04"
  },
  {
    "url": "assets/js/26.b4dfb837.js",
    "revision": "ba33a70d4821b13bcff53a0539bc7d4b"
  },
  {
    "url": "assets/js/27.f362ab36.js",
    "revision": "2c5acb7c2fed1ba73abc924ba8ed0d20"
  },
  {
    "url": "assets/js/28.671c8a50.js",
    "revision": "52d0d663644914e5ba03dba04081a345"
  },
  {
    "url": "assets/js/29.73b3c0c9.js",
    "revision": "cbacf370e923517692408d76d69509bc"
  },
  {
    "url": "assets/js/3.d5588be5.js",
    "revision": "dbbe340b837124aeb222664f35b98152"
  },
  {
    "url": "assets/js/30.904ac2cc.js",
    "revision": "c28c3df724b348817cb006016513a899"
  },
  {
    "url": "assets/js/31.495a3627.js",
    "revision": "d6ca1817b3959e99c9def788771fe683"
  },
  {
    "url": "assets/js/32.263a2be1.js",
    "revision": "f0b2d23286494aa80ab6883177eede46"
  },
  {
    "url": "assets/js/33.3f02270e.js",
    "revision": "69ef62e041b4a416880527c871bfdeb5"
  },
  {
    "url": "assets/js/34.c61aa22c.js",
    "revision": "f18f181c21c2ba8115afc82660daed83"
  },
  {
    "url": "assets/js/35.c5a4abcd.js",
    "revision": "ffeb76d780ef4aff3a1b9eef70fc0bbc"
  },
  {
    "url": "assets/js/36.512b7ed0.js",
    "revision": "ab832dbbd07ed0dbfb3fa6d030c6898c"
  },
  {
    "url": "assets/js/37.136dc007.js",
    "revision": "577f86744fd35d9d6e8e131119f6225e"
  },
  {
    "url": "assets/js/38.ba575ebd.js",
    "revision": "be7bfa15ed6cb4321ea926b908e4da99"
  },
  {
    "url": "assets/js/39.63287207.js",
    "revision": "94d4abc494272c36a5aa1312a3905270"
  },
  {
    "url": "assets/js/4.87118be2.js",
    "revision": "b7c69278f27cd695509ef1c5b98d41e1"
  },
  {
    "url": "assets/js/40.451ef65d.js",
    "revision": "7fc8bbc576822d9d1c5c9f62f386b494"
  },
  {
    "url": "assets/js/41.0409b128.js",
    "revision": "73850685cb51ca1ec1209270cb47c0e9"
  },
  {
    "url": "assets/js/42.c7ec8b52.js",
    "revision": "8364cd758b9b8b8831b9de36cf490c9d"
  },
  {
    "url": "assets/js/43.1cb5eaa0.js",
    "revision": "888824e31d3e8a533e285772221141eb"
  },
  {
    "url": "assets/js/44.cee84619.js",
    "revision": "1db180a68ba7a0cad2816f46038393c9"
  },
  {
    "url": "assets/js/45.c2a6f537.js",
    "revision": "db5731fe37f6330f76a75d69fc7e4906"
  },
  {
    "url": "assets/js/46.faa0d5be.js",
    "revision": "c23ce312dd76be46aa5de4579c13a37f"
  },
  {
    "url": "assets/js/47.f78e6105.js",
    "revision": "2f1bd1811a5fb3dcffb6092562a29c37"
  },
  {
    "url": "assets/js/48.a6d6186c.js",
    "revision": "7611497c1584c77de1f48e4a34bb6b15"
  },
  {
    "url": "assets/js/49.b99abcf7.js",
    "revision": "5018877ce9c322db1d33147218f55b42"
  },
  {
    "url": "assets/js/5.5a688d0c.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/50.9ad2be8f.js",
    "revision": "21b5b153373a5107bdee7268da2e5330"
  },
  {
    "url": "assets/js/51.14ec02e9.js",
    "revision": "88ac2bc33275a2da8ed4a15505358fbf"
  },
  {
    "url": "assets/js/52.ff828058.js",
    "revision": "ad70cd4d452747f5ef84839f6e8f2b9e"
  },
  {
    "url": "assets/js/53.ed54b8c0.js",
    "revision": "dba929e171f66af670c4c36ee8a44b02"
  },
  {
    "url": "assets/js/54.726c0322.js",
    "revision": "b2a798a3bae30f906128c9cac616322a"
  },
  {
    "url": "assets/js/55.6a282f01.js",
    "revision": "1e1d390d36df6e8927a8e46d3327c9da"
  },
  {
    "url": "assets/js/56.7c5543f8.js",
    "revision": "631a5e4ee787733f03581b8cfa948c6f"
  },
  {
    "url": "assets/js/57.e8cfcba8.js",
    "revision": "31130f5575384280f0f697eeefb23935"
  },
  {
    "url": "assets/js/58.9236c770.js",
    "revision": "ece63afd8cb33ae17c4d4f1566370286"
  },
  {
    "url": "assets/js/59.75a84aea.js",
    "revision": "d1ff2d10587577b04877e06bcf7ea2b6"
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
    "url": "assets/js/app.296349c4.js",
    "revision": "df4daaf562dd5b3d0f3b7403e73e2282"
  },
  {
    "url": "avatr.png",
    "revision": "a04fed66cd8d8f758edcff594eea4aa4"
  },
  {
    "url": "backend/java/index.html",
    "revision": "1e13b6493f57d1b1399c2fcd36061430"
  },
  {
    "url": "front/htmlcss/chapter1.html",
    "revision": "3ac779742dcebecc51810345c1ca5f7e"
  },
  {
    "url": "front/htmlcss/chapter2.html",
    "revision": "8b3f0e215afc423ca8f4aacc44f72ef5"
  },
  {
    "url": "front/htmlcss/chapter3.html",
    "revision": "97644b5f595a81fdc18ba31d0571fe86"
  },
  {
    "url": "front/htmlcss/chapter4.html",
    "revision": "3385eebfefd45a884324491a36684fb0"
  },
  {
    "url": "front/htmlcss/H5语义化.png",
    "revision": "18d0cd7ebd4d17f4750a260664147b7a"
  },
  {
    "url": "front/htmlcss/index.html",
    "revision": "d49cc2e3610c1624403005a8fc585794"
  },
  {
    "url": "front/javascript/break.jpg",
    "revision": "fbcc72e28728d45897ca1db8182786ec"
  },
  {
    "url": "front/javascript/chapter_01.html",
    "revision": "ce3f68b408d16a98f76467a3f6f914fd"
  },
  {
    "url": "front/javascript/chapter_02.html",
    "revision": "8bc0f4e584c8848bd6c67e4f3c6b80c0"
  },
  {
    "url": "front/javascript/chapter_03.html",
    "revision": "72dd96904c1ac2a1f12c59dc3fc3b229"
  },
  {
    "url": "front/javascript/chapter_04.html",
    "revision": "57eed91886e7a4cd11d4ad6aa2615ff6"
  },
  {
    "url": "front/javascript/continue.jpg",
    "revision": "48e236ab24dd13f6ce5cf66a76d88ee0"
  },
  {
    "url": "front/javascript/dowhile.jpg",
    "revision": "84511876e17a9b45ac067fb747872089"
  },
  {
    "url": "front/javascript/index.html",
    "revision": "77c8d009089b428a2e5ff44dae7f5906"
  },
  {
    "url": "front/javascript/while.jpg",
    "revision": "1117c2cff5e9be98b4e7db2293a5d292"
  },
  {
    "url": "front/javascript/作用域链.jpg",
    "revision": "08420c867656c1f2b077b38a7420bcf2"
  },
  {
    "url": "front/javascript/函数返回值.jpg",
    "revision": "2caa41b3e60ee4bf712f7fce74905cb1"
  },
  {
    "url": "front/javascript/双重for循环.jpg",
    "revision": "fda04658aca2f69210615088a93da786"
  },
  {
    "url": "front/javascript/打断点.jpg",
    "revision": "94e1c132de2d7352246dfd02f80902c9"
  },
  {
    "url": "front/javascript/数组的遍历.jpg",
    "revision": "c24d66f98bbecc8161e374efa5bfb11f"
  },
  {
    "url": "front/javascript/预解析.jpg",
    "revision": "48d085a79dde59b86799d0f2c8c86313"
  },
  {
    "url": "front/react/button绑定事件.png",
    "revision": "bd530d28ea9b2d2b4bd121d3152a4709"
  },
  {
    "url": "front/react/chapter_01.html",
    "revision": "5e4d4fe2d475807e5f78fad20a845ee9"
  },
  {
    "url": "front/react/chapter_02.html",
    "revision": "04461dc97797baf3e03501bc4656541d"
  },
  {
    "url": "front/react/chapter_03.html",
    "revision": "8318d242ff41d87463c0cb2d32f7be3b"
  },
  {
    "url": "front/react/chapter_04.html",
    "revision": "c9a73c41ab494f7ba772239ead51f249"
  },
  {
    "url": "front/react/chapter_05.html",
    "revision": "9c12666391effe22adbf104e17b9e4fd"
  },
  {
    "url": "front/react/chapter_06.html",
    "revision": "f893c7395d7ce5a9e7a1ba5df9cdfe84"
  },
  {
    "url": "front/react/chapter_07.html",
    "revision": "86d2aaada9992ee9665c62e03b6e2065"
  },
  {
    "url": "front/react/Diff.png",
    "revision": "1f522dc11891365ce77c7650f517495a"
  },
  {
    "url": "front/react/index.html",
    "revision": "676981ccd430337c3c21ca176a825e62"
  },
  {
    "url": "front/react/input事件绑定.png",
    "revision": "4222f84994bf74da6fdeff43153bf7b2"
  },
  {
    "url": "front/react/React传参.png",
    "revision": "9cb3e1d9002c72eb6908a63e83bdd9e8"
  },
  {
    "url": "front/react/setState.png",
    "revision": "16bb586da735a2e052b8a9bfff906119"
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
    "revision": "6afca3d79e1967b2c68ae6ef0b1db544"
  },
  {
    "url": "front/vue/axios的使用.jpg",
    "revision": "45046ecbcbb9c2e043339e19915b99b3"
  },
  {
    "url": "front/vue/chapter_01.html",
    "revision": "ba54537df35eacac2b58d666ba18c1c8"
  },
  {
    "url": "front/vue/chapter_02.html",
    "revision": "b642c3092a23679c39a269fd0ca4cfc9"
  },
  {
    "url": "front/vue/chapter_03.html",
    "revision": "958e7fe1ebd960249c461fc82f1f7cf7"
  },
  {
    "url": "front/vue/get传参.jpg",
    "revision": "35ce42b2e7140a6c93f805d2f68708ef"
  },
  {
    "url": "front/vue/index.html",
    "revision": "2e7832897b2321dba3528dea86d1fe09"
  },
  {
    "url": "front/vue/input的双向绑定.jpg",
    "revision": "a752b5a9c6e9487d3e1df2056f9a1553"
  },
  {
    "url": "front/vue/login.jpg",
    "revision": "efe8a1cb684a096d109e48e9b7677240"
  },
  {
    "url": "front/vue/project_01.html",
    "revision": "94ad2f4790c1fda3b7a3de18fd66f7fe"
  },
  {
    "url": "front/vue/project_02.html",
    "revision": "912755c45b6b97e1618fdd79b0346d19"
  },
  {
    "url": "front/vue/project_03.html",
    "revision": "7fa6f1ef7a04050f31d97c805a91a683"
  },
  {
    "url": "front/vue/project_04.html",
    "revision": "ba7a0ea929c6369ebb0f5381082aa726"
  },
  {
    "url": "front/vue/push对象.jpg",
    "revision": "88bd90453d4f5af0dfee3845fd5845c2"
  },
  {
    "url": "front/vue/tabs页签.jpg",
    "revision": "10f6b16ed0d2d61e78b9aad8d9ae5fcb"
  },
  {
    "url": "front/vue/上传文件添加请求头.jpg",
    "revision": "4ba3a8535dc92a7bbc199f0c650780cb"
  },
  {
    "url": "front/vue/储存token.jpg",
    "revision": "0ac78862ffe2fca67485772a98840d08"
  },
  {
    "url": "front/vue/全局样式.jpg",
    "revision": "ee5a78ca408a6ae63265a6d0c7aebdb8"
  },
  {
    "url": "front/vue/删除商品.jpg",
    "revision": "1f72eb35f82cdc215864b4313f1b54ae"
  },
  {
    "url": "front/vue/发送请求.jpg",
    "revision": "eb1e055693c72def2f8f8b2c90947a01"
  },
  {
    "url": "front/vue/弹出层.jpg",
    "revision": "6e61fed6fc2c83d33619cd2c4b5d08c6"
  },
  {
    "url": "front/vue/懒加载.jpg",
    "revision": "9e3971928c5e699533430c00c9323671"
  },
  {
    "url": "front/vue/按钮状态.jpg",
    "revision": "a3ee6a96a50f7bef4333aea7aa1a084a"
  },
  {
    "url": "front/vue/清空数据.jpg",
    "revision": "eef4dbc7aaae23b9567a770d449a4469"
  },
  {
    "url": "front/vue/状态开关.jpg",
    "revision": "14f3964279ff5d8402989af91dc2c8d9"
  },
  {
    "url": "front/vue/确定的时候校验(1).jpg",
    "revision": "c594adeefce0c11d0ec6d5629fd7f812"
  },
  {
    "url": "front/vue/确定的时候校验(2).jpg",
    "revision": "190bf7349a94715e1c6fd0ebfc1b14bd"
  },
  {
    "url": "front/vue/索引.jpg",
    "revision": "aa554c3814aa95f8d8e634dd04699a8b"
  },
  {
    "url": "front/vue/编程时跳转.jpg",
    "revision": "0a65535744b14966903eddeb5a9bb1b6"
  },
  {
    "url": "front/vue/获取数据.jpg",
    "revision": "1685d74256b0d222672a5490b011f71e"
  },
  {
    "url": "front/vue/表单校验(1).jpg",
    "revision": "53ea2d6288b94383115dc0c19d6d8c24"
  },
  {
    "url": "front/vue/表单校验(2).jpg",
    "revision": "fe8786017d7c84d342cc9721e20792f8"
  },
  {
    "url": "front/vue/请求拦截器.jpg",
    "revision": "f06d0b1719a2873e5768f73bc0256c3c"
  },
  {
    "url": "front/vue/路由导航守卫.jpg",
    "revision": "9b72d8463dafdcb5ed1e9f0361be2d04"
  },
  {
    "url": "front/vue/路由重定向.png",
    "revision": "d7882a163e8bdd965f0a19530b22cba2"
  },
  {
    "url": "front/vue/重置表单.jpg",
    "revision": "f658bc1fada97611edcf865523ca38df"
  },
  {
    "url": "front/vue/页码.jpg",
    "revision": "c666ff4578135ab657d29b2c70eb1b58"
  },
  {
    "url": "front/webapi/chapter_01.html",
    "revision": "0c15cdc1d0cf42a942f2f55d6b358334"
  },
  {
    "url": "front/webapi/index.html",
    "revision": "77c822fcdd51f718edc055bdd6c442e0"
  },
  {
    "url": "guide/index.html",
    "revision": "0c4f673f9114d66b2e09f9ebef3f789c"
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
    "revision": "2f4574f4f9d5cf61c177168cf43f11b9"
  },
  {
    "url": "mobile/applets/index.html",
    "revision": "29b375842ed6500d0136af8e739e197f"
  },
  {
    "url": "mobile/application/a-one.html",
    "revision": "d23909e5b7f6f3f6ec2ccfc2bb092b18"
  },
  {
    "url": "mobile/application/b-tow.html",
    "revision": "76ec2d9f9495b485c087b44867726a05"
  },
  {
    "url": "mobile/application/d-three.html",
    "revision": "02fac6677d265bb0f68173a84ce3939c"
  },
  {
    "url": "mobile/application/e-four.html",
    "revision": "f8498fd8709b5ae8a038249007a8ce65"
  },
  {
    "url": "mobile/application/index.html",
    "revision": "8032829f0004700ba6fddfdd315b72fa"
  },
  {
    "url": "others/interview/index.html",
    "revision": "f0506392f63ab882db94464e6d18bddf"
  },
  {
    "url": "others/utils/index.html",
    "revision": "80e4cbe0dab298443cb0267ed04026b9"
  },
  {
    "url": "project/project/chapter_01.html",
    "revision": "704b17fc4356366eef63ae3c92e50cc7"
  },
  {
    "url": "project/project/index.html",
    "revision": "df6eef509698eaa18a3c8ed0c77c4aeb"
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
    "revision": "5bab2a0eaf702afc97680c2fdd63da8b"
  },
  {
    "url": "tools/git/b-repo.html",
    "revision": "a2826fbf910c81e387ccb14384090302"
  },
  {
    "url": "tools/git/c-base.html",
    "revision": "efc6b62b69eab5e6a80cb18774b7537f"
  },
  {
    "url": "tools/git/d-branch.html",
    "revision": "5ffd8d0f30ab2c9a4efa775b4f729514"
  },
  {
    "url": "tools/git/e-log.html",
    "revision": "16ee3c0830a58d32de466d3a088975ff"
  },
  {
    "url": "tools/git/f-tag.html",
    "revision": "f2a4faf750cb6f6c8377d129f9351378"
  },
  {
    "url": "tools/git/g-github.html",
    "revision": "f879f94f5d17d4e51319247fd1d5f439"
  },
  {
    "url": "tools/git/h-svn.html",
    "revision": "26859f3f3c3a838670480bc9c824775d"
  },
  {
    "url": "tools/git/index.html",
    "revision": "104e294666265e68dccb83dc4846d48d"
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
    "revision": "d7029d4193590598749763e5de320784"
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
