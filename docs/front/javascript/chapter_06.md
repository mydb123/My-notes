---
title: js高级/原型
---

## 原型
```js
     //原型的使用
    function Student(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    //每一个实例对象都能调用的方法，可以将这样的方法添加到原型中。
    //1.如何访问原型对象：构造函数.prototype
    Student.prototype.sayHi = function(){
        console.log("给你打招呼的人是：" + this.name);  
    }

    //2.实例对象可以直接访问原型对象中的成员
    var lilei = new Student("李雷",20,"男");
    var hmm = new Student("韩梅梅",20,"女");

    lilei.sayHi();
    hmm.sayHi();
    //实例对象lilei使用的sayHi和 实例对象hmm使用的sayHi是同一个方法
    console.log(lilei.sayHi  ===  hmm.sayHi)

    console.log(lilei);

    var lily = new lilei.constructor();

```
<img :src="$withBase('/front/javascript/原型链.png')">


### 名词解释：
+ 实例对象：通过new调用构造函数创建的对象就被称为实例对象

+ 实例成员：实例对象的属性或者方法被称为实例成员。

+ 构造函数：一般来说建议构造函数的首字母大写.

+ 静态成员:万物皆为对象，函数是不是对象？函数就是对象,静态成员指的就是添加给构造函数对象的属性或方法。

## 原型链
1. 原型链就是实例对象和原型对象以及原型对象的原型对象之间组成的一个链式结构
+ 顶级的原型对象是Object.prototype
举例说明：
```js
    function Student(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    var lilei = new Student("李雷",20,"男");
    lilei.sayHi();
```
> 实例对象lilei和原型对象Student.prototype以及原型对象Object.prototype就组成了一个原型链
> 原型链的作用：当我们访问对象的属性或者方法的时候，会沿着原型链查找该属性或方法。
> 比如上面的lilei.sayHi();访问sayHi方法，
> 首先在lilei对象本身中查找sayHi方法，lilei对象本身没有，
> 那么就继续到Student.prototype中查找sayHi方法，也没有，
> 那么再继续到Object.prototype中查找sayHi方法，也还是没有。
> 当我们查找到Object.prototype依然没有查找到需要的属性或方法的时候，此时认为确实没有这个属性和方法，就会报错提示用户。

2. var arr = [];
+ arr是一个实例对象，原型就是Array.prototype,原型的原型是：Object.prototype

## 删除数组的数字----splice()
+ splice方法可以用来对js的数组进行删除，添加，替换等操作。
+ 删除功能，第一个参数为第一项位置，第二个参数为要删除几个。
+ 用法：array.splice(index,num)，返回值为删除内容，array为结果值。
```js
    var arr = ['a','b','c','d','e'];
    for(var i=0;i<=arr.length;i++){
        if(arr[i] === c){
            arr.splice( i , 1 );
        }
    }

    console.log(arr);////["a", "b", "d", "e"]
```

## 自调用函数
 ```js
    // 自调用函数的语法结构：
    // (function(){
    //     //代码
    // })();

    // 补充：自调用函数的前面必须要添加分号，结束掉之前的js代码。
    // ;(function(){
    //     代码
    // })();
    ;(function(num1,num2){
        console.log(num1);
        console.log(num2);
    })(10,20);

    ;(function(w,undefined){
        w.alert()
    })(window,undefined);
```

## 闭包的访问
```js
      function fn() {
        //声明一个局部变量num保存数字998
        var num = 998;
        //声明一个函数foo
        function foo() {
            //当前作用域中没有num，到上一层作用域中进行查找，找到998，返回998
            //从foo函数内部去访问了fn函数内部的num变量
            return num;
        }
        //将foo函数作为fn函数的返回值
        return foo;
    }

    var res = fn();// var res = function foo(){ ... }
    var result = res();
```

## 深拷贝和浅拷贝
+ 浅拷贝修改了原本的数据
+ 深拷贝不会修改原本的数据
```js
    //方法过滤一下
    function deepClone (obj){
        if(obj == null) return obj
        if(obj instanceof Date) return obj
        if(obj instanceof RegExp) return obj
        if(!(typeof obj == 'object')) return obj
        const newObj = new obj.constructor
        for(let key in obj){
            if(obj.hasOwnproperty(key)){
                newObj[key] = deepClone(obj[key])
            }
        }
    }


    
    const obj = {
        name:"LJJ",
        age:18,
        sex:"man",
        life:{
            eat:"apple",
        },
        fn:function name(){

        }
    }    
    //assign()这就是一个浅拷贝的方法   
    //浅拷贝 
    // const newObj = Object.assign({},obj);
    // const newObj = {
    //     ...obj
    // }
    // newObj.life.eat = '1111'

        //深拷贝
    // const newObj = JSON.parse(JSON.stringify(obj))
    // newObj.life.eat = 'banana'

    const newObj= deepClone(obj);
    newObj.life.eat='banana'

    console.log('obg',obj);
    console.log('newObj',newObj);


```

## 递归
+ 简单来说就是自己调用自己到达条件返回
<img :src="$withBase('/front/javascript/递归.jpg')">


## 变量提升和函数提升
+ 我们知道再ES5中的var 和 function 的申明都存在又变量提升，ES6中的 let 、 const 则不存在有变量提升。
```js
    var a = 3
    function fn(){
        console.log(a);//undefined
        var a = 4;

    }
    fn();

    // 解释:因为var a变量提升但是没有定义所以打印的是没定义的a,所以为undefined
    // var a = 3
    // function fn(){
    //     var a
    //     console.log(a);//undefined
    //      a = 4;

    // }
    // fn();
```

```js
    // 在作用域中，不管是变量还是函数，都会提升到作用域最开始的位置，不同的是，函数的提升后的位置是在变量提升后的位置之后的。

    // 举个栗子：

    // 下面的代码输出什么？

    function foo() {
    console.log(a);
    var a = 1;
    console.log(a);
    function a() {}
    console.log(a);
    }
    foo();

    // 上面的代码在js眼中是这样解析的：

    function foo() {
    var a;
    function a() {}
    console.log(a); // a()
    a = 1;
    console.log(a); // 1
    console.log(a); // 1
    }
    foo();

```

## 回调函数
1. 什么函数才是回调函数?
+ 你定义的,你没有调用,但他执行了
+ 常见的回调函数`dom事件回调函数`,`定时器回调函数`
+ ajax请求回调函数,生命周期回调函数