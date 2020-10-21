---
title: day一
---
## 1.如何实现打开一个新页面 window.open
```js
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>origin Page</title>
</head>

<body>
    i am origin page!
    <br>
    <p>
        <a href="javascript:;" onclick="jumpPage();">window.open 打开新标签页</a>
    </p>
    <p>
        <a href="http://www.w3school.com.cn" target="_blank">html方式 打开新标签页</a>
    </p>
    <p>
        <a href="javascript:;" onclick="openRequestedPopup();">window.open 打开新的浏览器窗口</a>
    </p>
    <br>
    <script>
    window.name = "origin";

    function open_win() {
        window.open("http://www.w3school.com.cn")
    }

    function jumpPage() {
        window.open("http://www.w3school.com.cn", 'hello');
    }

    var windowObjectReference;
    var strWindowFeatures = "width=1000,height=500,menubar=yes,location=yes,resizable=yes,scrollbars=true,status=true";


    function openRequestedPopup() {
        // windowObjectReference = window.open("http://www.w3school.com.cn", "CNN_WindowName", strWindowFeatures);
        windowObjectReference = window.open("./b.html", "B_page", strWindowFeatures);
  
        setTimeout(function () {
         	//windowObjectReference.close(); // 我们页面中关闭 或进行其他操作 打开的 窗口页

         	console.log(windowObjectReference.position); // 10s 后 在origin winodw 控制台 打印 B_page 视口对象中的position 成员
         }, 10000);
    }
    </script>
</body>
</html>
```
注: window.open("","","");第一个是必填的url。第二个是可选的，有 1：_blank(在新窗口打开) ， 2：_self(在当前窗口打开) 

## 2.Javascript中点击（click）事件的3种写法
方法一: 
```js
    <!DOCTYPE html>
    <html>
    <head>
        <title>Javascript中点击事件方法一</title>
    </head>
    <body>
        <button id="btn">click</button>
        <script type="text/javascript">
            var btn = document.getElementById("btn");
            btn.οnclick=function(){
                alert("hello world");
            }
        </script>
    </body>
```
方法二：
```js
    <!DOCTYPE html>
    <html>
    <head>
        <title>Javascript中点击事件方法二</title>
    </head>
    <body>
        <button id="btn">click</button>
        <script type="text/javascript">
            var btn = document.getElementById("btn");
            btn.addEventListener('click',function(){
                alert("hello wrold");
            },false)
        </script>
    </body>
    </html>
```
方法三：
```js
    <!DOCTYPE html>
    <html>
    <head>
        <title>Javascript中点击事件方法三</title>
        <script type="text/javascript">
            function test(){
                alert("hello world");
            }
        </script>
    </head>
    <body>
        <button id="btn" οnclick="test()">click</button>
    </body>
    </html>
```

## 3.border-image边框图像的使用
1. 设置边框图片的来源  
**border-image-source**

2. 切割图片,用上右下左四刀把一个图片切成9宫格  
**border-image-slice**

3. 边框图像的宽度,如果不写默认使用盒子的边框宽.  
**border-image-width**

4. 边框图像是否平铺和拉伸
**repeat(重复)  //   stretch(拉伸)   //  round(铺满)**
`border-image-repeat`
```css
    .fu{
        width:300px;
        height:200px;
        border:20px solid red;
        /* 和img的边宽度保持一致 */
         border-width: 167px 167px 167px 167px;
        border-image-source:url("图片路径");
        border-image-slice:167 167 167 167;/*量图片的边缘显示的部分*/
        /* 一般情况设置这里的宽度和盒子每一个边的宽度一致,让盒子边框宽度跟随你这个宽度 */
        border-image-width: 167px 167px 167px 167px;
        box-sizing:border-box;
    }
```