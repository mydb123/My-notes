---
title: vue3.0
---
## 初始化项目
1. 安装vue-cli3
```bash
    npm install -g @vue/cli
    # OR
    yarn global add @vue/cli
```
2. 创建项目
```bash
    vue create my-project
    # OR
    vue ui
```
3. 在项目中安装 `composition-api` 体验 vue3 新特性
```bash
    npm install @vue/composition-api --save
    # OR
    yarn add @vue/composition-api
```
4. 在使用任何 `@vue/composition-api` 提供的能力前，必须先通过 `Vue.use()` 进行安装
```bash
    import Vue from 'vue'
    import VueCompositionApi from '@vue/composition-api'

    Vue.use(VueCompositionApi)
```

## setup
`setup` 函数会在 `beforeCreate` 之后、`created` 之前执行

1. 接收props数据
<img :src="$withBase('/front/vue/vue3.0(steup).jpg')">
<img :src="$withBase('/front/vue/vue3.0(steup2).jpg')">

2. context
`setup` 函数的第二个形参是一个上下文对象，这个上下文对象中包含了一些有用的属性，这些属性在 `vue 2.x` 中需要通过 `this` 才能访问到，在 `vue 3.x` 中，它们的访问方式如下：
**注意:在 setup() 函数中无法访问到 this**
```js
    const MyComponent = {
    setup(props, context) {
        context.attrs
        context.slots
        context.parent
        context.root
        context.emit
        context.refs
        }
    }
```
## reactive
`reactive()` 函数接收一个普通对象，返回一个响应式的数据对象。
1. 基本语法
等价于 `vue 2.x` 中的 Vue.observable() 函数，`vue 3.x` 中提供了 `reactive()` 函数，用来创建响应式的数据对象，基本代码示例如下：
```js
    import { reactive } from '@vue/composition-api'

    // 创建响应式数据对象，得到的 state 类似于 vue 2.x 中 data() 返回的响应式对象
    const state = reactive({ count: 0 })
```
## 定义响应式数据供 template 使用
1. 按需导入 reactive 函数：
```js
    import { reactive } from '@vue/composition-api'
```
2. 在 setup() 函数中调用 reactive() 函数，创建响应式数据对象：
```js
    setup() {
     // 创建响应式数据对象
    const state = reactive({count: 0})

     // setup 函数中将响应式数据对象 return 出去，供 template 使用
    return state
}
```
3. 在 template 中访问响应式数据：
```html
    <p>当前的 count 值为：{{count}}</p>
```
## ref
`ref()` 函数用来根据给定的值创建一个**响应式**的**数据对象**，`ref()` 函数调用的返回值是一个对象，这个对象上只包含一个 .value 属性：
```js
    import { ref } from '@vue/composition-api'

    // 创建响应式数据对象 count，初始值为 0
    const count = ref(0)

    // 如果要访问 ref() 创建出来的响应式数据对象的值，必须通过 .value 属性才可以
    console.log(count.value) // 输出 0
    // 让 count 的值 +1
    count.value++
    // 再次打印 count 的值
    console.log(count.value) // 输出 1
```
## 在 template 中访问 ref 创建的响应式数据
1. 在 setup() 中创建响应式数据
```js
    import { ref } from '@vue/composition-api'

    setup() {
        const count = ref(0)

        return {
            count,
            name: ref('zs')
        }
    }
```
2. 在 template 中访问响应式数据：
```js
    <template>
    <p>{{count}} --- {{name}}</p>
    </template>
```
##  在 reactive 对象中访问 ref 创建的响应式数据
当把 `ref()` 创建出来的响应式数据对象，挂载到 `reactive()` 上时，会自动把响应式数据对象展开为原始的值，不需通过 `.value` 就可以直接被访问，例如：
```js
    const count = ref(0)
    const state = reactive({
    count
    })

    console.log(state.count) // 输出 0
    state.count++ // 此处不需要通过 .value 就能直接访问原始值
    console.log(count) // 输出 1
```
注意：新的 ref 会覆盖旧的 ref，示例代码如下：
```js
    // 创建 ref 并挂载到 reactive 中
    const c1 = ref(0)
    const state = reactive({
    c1
    })

    // 再次创建 ref，命名为 c2
    const c2 = ref(9)
    // 将 旧 ref c1 替换为 新 ref c2
    state.c1 = c2
    state.c1++

    console.log(state.c1) // 输出 10
    console.log(c2.value) // 输出 10
    console.log(c1.value) // 输出 0
```

## isRef
`isRef()` 用来判断某个值是否为 ref() 创建出来的对象；应用场景：当需要展开某个可能为 ref() 创建出来的值的时候，例如：
```js
    import { isRef } from '@vue/composition-api'

    const unwrapped = isRef(foo) ? foo.value : foo
```
## toRefs
`toRefs()` 函数可以将 `reactive()` 创建出来的响应式对象，转换为普通的对象，只不过，这个对象上的每个属性节点，都是 `ref()` 类型的响应式数据，最常见的应用场景如下：
<img :src="$withBase('/front/vue/torefs.png')">

## computed
computed() 用来创建计算属性，computed() 函数的返回值是一个 ref 的实例。使用 computed 之前需要按需导入：
```js
    import { computed } from '@vue/composition-api'
```
1. 在调用 computed() 函数期间，传入一个 function 函数，可以得到一个只读的计算属性，示例代码如下：
```js
    // 创建一个 ref 响应式数据
    const count = ref(1)

    // 根据 count 的值，创建一个响应式的计算属性 plusOne
    // 它会根据依赖的 ref 自动计算并返回一个新的 ref
    const plusOne = computed(() => count.value + 1)

    console.log(plusOne.value) // 输出 2
    plusOne.value++ // error
```
2. 创建可读可写的计算属性
在调用 computed() 函数期间，传入一个包含 get 和 set 函数的对象，可以得到一个可读可写的计算属性，示例代码如下：
```js
    // 创建一个 ref 响应式数据
    const count = ref(1)

    // 创建一个 computed 计算属性
    const plusOne = computed({
    // 取值函数
    get: () => count.value + 1,
    // 赋值函数
    set: val => {
        count.value = val - 1
    }
    })

    // 为计算属性赋值的操作，会触发 set 函数
    plusOne.value = 9
    // 触发 set 函数后，count 的值会被更新
    console.log(count.value) // 输出 8
```