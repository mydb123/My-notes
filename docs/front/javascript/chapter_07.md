---
title: JS高级实战进阶教程
---

## 数据类型

1. 分类
    - 基本数据类型
        + String: 任意字符串
        + Number: 任意的数字
        + boolean: true/false
        + undefined: undefined
        + null: unll
    - 对象(引用)类型
        + Object: 任意的对象
        + Function: 一种特别的对象(函数)(可以执行)
        + Array: 一种特别的对象(数值下标,内部数据是有序的)
2. 判断
    - typeof:
        + 可以判断: undefiend/数值/字符串/布尔值
    - instanceof
        + 判断对象的具体类型
    - ===
        + 可以判断: undefined,null

```js
    // 1. 基本
    // typeof返回数据类型的字符串表达
    var a
    console.log(a,typeof a, a==="undefined",a===undefined);//undefined 'undefined' true true
    
```