---
title: vue3.0(2)
---
## 起步(vite)
+ cdn引入
    `https://cdn.bootcdn.net/ajax/libs/vue/3.0.0-rc.7/vue.global.js`

+ vite
使用vite快速体验
```js
    npm init vite-app<project-name>
    cd <project-name>
    npm install
    npm run dev
```

### 新特性
## Composition API
+ Composition API为vue应用提供更好的逻辑复用和代码组织
+ 之前所有写在`data`里面的数据都可以写在`setup`里
```js
    <template>
        <div>
            <p>{{data.counter}}</p>  
        </div>
    </template>
    <script>
    import {reactive} from 'vue'
    export default {
        name:"hello word",
        props:{
            msg: String
        },
        setup(){
            const data = reactive({
                counter:2
            })
            return {data}
        }
    }
    </script>
```

