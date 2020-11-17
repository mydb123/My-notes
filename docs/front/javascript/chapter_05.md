---
title: set数据结构
---

## set数据结构
+ set数据结构自动去重
```js
    const set =  new Set();
    console.log(set.size);//0

    const set2 = new Set(["a","b"]);
    console.log(set2.size);//2

    const set3 = new Set(["a","b","a","b"]);
    console.log(set3.size)://2

    var ary = [...set3]
    console.log(ary)://2

```