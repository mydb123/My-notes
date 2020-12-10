---
title: react项目
---

## 安装react

1. 用管理员的权限打开命令符
2. 在输入`npm install -g create-react-app`
3. 创建项目`npx create-react-app react-admin`
+ 解决create-react-app后，运行npm run eject报错问题。
    #cd 你的项目目录
    #git init
    #git add .
    #git commit -m "saving before ejecting"
    #npm run eject
4. 安装依赖`npm install react-router-dom --save-dev`
5. 安装依赖`npm install sass-loader node-sass --save-dev`
6. 在src下新建styles文件(放css)
 
## react-dom和react-router-dom
+ 安装依赖`npm install react-router-dom --save-dev`
1. React-router提供了一些router的核心,包括Router,Route,Switch等但是他没有提供dom跳转.
2. React-router-dom提供了BrowserRouter,Router,Link,Switch等api,可以通过dom事件来控制路由.

```js
    
    //写法
    import {Switch,Route,Router,HashRouter,link} from 'react-router-dom'

    import {Switch,Route,Router} from 'react-router'
    import {HashRouterlink} from 'react-router-dom';

```

## 在src文件下创建及其基本导入使用
+ HashRouter: 使用URL中hash(#)部分去创建路由(简单的来说就是URL上会带有#号);
+ BrowserRouter: URL是指向真实的资源路径,不带#号的实际地址;
+ Switsh: <Router>在路径相同的情况下,只匹配一个,这个可以避免重复匹配;
+ exact: 精准匹配;

```js
    
    // ./views/Home.js文件
    import React from 'react';

    class Home extends React.Component{
        constructor(){
            super();
            this.state = {};
        }

        render(){
            return(
                <div>
                    <div>Home</div>
                    <div>Home</div>
                </div>
            )
        }
    }
    // 简化
    import React,{Component} from 'react';

    class Home extends Component{
        constructor(){
            super();
            this.state = {};
        }

        render(){
            return(
                
                    <div>Home</div>
                  
            )
        }
    }
    export default Home;

```

```js

     //app.js
    import React from 'react'
    import {
        HashRouter,
        Switch,
        Route
    } from "react-router-dom";

    import './App.css';
    //引用组件
    import Home from './views/Home';
    import About from './views/About';

    class App extends React.Component{
        constructor(props){
            super(props);
            this.state = {};
        }
        render(){
            return(
            <HashRouter>
                <Switch>
                <Route exact component={Home} path="/" />
                <Route  component={About} path="/about" />
                </Switch>
            </HashRouter>
            )
        }
    }

    export default App;


```


## sass
+ 安装依赖`npm install sass-loader node-sass --save-dev`
+ 到config下webpack.config.js里搜索`loader: require.resolve('file-loader')`
+ `{test: /\.scss$/,loaders: ['style-loader','css-loader','sass-loader'],},`
注意:"卸载node-sass ||| npm uninstall node-sass然后安装最新版本（5.0之前）|||   npm install node-sass@4.14.1"

```js
   
    //在到config下webpack.config.js
    //搜索sass-loader的括号后面
    //这里得再styles文件下创建main.scss文件
    .concat({
        loader:"sass-resources-loader",
        options:{
            resources:[
            //这里按照你的路径写
            path.resolve(__dirname,"./../src/styles/main.scss")
            ]
        }
    }),
    ;

```

## antd
+ 安装ui组件
+ `npm install antd --save`
+ 按需加载`npm install babel-plugin-import --save-dev`

<img :src="$withBase('/front/react/antd按需加载.jpg')">

```js

    //在到config下webpack.config.js
    ["import",{libraryName:"antd",style:"css"} ],

```
+ 优化

```js

    //为了不显示根元素的div
    import React,{Component,Fragment} from 'react';


    <Fragment>
        <div>Home</div>
        <Button type="primary">ssssssss</Button>
    </Fragment>

```