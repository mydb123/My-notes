---
title: 运算符/循环
---

## 递增和递减运算符
如果需要反复给数字变量加或减去1,可以使用**递增(++)和递减(--)**运算符来完成.
在js中,递增和递减既可以放在前面也可以放在变量的后面,放在前面就是前置递增(递减),放在后面就是后置递增(递减)运算符

**注意:递增和递减运算符必须配合着变量来使用**
1. 前置递增
```js
    var num = 10
    num = num + 1;//++num
```
1. 后置递增
```js
    var num = 10
    num++; //num=num+1
    // 后置递增是先返回值在+1
```
## 比较运算符
```js
    consloe.log(3>=5); //false
    consloe.log(2<=4); //true
    consloe.log(3==5); //false
    consloe.log(10=="10"); //true 这里会默认转换数据类型
    consloe.log(10!=10); //false
    consloe.log(10===10); //true
```
## 逻辑运算符
|   运算符   |  说明  |  案例  |
|------------------|-------------------|-------------------|
|   `&&`   |  和,and  |    有一个为假结果为假    |
|   `||`   |  或,or  |      有一个为真结果为真       |
|   `!`   |  非,not  |     取反的意思       |

## 赋值运算符(重要)
```js
    num = num+2; //num +=2
```

## 三元表达式(重要)
```js
    var num =10;
    if(num>5){
        consloe.log("是的")
    }else{
        consloe.log("不是的")
    }
    num>5?"是的":"不是的" 
```

## switch使用
1. 开发当中我们经常将表达式写成变量
2. 表达式必须和value1是全等的`===`才可以
2. break 如果当前case没有break则不会推出switch继续执行下一个case
```js
    switch(表达式){
        case value1;
            // 执行语句
        break;
        case value2;
        // 执行语句
        break;
        ......
        default;
        // 执行最后语句
    }
------------------------------------------
    switch(2){
        case 1;
          consloe.log("这是1")
        break;
        case 2;
            consloe.log("这是2")
        break;
        ......
        default;
            consloe.log("没有匹配结果")
    }
```
```js
    var arrLngAndLatDoor,arrLngAndLatFloor,path1,img;
        switch(true){
        case marker.id == '#1' && p == 'assets/1.jpg':
            //切换的全景图片路径
            path1 = 'assets/6.jpg';
            arrLngAndLatDoor = []; //门上的经纬度坐标数组
            arrLngAndLatFloor = [
                {longitude:0.1,latitude:-0.20},
                {longitude:-1.55,latitude:-0.08},
                {longitude:1.4,latitude:-0.10}
            ];
            img = '';//家咋动画
            skipTo(path1,arrLngAndLatDoor,arrLngAndLatFloor,img,markerImgSrc);
        break;

        case marker.id == '#0' && p == 'assets/6.jpg':
            path1 = 'assets/1.jpg';
            arrLngAndLatDoor = [{longitude:-0.40,latitude:0.25}];
            arrLngAndLatFloor = [ 
                {longitude:0.02,latitude:-0.08},
                {longitude:0.08,latitude:-0.08},
            ];
            img = "assets/photosphere-logo.gif";
            skipTo(path1,arrLngAndLatDoor,arrLngAndLatFloor,img,markerImgSrc);
        break;
    }
```


+ 当分支比较少的时候,if....else执行比较好
+ 当分支比较多的时候,switch执行比较好,而且结构清晰

## for循环
```js
    //  for循环基本写法 
    for(var i=0;i<100;i++){
        
    }
```
1. 如何在js代码中打断点
<img :src="$withBase('/front/javascript/打断点.jpg')">
2. 双重for循环
<img :src="$withBase('/front/javascript/双重for循环.jpg')">


## for-in
通常情况下，我们可以用 for-in 来遍历一遍数组的内容，代码如下：
  
const arr = [1, 2, 3];
let index;
for(index in arr) {
    console.log("arr[" + index + "] = " + arr[index]);
}
  
一般情况下，运行结果如下：

arr[0] = 1
arr[1] = 2
arr[2] = 3



## while循环
```js
while (num<=100){
    consle.log("localhost")
    num++
}
```
<img :src="$withBase('/front/javascript/while.jpg')">

## do....while循环
<img :src="$withBase('/front/javascript/dowhile.jpg')">

## continue关键字
`continue`关键字用于跳出本次循环,继续下一个循环
<img :src="$withBase('/front/javascript/continue.jpg')">

## break 关键字
`break 关键字`用于立即跳出整个循环(循环结束)
<img :src="$withBase('/front/javascript/break.jpg')">
