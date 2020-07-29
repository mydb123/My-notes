---
title: 关于vue的知识
---
## 自定义vue插件模块
axios不是vue插件 
```js
    //自定义axios插件模块
    import axios from "axios"
    const MyHttpServer = {}

    MyHttpServer.install = function (Vue) {
     //设置基本地址
    // axios.defaults.baseURL="所有页面通用的地址"

    Vue.prototype.$http =  axios  // 逻辑...
    }
    }
    export default MyHttpServer
```
在main.js直接注册
```js
import MyHttpServer from "这个上面这个文件"
Vue.use(MyHttpServer)
```
结果: this.$http.get()

## then回调
```js
<template>
  <div>
    <button @click.prevent = handleLogin() ><button/>
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  methods: {
      handleLogin(){
          this.$http.post("请求路径",携带参数).then((res)=>{

          })
      }

  },

  created () {
  }
}
</script>

<style lang='less' scoped>

</style>

```
## 对象的解构赋值
<img :src="$withBase('/front/vue/结构赋值1.png')">
<img :src="$withBase('/front/vue/结构赋值2.png')">


## 侧边栏的模块
1. home.vue 开启路由模式的 index值->path值 `:router="true" `在你需要点击的地方加
2. home.vue 加上router-view