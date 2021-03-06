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

## js遍历对象方法 each
```js
    $("div").each(function(index,domEle){

    })
```


## jq里的map方法

```js
    /*
        第一个参数: 要遍历的数组
        第二个参数: 没遍历一个元素之后执行的回调函数
        回调函数的参数:
        第一个参数: 遍历到的元素
        第二个参数: 遍历到的元素 
        
    */
    var arr = [1,2,3,4,5];
    $.map(arr,function (value,index){
        console.log(value,index);// (1,0)(2,1)
    });

```

## trim
- $.trim()
    + 作用:去除字符串两端空格
    + 参数:需要去除空格字符串
    + 返回值:去除空格之后的字符串


## jQuery内容选择器
    
+ :empty
+ :parent
+ :contains(text)
+ :has(selector)
```js
        
    $(function (){
               
        // :empty 作用:找到既没有文本内容也没用子元素的指定元素
        var $div = $("div:empty");
        console.log($div);//div   
        
        // :parent  作用: 找到有文本内容和子元素的元素
        var $div = $("div:parent");
        
        // :contains(text) 作用: 找到指定文本的的指定元素
        var $div = $("div:contains('文本')");

        
        // :has(text) 作用: 找到指定元素的的指定元素
        var $div = $("div:has('span')"); 
       
    });

```

## attr()/removeAttr()/prop()/removeProp()

1. attr(name|pro|key.val|fn)
- 作用: 获取或者设置属性节点的值
    + 传递一个参数: 代表获取属性节点的值
    + 传递两个参数: 代表设置属性节点的值
    注意:无论找到多少个只会返回第一个
2.  removeAttr()
- 删除所有找到的属性节点

```js

    // <span class="span1" name="666"></span>
    $(function (){
        console.log($("span").attr("class"));
        console.log($("span").attr("class","boss"));
        
        console.log($("span").reomveAttr("class"));        
    });     

```

1. prop()
2. removeProp()
注意:具有 true 和false两个属性节点,如checked ,selected 或者disabled 使用prop(),其他使用attr()
```js

    // <span class="span1" name="666"></span>
    // <span class="span2" name="666"></span>
    $(function (){
        console.log($("span").eq(0).prop("demo","it666"));//eq就是选择第一个span
       
        
        console.log($("input").prop("checked"));  //true /false 
        console.log($("input").attr("checked"));  //checked /undefined   
    });     

```


## scrollTop/scrollLeft

1. scrollTop设定垂直滚动条值

```js

    $(function (){
        //获取元素
        //监听元素
        btns[0].click = function(){
            $(".css").scrollTop()
        }
    });
    // 第二个同上

```

## jQuery绑定事件
1. eventName(fn);
2. on(eventName,fn);
3. 
注意：可以添加多个事件不会覆盖

```js

    $("button").click(function (){
        alert("hello hnl");
    })

    $("button").on("click",function(){
         alert("hello hnl");
    })

```

## jQuery事件冒泡和默认行为

```js

    
    $(function (){
        // 阻止时间冒泡
        $(".son").click(function(event){
            alert("son");
            // return false;
            enent.stopPropagation()
        });

        //阻止默认行为
        $("a").click(function(event){
            alert("弹出框");
            // return false;
            enent.preventDefault()
        });
        
    });
   

```


## jQuery自定义事件

```js

    <div class="son"></div>
    $(function (){
       
        // 1. 事件必须通过on绑定
        // 2. 事件必须通过trigger来出发

       $(".son").on("myClick",function(){

           alert("son");
       });
       $(".son").trigger("myClick");
    });

```

## 事件委托

```js

    // ul>li{我是第$li}*3
    <ul>
        <li>我是第1个li</li>
        <li>我是第2个li</li>
        <li>我是第3个li</li>
    </ul>
    <button></button>
    $(function (){
       
        // 1. 事件必须通过on绑定
        // 2. 事件必须通过trigger来出发

        $("button").on("click",function(){
          $("ul").append("我是新增1个li");
        });

        $("ul").on("li","click",function(){
            console.log($(this),html())
        });

    });

```


## jQuery显示和隐藏

+ show  显示
+ hide  隐藏
+ toggle 切换

```js
    
    <button>显示</button>
    <button>隐藏</button>
    <button>切换</button>

    $(function (){
        $("button").eq(0).click(function (){
            $("div").show(1000,function(){
                alert("显示动画执行完毕")
            });
        });
        $("button").eq(1).click(function (){
             $("div").hide(1000,function(){
                alert("隐藏动画执行完毕")
            });
        });
        $("button").eq(2).click(function (){
             $("div").toggle();
        });
    })
```

## jQuery展开和收起

+ slideDown  展开
+ slideUp  收起
+ slideToggle 切换

```js
    
    <button>展开</button>
    <button>收起</button>
    <button>切换</button>
    <div></div>

    $(function (){
        $("button").eq(0).click(function (){
            $("div").slideDown(1000,function(){
                alert("展开")
            });
        });
        $("button").eq(1).click(function (){
             $("div").slideUp(1000,function(){
                alert("收起")
            });
        });
        $("button").eq(2).click(function (){
             $("div").slideToggle();
        });
    });

```

## jq实现下拉菜单

```js

    <ul class="nav">
        <li>一级菜单
            // ul.sub>li{二级菜单}
            <ul class="sub">
                <li>二级菜单</li>
                <li>二级菜单</li>
            </ul>
        </li>
    </ul>

    $(function (){
        //监听一级菜单
        $(".nav>li").click(function(){
            // 拿到二级菜单
            var $sub = $(this).childer(".sub");
            // 让二级菜单展开
            $sub.slideDwon(1000);
            //拿到所有当前非二级菜单
            var otherSub = $(this).siblings().childern(".sub");
            // 让所有的非当前全部隐藏
            otherSub.sildeUp(1000);
            // 让被点的小箭头旋转
            $(this).addClass("curent");
            //让所有未被选中的小箭头旋转
            $(this).siblings().removeClass("curent");
        })


        // 简写
        // $(".ad").slideDwon(1000,function(){
        //     $(".ad").fadeOut(1000,function(){
        //         $(".ad").fadeIn(1000);
        //     })
        // })

        $(".ad").slideDwon(10000).fadeOut(1000).fadeIn(1000);
    });

```

