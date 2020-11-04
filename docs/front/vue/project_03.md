---
title: 项目(3)
---
## tabs标签页
+ 在element-ui中看他具体用法
<img :src="$withBase('/front/vue/tabs页签.jpg')">

## 清空input触发的事件
<img :src="$withBase('/front/vue/清空数据.jpg')">

## 根据id删除商品
<img :src="$withBase('/front/vue/删除商品.jpg')">

 ## 通过编程式导航跳转页面
<img :src="$withBase('/front/vue/编程时跳转.jpg')">

## router-link的用法
1. `<router-link :to="{path:'/test',query: {name: id}}">`跳转`</router-link>`(id是参数)使用：this.$route.query.id  

2. `<router-link :to="'/test/'+id">`跳转`</router-link>`(id是参数)  

注意：router-link中链接如果是‘/’开始就是从根路由开始，如果开始不带‘/’，则从当前路由开始

## 字符串和数值的相互转换
+ 字符串转换成数值直接`-0`就可以了  

+ 数值转换为字符串直接`+''`就可以了

## 上传文件添加请求头
<img :src="$withBase('/front/vue/上传文件添加请求头.jpg')">

## 向数组中push对象
<img :src="$withBase('/front/vue/push对象.jpg')">

## 将数组转换为字符串
+ 调用数组的方法
```js
//将数组的每一项以','的方式分割
this.addFrom.join(',')
```

## Vue处理日期
<img :src="$withBase('/front/vue/时间格式处理.jpg')">

1. 需要写一个全局过滤来过滤时间格式
```js
    //在main.js
    Vue.filter('fmtdate',(v)=>{
        return moment(v).format(YYYY-MM-DD)
    })

    //安装依赖包
    npm i moment

    //导入包
    import moment from "moment"

```
```html
    <!-- 使用 -->
    <el-table-colum>
    <template slot-scope="scope">
    {{scope.row.time | fmtdate }}
    </template>
    </el-table-colum>
```

## Vue分页功能
1. @size-change--------------每页显示条数变化时触发
2. @current-change-----------当前页该变触发
3. :current-page-------------设置当前页是多少页
4. :page-sizes="[2, 4, 6, 8]"----------每页多少条的数据数组
5. :page-size="" -------------当前页显示多少条
6. total------------------总条数
5. 页面显示条数改变时发送请求刷新页面
6. 页码改变时发送请求刷新页面

