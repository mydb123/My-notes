---
title: 数组/函数
---
## 创建数组
+ **var 数组名 = new Array()** //创建了一个arr空数组
+ **var arr = []**;

## 数组的遍历for/forEach()/map()
1. for
<img :src="$withBase('/front/javascript/数组的遍历.jpg')">

2. forEach（）遍历对象类型数组
```js
// arr.forEach( function(item){
//             console.log(item)
//         } )
const arr = [
    {id:1,name:'zhangsan'},
    {id:2,name:'lisi'},
    {id:3,name:'wangwu'}
]

arr.forEach( function(item){
            console.log(item.id + '---' +  item.name)
})
// 输出结果：
// 1-----zhangsan
// 2-----lisi
// 3-----wangwu
```
2. map()方法

```js
    var newArr = arr.map( function(value,index){
        console.log(value + '---' + index)    
        return value + 10		
        })		
        console.log(newArr)

```

```js

    
    var array1 = [1,4,9,16];
    const map1 = array1.map(x => x *2);
    console.log(map1);
    // > Array [2,8,18,32]

    // 而我这样写时：
    var array1 = [1, 4, 9, 16];
 
    const map1 = array1.map(x => {
        if (x == 4) {
            return x * 2;
        }
    });
    
    console.log(map1);
    // > Array [undefined, 8, undefined, undefined]
    // 为什么会出现三个undefined呢？而不是我预期的[1,8,9,16]。

    // 这样写只是增加了一个条件，即x的值为4时才乘以2，之所以会出现undefined，是因为map()方法创建了一个新数组，但新数组并不是在遍历完array1后才被赋值的，而是每遍历一次就得到一个值。所以，下面这样修改后就正确了：
    
    var array1 = [1, 4, 9, 16];
    
    const map1 = array1.map(x => {
        if (x == 4) {
            return x * 2;
        }
        return x;
    });
    
```

## 新增数组元素

```js
    var arr =  ["aaa","bbb","ccc"];
    arr[3] = "ddd";
    // 这样可以追加数组
```

## 函数

声明函数
```js
    function kkk(){
        conslole.log("hi~~")
    }
    kkk()
```

## 函数传参
```js
    function kk(num1,num2){
        consloe.log(num1+num2)
    }
    kk(1,2)
```
## 函数返回值return
<img :src="$withBase('/front/javascript/函数返回值.jpg')">


## 向一个数组里push数组
```js
    var showData2 = res[1].data.data.rows;//请求的新数组
	this.showData.push(...showData2);//向showData数组push添加数据
```


## 改变原数组的方法(9个)

```js
    
    let a = [1,2,3];
    ES5:
     a.splice()/ a.sort() / a.pop()/ a.shift()/  a.push()/ a.unshift()/ a.reverse()
    ES6:
    a.copyWithin(); / a.fill

```

- splice() 添加/删除数组元素
    + index：必需。整数。howmany：可选。要删除的项目数量。如果设置为 0，则不会删除项目。item1, ..., itemX： 可选。向数组添加的新项目。

```js
    
    let a = [1, 2, 3, 4, 5, 6, 7];
    let item = a.splice(0, 3); // [1,2,3]
    console.log(a); // [4,5,6,7]
    // 从数组下标0开始，删除3个元素
    let item = a.splice(-1, 3); // [7]
    // 从最后一个元素开始删除3个元素，因为最后一个元素，所以只删除了7

```

- sort() 数组排序

```js
    
     var array =  [10, 1, 3, 4,20,4,25,8];
     // 升序 a-b < 0   a将排到b的前面，按照a的大小来排序的 
     // 比如被减数a是10，减数是20  10-20 < 0   被减数a(10)在减数b(20)前面   
     array.sort(function(a,b){
       return a-b;
     });
     console.log(array); // [1,3,4,4,8,10,20,25];
     // 降序 被减数和减数调换了  20-10>0 被减数b(20)在减数a(10)的前面
     array.sort(function(a,b){
       return b-a;
     });
     console.log(array); // [25,20,10,8,4,4,3,1];

```

- pop() 删除一个数组中的最后的一个元素

- shift() 删除数组的第一个元素

- push() 向数组的末尾添加元素

```js

    let  a =  [1,2,3];
    let item = a.push('末尾');  // 4
    console.log(a); // [1,2,3,'末尾']

```

- reverse() 颠倒数组中元素的顺序

- ES6: copyWithin() 指定位置的成员复制到其他位置
    + target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
    + start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
    + end（可选）：到该位置前停止读取数据，默认等于数组长度。使用负数可从数组结尾处规定位置。
```js

    // -2相当于3号位，-1相当于4号位
    [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
    // [4, 2, 3, 4, 5]
    var a=['OB1','Koro1','OB2','Koro2','OB3','Koro3','OB4','Koro4','OB5','Koro5']
    // 2位置开始被替换,3位置开始读取要替换的 5位置前面停止替换
    a.copyWithin(2,3,5)
    // ["OB1","Koro1","Koro2","OB3","OB3","Koro3","OB4","Koro4","OB5","Koro5"] 

```

## 不改变原数组的方法(8个):

```js

    ES5：
    slice、join、toLocateString、toStrigin、cancat、indexOf、lastIndexOf、
    ES7：
    includes

```

- slice() 浅拷贝数组的元素
    + 字符串也有一个slice() 方法是用来提取字符串的，不要弄混了。

```js
    
    let a= ['hello','world'];
    let b=a.slice(0,1); // ['hello']
    a[0]='改变原数组';
    console.log(a,b); // ['改变原数组','world'] ['hello']
    b[0]='改变拷贝的数组';
     console.log(a,b); // ['改变原数组','world'] ['改变拷贝的数组']

```

- join() 数组转字符串

```js
    
    let a= ['hello','world'];
    let str=a.join(); // 'hello,world'
    let str2=a.join('+'); // 'hello+world'

```

- toLocaleString() 数组转字符串 / toString() 数组转字符串 不推荐

```js

   let b= [ 'toString','演示'].toString(); // toString,演示
   let a= ['调用toString','连接在我后面']+'啦啦啦'; // 调用toString,连接在我后面啦啦啦

```

- cancat 方法用于合并两个或多个数组，返回一个新数组。

```js

    let a = [1, 2, 3];
    let b = [4, 5, 6];
    //连接两个数组
    let newVal=a.concat(b); // [1,2,3,4,5,6]
    // 连接三个数组
    let c = [7, 8, 9]
    let newVal2 = a.concat(b, c); // [1,2,3,4,5,6,7,8,9]
    // 添加元素
    let newVal3 = a.concat('添加元素',b, c,'再加一个'); 
    // [1,2,3,"添加元素",4,5,6,7,8,9,"再加一个"]
   // 合并嵌套数组  会浅拷贝嵌套数组
   let d = [1,2 ];
   let f = [3,[4]];
   let newVal4 = d.concat(f); // [1,2,3,[4]]

```

- indexOf() 查找数组是否存在某个元素，返回下标

```js

    let a=['啦啦',2,4,24,NaN]
    console.log(a.indexOf('啦'));  // -1 
    console.log(a.indexOf('NaN'));  // -1 
    console.log(a.indexOf('啦啦')); // 0

```