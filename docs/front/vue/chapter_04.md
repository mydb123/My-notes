---
title: Vuex
---
## Vuex的基本使用
`Vuex`就是共享一个全局数据管理
1. 安装Vuex依赖包
`npm install vuex --save`

2. 导入Vuex包
`import Vuex from 'vuex'`

`Vue.use(Vuex)`

3. 创建store对象
```js
    const store = new Vuex.Store({
        //state 中存放的就是全局共享数据
        state:{ count:0 }
    })
```
4. 将store对象挂载到 vue 实例中
```js
    new vue({
        el:"#app",
        render:h=>h(app),
        router,
        //将创建的共享数据对象,挂载到vue实例中
        //所有的组件,就可以直接从store中获取全局的数据了
        store
    })
```
## State
`State`提供唯一的公共数据源,所有的数据都要统一放到`Store`的`State`中储存
```js
  const store = new Vuex.Store({
        //state 中存放的就是全局共享数据
        state:{ count:0 }
    })
```
+ 组件中如何访问State中数据的<span style=" color: red; ">第一种方法</span>
`this.$store.state.全局数据名称 `
```js
    <template>
        <div>
            <h1>当前count值:{{$store.state.count}}</h1>
        </div>
    </template>
```
+ 组件中如何访问State中数据的<span style=" color: red; ">第二种方法</span>
```js
    //1. 从vuex中按需导入 mapState函数
    import {mapState} from 'vuex'
```
通过刚才导入的mapState函数,将当前组件需要的全局数据,映射为当前组件的computed计算属性
```js
    computed:{
        ...mapState(['count'])
    }
```
<img :src="$withBase('/front/vue/VuexMapstate.jpg')">

## Mutation
1. Mutation用于变更Store中的数据
+ 只能通过mutation变更Store数据,不可以直接操作Store的数据
+ 通过这种操作方式虽然繁琐一些,但是可以集中监控所有数据的变化.

```js
    // 定义Mutation
    const store = new Vuex.store({
        state:{
            count:0
        }
        mutations:{
            add(state){
                //变更状态
                state.count++
            }
        }
    })
```
```js
    //触发mutation
    methods:{
        handlel(){
            //触发mutation是的一种方式
            this.$store,commit('add')
        }
    }

```
<img :src="$withBase('/front/vue/mutation.jpg')">

2.  触发mutation的时候传递参数
```js
    // 定义Mutation
    const store = new Vuex.store({
        state:{
            count:0
        }
        mutations:{
            add22(state,step){
                //变更状态
                state.count+=step
            }
        }
    })
```
```js
    //触发mutation
    methods:{
        handlel2(){
            //触发mutation的时候携带参数
            this.$store,commit('add22',3)
        }
    }

```
<img :src="$withBase('/front/vue/mutation2.jpg')">

3. 触发`mutation`的<span style=" color: red; ">第二种方法</span>

+ 从Vuex中导入mapMutations函数`import {mapMutation} from 'vuex'`
+ 通过刚才的导入的mapMutations函数,将需要的mutation函数,映射为当前组件的methods方法:
```js
    // 将指定的mutation函数,映射为当前组件的methods函数
    methods:{
        ...mapMutations(['add','addN'])
    }
```
<img :src="$withBase('/front/vue/mutation3.jpg')">

## Action
Action用于处理异步操作
如果通过异步操作变更数据,必须通过Action,而不能使用Mutation,但是在Action中还是要通过触发Mutation的方式变更数据
<img :src="$withBase('/front/vue/Action.jpg')">
<img :src="$withBase('/front/vue/Action2.jpg')">

2. Action携带参数
<img :src="$withBase('/front/vue/Action携带参数.jpg')">

3. 触发action的第二种方式
<img :src="$withBase('/front/vue/action3.jpg')">

## Getter
Getter用于对Store中的数据进行加工处理形成新的数据
+ getter可以对Store中已有的数据加工处理之后形成新的数据,类似Vue的计算属性
+ Store 中数据发生变化,Getter的数据也会跟随着变化

```js
    //定义Getter
    const store = new Vuex.Store({
        state:{
            count:0
        },
        getters:{
            showNum(state) =>{
                return '当前最新的数量是['+state.count+']'
            }
        }
    })
```

1. getter的两种使用方式
```js
    <template>
        <div>
            <h1>当前count值:{{$store.getter.showNum}}</h1>
        </div>
    </template>
```
```js
     import {mapGetter} from 'vuex'
     computed:{
         ...mapGetters(['showNum'])
     }
     <template>
        <div>
            <h1>{{showNum}}</h1>
        </div>
    </template>
```
## 项目问题
+ axios是异步的所以得定义到actions
```js
    //定义
    getList(context){
        axios.get("路径").then(({data})=>{
            console.log("data")
        })
    }
```
```js
    //调用
    created(){
        this.$store.dispath("getList")
    }
```

