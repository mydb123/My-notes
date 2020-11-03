---
title: webapi的重点和易忘点
---

### 本地存储
## Window.sessionStorage
1. 数据纯存在浏览器页面
2. 页面刷新不会丢失数据
3. 可以存5M
+ 存储数据
```js
     sessionStorage.setItem(key,value)
```
+ 获取数据
```js
    sessionStorage.getItem(key)
``` 
+ 删除
```js
    sessionStorage.removeItem(key)
```
+ 清楚所以数据
```js
    sessionStorage.clear();
```
## Window.localStorage
1. 生命周期永久生效,除非手动删除
```js
    localStorage.setItem(key,value)
```
+ 获取数据
```js
    localStorage.getItem(key)
``` 
+ 删除
```js
    localStorage.removeItem(key)
```
+ 清楚所以数据
```js
    localStorage.clear();
```
## 节点操作
+ 父节点`parentNode`(得到的是最近的父节点)
```html
    <ul class="box">
        <li class="erwiitem">x</li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <script>
        // var father = document.querySelector(".box")
        var erzi = document.querySelector(".erwiitem")
        //亲爸爸
        console.log(erzi.parentNode);
    </script>
```
+ 子节点`children`(常用)
```js
    var father = document.querySelector(".box")
    // var erzi = document.querySelector(".erwiitem")
    console.log(erzi.children);
```

+ 返回第一个和最后一个子元素(常用)
```js
    var father = document.querySelector(".box")
    // var erzi = document.querySelector(".erwiitem")
    //返回第一个
    console.log(children[0]);
    //返回最后一个
    console.log(children[father.children.length - 1]);
```
