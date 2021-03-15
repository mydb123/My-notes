---
title: 面试问题
---

## javascript中的数据类型有哪些

+ 基本类型：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）

+ 引用类型：对象(Object)、数组(Array)、函数(Function)

## 你了解哪些选择器？以及这些选择器的使用场景？
+ 类型选择器
+ ID选择器
+ Class选择器
+ 属性选择器
+ 伪类选择器
+ 后代选择器、子元素选择器
+ 并集选择器
------------------------------------------------------
------------------------------------------------------
------------------------------------------------------
------------------------------------------------------
------------------------------------------------------

> 属性选择器
```css
    p[id] {
        font-size: 30px;
    }
```
> 伪类选择器
```css
    /* 没有访问的超链接a标签样式： */
    a:link {
        color: blue;
    }
--------------------------
    /* 鼠标悬浮在元素上应用样式： */
    a:hover {
        background-color: #eee; 
    }
```
> 后代选择器、子元素选择器
```css
    div ul li a {
        font-size: 100px;
        color: green;
    }
--------------------
    div>ul>li>.ddd {
            color: blue;
    }
```
> 并集选择器
```css
    .part1,h1,a {
        color: red;
    }
```

## css选择器的权重怎么计算
| 选择器    | 选择器权重             |
| ----------- | ------------------ |
| 继承或者*     | 0,0,0,0      |
| 元素选择器   | 0,0,0,1     |
| 类选择器,伪类选择器 | 0,0,1,0           |
| id选择器  | 0,1,0,0 |
|  行内样式或style    | 1,0,0,0 |
| !iimportant | 最高级      |

## js有哪些数据类型呢
ES5中， 6种：Number、String、Boolean、undefined、object、Null
+ 基本类型（单类型）：String、Number、boolean、null、undefined。NaN 
+ 引用类型：object。里面包含的 function、Array、Date。

## 闭包
+ 所以闭包的功能就是使一个函数能访问另一个函数作用域中的变量。形成闭包之后，该变量不会被垃圾回收机制回收。
+ 闭包的原理其实还是作用域。
+ 使用闭包的优点是可以避免全局变量污染，缺点是容易造成内存泄露。

## 什么是作用域链
如果父级也没呢？再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是 作用域链 。
```js
    var a = 100
    function F1() {
        var b = 200
        function F2() {
            var c = 300
            console.log(a) // 自由变量，顺作用域链向父作用域找
            console.log(b) // 自由变量，顺作用域链向父作用域找
            console.log(c) // 本作用域的变量
        }
        F2()
    }
    F1()
```

## vue 的常见路由方式有几种?

+ Hash:      使用URL的hash值来作为路由。支持所有浏览器。
    - vue-router中默认使用的是hash模式，也就是会出现如下的URL：`localhost:8080/#/`URL中带有#号.

+ History:   以来HTML5 History API 和服务器配置。参考官网中HTML5 History模式

```js

    import Vue from 'vue'
    import Router from 'vue-router'
    import Main from '@/components/Main'
    Vue.use(Router)

    export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        component: Main
        }
    ]
    })

```

+ Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。

## vue项目，F5刷新页面后 title失效问题

1. 别急，一款vue插件即可解决！插件名称：`vue-wechat-title`插件
2. 信息存到vuex中的同时将数据用sessionStorage存储到本地，刷新页面之后将存储在本地的值重新赋值给vuex中



## 说一下行内元素与块级元素有哪些

+ 常见的行内元素有：a span img button input label

+ 常见的块级元素有：div p h1-6 ul ol header footer nav section

## link和@import的区别

1. link是html标签,不仅仅可以加载css还可以定义;@import是css的语法规则只能引入样式
2. link没有兼容性,而@import只能用于高版本
3. link可以通过js插入操作dom,而@import不可以

## 如何理解js中的原型链

1. 每一个构造函数都有一个原型对象
2. 每个原型对象都有一个指向构造函数的指针
3. 每个实例函数都有一个指向原型对象的指针
4. 查找方式是object.prototype

## computed和watch的区别

+ computed: 计算结果并返回,只有当计算属性发生变化时才会触发
+ watch: 监听某一个值发生变化时,执行操作

## javascript逻辑运算符“||”和“&&”

+ “||”只要其中有一个"true",最后的答案就是为true;
+ "&&"只要其中有一个"false",最后结果就是false

## vue-router有哪几种导航钩子

+ 第一种: 全局钩子,router.beforeEach,作用跳转前进行拦截
+ 第二种: 组件内的钩子
+ 第三种: 单独路由独享的钩子

## Vue中的$nextTick用法和原理详解

## Vue中$nextTick的用法
+ $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调,在我们修改数据之后再使用$nextTick在回调函数获取到更新过后的数据

## 原型链

一. prototype

```js

    function Person(age) {
        this.age = age       
    }

```
<img :src="$withBase('/others/interview/prototype.jpg')">

![prototype](https://gitee.com/mydb123/my-notes/raw/master/images/docs/prototype.jpg)

二. __proto__

```js

    //这是每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。
    function Person() {

    }
    var person = new Person();
    console.log(person.__proto__ === Person.prototype); // true

```
<img :src="$withBase('/others/interview/__proto__.jpg')">

![__proto__](https://gitee.com/mydb123/my-notes/raw/master/images/docs/__proto__.jpg)

三. constructor

```js
    //每个原型都有一个constructor属性，指向该关联的构造函数。
    function Person() {

    }
    console.log(Person===Person.prototype.constructor)  //true

```

<img :src="$withBase('/others/interview/constructor.jpg')">



四. 原型的原型

```js

    var obj = new Object();
    obj.name = 'Kevin'
    console.log(obj.name) // Kevin

```

<img :src="$withBase('/others/interview/yuanxing.jpg')">


五 原型链

<img :src="$withBase('/others/interview/lian.jpg')">


总接:
1. 构造函数``f1()``可以利用prototype访问到实例原型``f1.prototype``
2. new出来一个``f2``这里的f2是new出来的f1 他可以利用__proto__访问到实例原型和(1)相同
3. 实例原型需要用constructor访问构造函数
4. 实例原型还可以利用__proto__访问到Object.prototype
5. Object.prototype还是通过constructor访问Object()这个函数
6. Object()这个函数又可以用Object.prototype访问到原型

## 数组的方法

```js

      let arr = [1,2,3,3,5,4,5]
    // console.log(arr.pop());末尾删除
    // console.log(arr.push(2));末尾添加
    // console.log(arr.shift(1));//开头删除
    // console.log(arr.unshift(2));//开头添加
    // console.log(arr.splice(3,1));//从索引几删除,删除几个
    // console.log(arr.concat([7,9]));//合并数组
    // var a1 = "1234567"
    // console.log(a1.split(""));//转化为数组
    // console.log(arr.reverse());//反转数组
    console.log(arr);


```

## dom和bom的区别
+ BOM 即浏览器对象模型 操作js
+ DOM即文档对象模型是w3c的标准,DOM的最根本对象是document（window.document）,也就是html

<img :src="$withBase('/others/interview/BOM和dom.jpg')">



## JS中的Promise一共有三种状态

+ pending(等待)
+ fulfilled(成功)
+ rejected(失败)
 

## 盒模型组成是什么？

+ 盒模型：margin(外边距) padding(内边距) border(边框) content(内容)

## JS中this的指向和改变this指向

1. 直接调用，指向window

```js

    var x=1;
    console.log(this.x);
    //输出 1

```

2. 在函数里调用，指向window

```js

    var x=1;
    function fn(num){
        var x=2;
        console.log(this.x);
    }
    fn();
    //输出 1

```

3. 在构造函数里用new调用，指向创建的新实例对象

```js

    function fn(num){
    this.x=num;
    this.fn1=function(){
        console.log(this.x)
        }
    }
    let a=new fn(3);
    a.fn1();
    //输出 3

```

+ 改变this的指向

1. 用new调用函数，改变指向new的实例对象

```js

    function fn(){
        console.log(this);
    }
    let a=new fn();
    //输出 {}（指向对象a）

```

2. bind

```js

    function fn(){
        console.log(this.name);
    };
    var obj={
        name:'jack',
    }; 
    var b=fn.bind(obj);
    b();

```
3. call
4. apply

## vuex

+ state,getters,mutations,actions,modules。

1. state：vuex的基本数据，用来存储变量

2. geeter：从基本数据(state)派生的数据，相当于state的计算属性

3. mutation：提交更新数据的方法，必须是同步的

4. action：和mutation的功能大致相同，包含任意异步操作.

5. 模块化vuex


## 自定义指令

```js

    // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
    })

    <input v-focus>
```


## 数组去重

+ set

```js

    ar tt  = [...new Set([5,5,6,6,8,])] // 5，6，8

```

+ 双重for循环

```js
    var arr = [1,2,3,4,5,6,7,4,6,34,5,56,3,4,2,3]

    function f1(arr){
        for(var i= 0;i<arr.length;i++){
            for(var j = i+1;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    arr.splice(j,1);
                    j--;
                }
            }
        }
        return arr;
    }

    console.log(f1(arr));

```

## 什么是箭头函数

+ 箭头函数的表达式更加简洁,并且没有自己的this,如果在全局使用的话this指向的是window对象

## 什么是对象解构

+ 对象解构是从对象或者数组中获取或者提取值的一种方式

```js

    const f1= {
        name:"张三",
        age:"123",
    }


```



## 对象的三大特征

+ 封装、继承、多态，

## 什么是跨域,怎么解决(3种)
+ 在浏览器发送请求为不同协议、不同域名或者不同端口

1. 打开config/index.js,在proxyTable中添加重写路径的代码

2. jsonp来解决

3. nginx代理跨域

4. WebSocket来解决跨域

## Promise 对象的状态(2个参数)
1. resolved(成功) 
2. reject(失败)

+ 异步操作未完成（pending）
+ 异步操作成功（fulfilled）
+ 异步操作失败（rejected）