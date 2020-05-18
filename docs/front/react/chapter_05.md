---
title: class关键字
---
## 第二种创建组件的方式
> class关键字创建组件   
> ES6中class关键字,是实现面向对象编程的新形式
1. 创建一个动物类
```js
  class Animal(){
    //这是类中的 构造函数
    //每一个类中,都有一个构造器,如果我们程序员没有手动定义构造器,那么,可以认为内部有一个隐形的,看不见的空构造器
    //类似于constructor(){}
    //构造器的作用,就是每当new这个类的时候,必须优先执行,构造器中的代码
    constructor(name,age){
      this.a = name;
      this.b = age
    }
  }
  const p1= new Animal('大黄',11)
  //console.log(p1.a) //实例属性
  //console.log(p1.a) //实例属性

```
2. [静态属性]:通过构造函数,直接访问的属性,叫做静态属性
    
  ```md
    在class内部,通过static 修饰的属性, 就是静态属性,在于**constructor**平级
    **static** info = "eee"
    console.log(Animal.info) //info是Animal的静态属性
  ```

## class子类继承父类
```js
    //这是父类[这里可以把这个父类比成原型对象上prototype]

    class Person(){
         constructor(a,b){
            this.name = a
            this.age = b
        }
    }

    //这里是美国人
    //在 class 类中,可以使用extends 关键字,实现子类继承父类
    //语法 class子类extends父类{}
    class American extends person{
        // constructor(a,b){
        //     this.name = a
        //     this.age = b
        // }

    }
    const a1 = new American('jack',20)
    console.log(a1)
    
    //这里是中国人
    class Chinese(){
        // constructor(a,b){
        //     this.name = a
        //     this.age = b
        // }
    }
    const a2 = new Chinese('张三',18)
    console.log(a2)
```