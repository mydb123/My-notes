---
title: day一
---
## 如何实现打开一个新页面 window.open
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

## Javascript中点击（click）事件的3种写法
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