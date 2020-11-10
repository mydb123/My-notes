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

## 全局设置请求拦截器
```js
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
         
            if(config.url !=='login'){ 
                const AUTH_TOKEN = localStorage.getItem('token')
                // 需要授权的api,必须在请求头加上Authorization字段的token令牌
                config.headers['Authorization'] = AUTH_TOKEN;
            }
    }
```
## 角色权限分配
1. 点击对话框的确定 发送请求
> roleId rid
2. roleId 在打开对话框的方法中 this.roleId= role.id
3. 
+ 获取全选的id数组(3.1)
+ 获取半选的id数组(3.2)
4. 在js中调用el-tree的js方法
+ 给el-tree标签设置ref
+ this.$refs.ref的值tree.js方法(3.1和3.2的方法名)
+ 返回两个数组arr1和arr2
5. es6展开运算符
> let arr=[...arr1,...arr2]
6. 发送请求`this.$http.post(`roles/${this.currEoleId}/rights,{rids:arr.join(',')}`)`
7. 关闭对话框,更新视图

## 路由导航守卫
+ 在home.vue中判断token很麻烦
```js
    
    router.beforeEach((to,from,next)=>{
        if(to.path === "/login"){
            next()
        }else{
            const token = localStorage.getItem('token');
            if(!token){
                Message.warning("请先登录")
                router.push({
                    name:"/login"
                })
                return
            }
            next();
        }
    })
```