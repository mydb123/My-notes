---
title: jQuery
---
jQuery就是一个封装了很多方法的库
**引入jquery.js**
## jquery的入口函数
1. 
```js
    $(document).ready(function(){
        alert("hello")
    })
```
2. 推荐写法 
```js
     $(function(){
        alert("hello")
    });

```

## jq基础选择器

```js
    $(function(){
        $("选择器")
    })
```
|         名称              |        用法               |      描述              |
|---------------------------|---------------------------|------------------------|
|         id选择器          |         $("#id")          |       id元素           |
|         全选择器          |         $("*")            |       匹配所有元素     |
|         类选择器          |         $(".class")       |       获取同一类的元素         |
|         标签选择器        |         $("div")          |       获取同一类标签的所有元素      |
|         并集选择器        |         $("div,p,li")     |       选取多个元素         |
|         交集选择器        |         $("li.curent")    |       交集元素      |



## jq的筛选方法

|         语法              |        用法               |      声明              |
|---------------------------|---------------------------|------------------------|
|     parent()              |         $("li").parent()              |       查找父元素                           |
|     children(selector)    |         $("ul").children("li")        |       相当于$("ul>li"),最近一级(亲儿子)    |
|     find(selector)        |         $("ul").find("li")            |       相当于$("ul li"),后代选择器          |
|     siblings(selector)    |         $(".first").siblings("li")    |       查找兄弟节点,不包括自己本身          |
|      eq(index)            |         $("li").eq(index)             |       index为索引号                         |

## jq排他思想(多选一)

```js
    $(function(){
        $("button").click(function(){
            //当前的元素变化背景颜色
            $(this).css("background","pink")
            //其余的去除颜色 (隐式迭代)
            $(this).css("background","")
        })
    })
```

## 修改操作类   addClass()
```js
    //1.添加类 addClass()
    $("div").click(function(){
        $("this").addClass("current")
    })
     //1.删除类 removeClass()
    $("div").click(function(){
        $("this").removeClass("current")
    })
     //1.添加类 toggleClass()
    $("div").click(function(){
        $("this").toggleClass("current")
    })
```
## 添加属性值 prop()/attr()/data()
1. prop()
```js
    //获取固有属性例如a的href
    $(function(){
        $("a").prop()
    })
```
2. attr()
```js
    //1. 获取自定义属性
    ```js
        attr("属性")
    ```
    //2. 设置自定义属性
    ```js
        attr("属性","值")
    ```
```
3. data()
```js
    //数据缓存,存放在元素里
    $("span").data("name","kkkkkkkk")
```

## 内容文本 html()/text()/val()
1. html()`$("div").html()`
2. text()`$("div").text()`
3. val()`$("div").val()`