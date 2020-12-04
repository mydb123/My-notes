---
title: Ajax
---

## ajax工具函数封装
+ get请求
+ 封装思路->重复代码写出来->不能固定的 作为 参数 
```js
    function get(){
        //创建异步对象
        var xhr = new XMLHttpRequest();

        //请求行
        xhr.open('get','xxx.php?key1 = val1&key2=value2');

        //请求头(get可以省略)
        
        //回调函数
        xhr.onreadystatechange = function (){
            if(xhr.readyState==4&&xhr.status ==200){
                //普通字符串
                console.log(xhr.responseText);
                //JSON
                console.log(JSON.parse(xhr.responseText));
                //XML
                console.log(xhr.responseXML);
            }
        }

        // 请求主体 发送
         xhr.send(null)
    }

// 封装--------------------------------------------------------------
    /**
    *   @param{*} url  
    *   @param{*} data (key1=value&key2=value2)
    *   @param{*} success 
    **/
     function get(url,data,success){
        //创建异步对象
        var xhr = new XMLHttpRequest();

        //请求行
        if(data){
            url+'?';
            url+=data
        }
        xhr.open('get',url);
        
        //请求头(get可以省略)
        //回调函数
        xhr.onreadystatechange = function (){
            if(xhr.readyState==4&&xhr.status ==200){
                //调用 传入的 回调函数
                success(xhr.responseText);
            }
        }

        // 请求主体 发送
        xhr.send(null)
    }

```
+ post请求
```js
    function post(url,data,success){
        //创建异步对象
        var xhr = new XMLHttpRequest();

        //请求行
        xhr.open('get',url);

        //请求头(get可以省略)
        //有数据才设置
       if(data){
           xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');    
       }
        //回调函数
         xhr.onreadystatechange = function (){
            if(xhr.readyState==4&&xhr.status ==200){
                //调用 传入的 回调函数
                success(xhr.responseText);
            }
        }

        // 请求主体 发送
        xhr.open(data);   
    }
```

## jq的ajax实现注册案例
<img :src="$withBase('/front/jquery/请求.jpg')">


## jq的ajax基本使用

<img :src="$withBase('/front/jquery/请求基本.jpg')">
