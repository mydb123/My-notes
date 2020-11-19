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
        // setup 函数是组合api的入口函数
        setup(){
            const data = reactive({
                counter:2
            })
            return {data}
        }
    }
    </script>
```

## 业务逻辑的提取和分离
```js
    <template>
        <div>
            <ul>
                <li v-for="(item,index) in state.stus" :key="index" @click="remStu(index)" >{{item.name}}-{{item.age}}-</li>
            </ul>
        </div>
    </template>
    <script>
    import {reactive} from 'vue'
    export default {
        name:"App",
        //ref只能监听简单的数据类型变化,不能监听复杂型的变化(数组和对像)
        setup(){
            //  ref state = reactive({
            //     stus:[
            //         {id:1,name:'zs',age:22},
            //         {id:2,name:'zs',age:22},
            //         {id:3,name:'zs',age:22},
            //     ]
            // });
            // function remStu(id){
            //     state.stus = item.stus.filter((stu,i)=>idx !==index);
            // };
            let{state,remStu} = UseRemoveStudent();
            return {state,remStu}

        }
        function UseRemoveStudent(){
            ref state = reactive({
                stus:[
                    {id:1,name:'zs',age:22},
                    {id:2,name:'zs',age:22},
                    {id:3,name:'zs',age:22},
                ]
            });
            function remStu(id){
                state.stus = item.stus.filter((stu,i)=>idx !==index);
            };
            return {state,remStu}
        }
    }
    </script>
```
<img :src="$withBase('/front/vue/vue3封装.jpg')">




