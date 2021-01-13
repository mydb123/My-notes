---
title: react结束
---

## Reudx禁启用
+ 依赖`npm install --save redux`

```js

    import {createStore,combineReducers}from "redux";
    //Reducer其他文件
    import {config} from "./action/Config";
    import {job} from "./action/Job";

    //参数
    const config = {
        status :[
            {label:"禁用",value:false},
            {label:"启用",value:false}
        ]
    }

    //部门
    // const jobReducer =  function(state=[],action){
    //     return state
    // }

    //Reducer
    // const configReducer =  function(state=config,action){
    //     return state
    // }


    const allReducer = {
        job:job,
        config:config
    }
    // combineReducers ↑↑↑↑↑↑↑↑

    const rootReudcer = combineReducers(allReducer)
    const store = createStore(rootReudcer);

    export default store;

```

+ Config

```js

    // 其他的类似
    //Reducer
    //src\stroe\action\Config.js
    const config = {
        status :[
            {label:"禁用",value:false},
            {label:"启用",value:false}
        ]
    }

    const configReducer =  function(state=config,action){
        return state
    }
    export default configReducer;

```


+ 使用

```js

    //导入
    import Store from "@/stroe/Index"

    // console.log(Store.getstate())
    //在该有到禁启用的地方
    Store.getstate().config

```


## react-redux

+ 依赖`npm install --save react-redux`