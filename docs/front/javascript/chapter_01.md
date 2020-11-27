---
title: 变量
---
浏览器本身不会执行js代码,而是通过内置的js引擎来执行js代码,**js引擎执行代码时会逐行解释每一行代码**

## 获取数据类型(typeof)
```js
var number = 10
consloe.log(typeof number)
```


## 转换为字符串
+ toString();  `num.toString()`  

+ string()强制转换;  `string(num)`

+ 加号拼接字符串; `num+''`  


## 转化为数字类型
+ parselnt();`parselnt("12")`  

+ parseFloat()有小数点;`parseFloat("12")`

+ Number()强制转换;`Number("12")`

+ js隐式转换;`"12"-0`

## 转换为布尔型
+ Boolean()  

 `"",0,NaN,null,undefined` **这些都会被转化为`false`其余全部转换为`true`**

## js定义函数(function)的几种方式  

+ 声明式函数
1. 这个函数有一个名称 "hello", 所以我们称这个函数为命名函数。
```js
    function hello (firstname) {
        console.log(`Hello ${firstname}`);
    }
```

+ 通过表达式(匿名函数)
```js
    const hello = function (firstname) {
        console.log(`Hello ${firstname}`);
    };
```
+ es6箭头函数
```js
    const hello = (firstname) => {
        console.log(`Hello ${firstname}`);
    };
```
+  匿名函数
使用function关键字声明一个函数，但未给函数命名，所以叫匿名函数，匿名函数属于函数表达式，匿名函数有很多作用，赋予一个变量则创建函数，赋予一个事件则成为事件处理程序或创建闭包等等
```js
    function () {}
```