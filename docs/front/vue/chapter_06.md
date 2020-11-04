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

## vue路由传值
<img :src="$withBase('/front/vue/请求方法1.jpg')">


```js
    {
      path: '/editCardetail',
      name: 'editCardetail',
      component: EditCardetail
    }, 
```

1. 使用$router.push 拼接参数传参`this.$router.push('/editCardetail?editType=add')`
  其中editType=add即为传递的参数

2. 使用name来确定匹配的路由，通过params来传递参数
```js
this.$router.push({
			          name: 'editCardetail',
			          params: {
			            editType: add
			          }
			        })
```

3. 使用path来匹配路由，然后通过query来传递参数

```js
this.$router.push({
        path: '/editCardetail',
        query: {
          editType: add
        }
      })
```


## Vue接口传参的几种写法
+ 直接+拼接
```js
  // 根据id查询项目信息
    getProjectById (id) {
        return get(`${base.sq}/workbench/bizProject/`+id);
    },
```
+ 用?式拼接
```js
  getUserList (stationId) {
        return get(`${base.sq}/userRelated/findUserByStation?stationId=`+stationId);
    }
}
```
+ 用&多个拼接
```js
   loadFile(foreignId, type) {//加载
        return get(`${base.sq}/workbench/findFileByForeignIdAndType?foreignId=` + foreignId + "&type=" + type);
    },
```
+ 利vue用插件qs请求
```js
  //分页查询（带条件）    
    pageByExample (query,pageRequest) {
      return get(`${base.sq}/workbench/bizDonator/pageByExample?`+qs.stringify(query) +'&'+ qs.stringify(pageRequest));
    },
```

+ ${}方式携带参数
```js
  async getUserList(){
    const res = await this.$http.get(`users?query=${this.quert}&page=${this.page}`)
  }
```
+ params携带参数
```js
  data(){
    return{
      queryInFo:{
        name:"",
        age:"",
      }
    }
  }

  async getUserList(){
    const res = await this.$http.get('users',{params: this.queryInFo})
}

//接受var id = this.$route.params.id;
```
+ then方法回调的写法
```js
  loadData(id) {
      api.designPartner.findById(id).then(response => {
          this.formData.id = response.id;
          this.formData.name = response.name; //项目名称
      }).catch(error => {
          console.log(error);
      });
  }
```