---
title: react首页
---

## 新键首页文件
+ 在`views`文件下新键`index.js`,`layout.scss``components`(里面有组件`Aside.js`),

```js

    //index.js
    import React,{Component} from "react";

    //组件
    import Aside from "./components/Aside";

    //css
    import "./layout.scss";

    //ANTD
    import { Layout } from 'antd';
    const {Header, Sider, Content} = Layout;

    class Index extends Component{
        constructor(props){
            super(props);
            this.state={};
        }
        render(){
            return (
                <Layout className="laout-wrap">
                    <Sider width="250px"><Aside/></Sider>
                    <Layout>
                        <Header className="laout-header">Header</Header>
                        <Content className="laout-main">Content</Content>
                    </Layout>
            </Layout>
            )
        }
    }
    export default Index;

```

```js

    //Aside.js
    import React,{Component}from"react";

    class Aside extends Component{
        constructor(props){
            super(props);
            this.state={};
        }
        render() {
            return <div>ssssssssssssssssssssssss</div>
        }
    }

    export default Aside;

```

## scss函数的传入适配其他浏览器


```js

    //scss里函数传入个种类浏览器监控问题(这里是因为全局已经引用了具体看前面)
    // @mixin sexy-border($color, $width) {
    //     border: {
    //       color: $color;
    //       width: $width;
    //       style: dashed;
    //     }
    //   }
    
    @mixin webkit($attr, $value) {
        -webkit-#{$attr}: $value;
        -moz-#{$attr}: $value;
        -ms-#{$attr}: $value;
        -o-box-#{$attr}: $value;
        #{$attr}: $value;

    }

    ---------------------使用-----------------------------------
    .laout-header{
        position: relative;
        z-index: 2;
        height: 75px;
        background-color: #fff;
        @include webkit(box-shadow,0 3px 16px 0 rgba(0,0,0,.1))
        // -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
    }

```



## 登录白名单

```js

    //LoginFrom.js
    //通过withRouter加工后的组件会多出一个history.props,这时就可以通过history的push方法跳转路由了,this.props.history.push("/home")
    //白名单
    import {withRouter} from "react-router-dom";


    Login(resquesData).then(response=>{
            this.setState({
                loading:true,
            })
            //路由跳转
            const data = response.data.data;
            setToken(data.token); 
            this.props.history.push("/index");
        }).catch(error=>{
            this.setState({
                loading:true,
            })
        })

    export default withRouter(LoginFrom);


```

## react储存token

+ 在app.js修改

```js

    //私有组件
    import PrivateRouter from "./components/privateRouter/index";

    render(){
        return(
          <HashRouter>
              <Switch>
                <Route exact component={Login} path="/" />   
                <PrivateRouter exact component={Index} path="/Index" />   
              </Switch>
          </HashRouter>
        )
    }

```

+ 在components文件下新建privateRouter文件下新建index.js

```js
    //components/privateRouter/index.js
    import React from "react";

    import {Redirect, Route} from "react-router-dom";

    //token
    import {getToken} from "../../utils/seession";
    const PrivateRouter = ({ component: Component, ...rest }) =>{
        return (
        <Route
            {...rest}
            render={routeProps => (
                getToken() ? <Component {...routeProps} /> :<Redirect to="/"/>
            )}
        />
        );
    }

    export default PrivateRouter;

```

+ 在新建utils文件下新建seession.js

```js

    //seession.js
    const tokenAdmin = "adminToken";

    export function setToken(value){
        sessionStorage.setItem(tokenAdmin,value)
    }

    export function getToken(value){
    return sessionStorage.getItem(tokenAdmin,value)
    }

```

## 