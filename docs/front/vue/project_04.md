---
title: Vue项目模块分析
---
## 设置请求头
```js
    methods: {
        getlist(){
            //获取token,已有token
            const AUTH_TOKEN = localStorage.getItem('token')
            // 需要授权的api,必须在请求头加上Authorization字段的token令牌
            this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        }
    },
```
## 封装自定义面包屑全局组件
+ 新建myBread.vue组件
```js
    <template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{levelOne}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{leveTwo}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    </template>

    <script>
    export default {
        name:"my-bread"
    data () {
        return {
        
        }
    },
    //props 字符串数组
    // props 中的值用法和data数据用法一样
    // props 中的数据的值来源于使用组件时传的值
    // props 中的数据也是该组件的属性
    props:['levelOne','leveTwo'],

    methods: {},

    created () {
    }
    }
    </script>
```
+ main.js导入创建组件包
```js
    // 文件名:---------main.js
    import myBread from '@该文件的路径'

    //全局自定义组件
    // Vue.component('my-bread',MyBread) 这样不合理
    Vue.component(myBread.name,MyBread) 

```
+ 使用
```js
    //所有组件

    <my-bread levelOne="权限管理" leveTwo="权限列表"></my-bread>
```