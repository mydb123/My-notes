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


## 侧边栏

+ 在`components`文件下新键`asideMneu`文件下新键`index.js`

```js

    //侧边栏部分
    import React,{Component,Fragment}from"react";

    import { Link } from "react-router-dom";

    //ANTD
    import {  UserOutlined } from '@ant-design/icons';

    import {Menu } from "antd";
    //路由

    import Router from "../../router/index"

    const {SubMenu} = Menu;

    class AsideMenu extends Component{
        constructor(props){
            super(props);
            this.state={};
        };

        //无子级菜单处理
        babaMenu = ({title,key}) =>{
            return (
                <Menu.Item key={key}>
                    <Link to={key}><span>{title}</span></Link>
                </Menu.Item>
            )
        }

        //子级菜单处理
        sunMenu = ({title,key,child}) =>{
            return (
                <SubMenu key={key} icon={<UserOutlined />} title={title}>
                    {
                        child && child.map(item =>{
                            return  item.child && item.child.length > 0 ? this.sunMenu(item) : this.babaMenu(item);
                        })
                    }
                </SubMenu>
            )
        }
        render() {
            return (
                <Fragment>
                
                    <Menu 
                    theme="dark" 
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height:'100%',borderRight:0}}
                    >
                        {console.log(Router)}

                        {
                            Router && Router.map(firstItem =>{

                                return firstItem.child && firstItem.child.length > 0 ? this.sunMenu(firstItem) : this.babaMenu(firstItem);

                            })                    
                        }
                        
                    </Menu>
                </Fragment>
            )
        }
    }
    export default AsideMenu;

```

+ 在`views`/`index`/`components`/`aside.js`导入上面的文件,在`views`/`index`/`index.js`导入这个文件`aside.js`


## 用户列表/添加用户

+ 创建文件:在`components`文件下新建`containerMain`/`Index.js`

```js

    //components/containerMain/Index.js
    import React from 'react'
    import {HashRouter,Switch,Route} from "react-router-dom";

    //组件导入
    import User from "../../views/user/Index";
    import UserAdd from "../../views/user/Add";

    // 导入验证token
    import PrivateRouter from "../privateRouter/index";

    class ContainerMain extends React.Component{
        constructor(props){
            super(props);
            this.state = {};
        }
        render(){
            return(
                <Switch>
                    <PrivateRouter exact path="/index/user/list"  component={User}  />   
                    <PrivateRouter exact path="/index/user/add"  component={UserAdd}  />   
                </Switch>
            
            )
        }
    }

    export default ContainerMain;

    //注意这里的exact,父级不能加exact
```

+ 在`views`文件下新建`user`创建`Add.js`和`Index.js`并导出
+ 在`views/index/index`导入


```js

    import ContainerMain from "../../components/containerMain/Index";

     <Content className="laout-main">
        <ContainerMain />
    </Content>

```




## 界面优化(菜单栏的展开与高亮)

# WithRouter
+ 将`react-router`的`history,location,match`,三个对象传入**props**对象上

```js
    //components/asideMneu/index.js
    //在react-router-dom导入WithRouter
    import { Link,withRouter } from "react-router-dom";

    //再通过`componentDidMount`生命周期,在这里多一层接口请求,`console.log(this.props);`就可以获得地址栏的路径

     //生命周期,在这里多一层接口请求,并过滤路由
    componentDidMount(){
        // console.log(this.props);
        const pathname = this.props.location.pathname;
        const menuKey  = pathname.split("/").slice(0,3).join("/")
        // console.log(pathname.split("/"));
        //根据.split("/")中"/"分割成数组,在用`.slice(0,3)`索引为0,截取三个,在用`join("/")`以/的方式转为字符串
        // console.log(pathname.split("/").slice(0,3).join("/"));

        this.setState({
            selectedKeys: [pathname],
            openKeys    : [menuKey]
        })
    }

    //导入的时候进行包裹
    export default withRouter(AsideMenu);

```

```js

    //components/asideMneu/index.js
    import { Link,withRouter } from "react-router-dom";

    constructor(props){
        super(props);
        this.state={
            selectedKeys:[], //当前选中的菜单项
            openKeys: [], //当前展开的 SubMenu 菜单项
        };
    };

    //生命周期,在这里多一层接口请求,并过滤路由
    componentDidMount(){
        // console.log(this.props);
        const pathname = this.props.location.pathname;
        const menuKey  = pathname.split("/").slice(0,3).join("/")
        // console.log(pathname.split("/"));
        //根据.split("/")中"/"分割成数组,在用`.slice(0,3)`索引为0,截取三个,在用`join("/")`以/的方式转为字符串
        // console.log(pathname.split("/").slice(0,3).join("/"));
       
        const menuHigh = {
            selectedKeys: pathname,
            openKeys    : menuKey,
        }
       this.selectMenuHigh(menuHigh);
    }

    /** 选择菜单 */
    selectMenu = ({ item, key, keyPath, domEvent }) => {
        const menuHigh = {
            selectedKeys: key,
            openKeys    : keyPath[keyPath.length - 1]
        }
        this.selectMenuHigh(menuHigh);
    }

    /** 菜单高亮 */

    selectMenuHigh = ({selectedKeys,openKeys}) => {
        this.setState({
            selectedKeys: [selectedKeys],
            openKeys    : [openKeys]
        })
    }
    /** 展开菜单项 */
    openMenu = (openkeys) =>{
        console.log(openkeys);
        this.setState({
            openKeys : [openkeys[openkeys.length - 1 ]]
        })
    }

    render() {
        const {selectedKeys,openKeys}= this.state; 
        return (
            <Fragment>
                <Menu 
                onOpenChange = {this.openMenu}
                onClick={this.selectMenu}
                theme="dark" 
                mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                style={{height:'100%',borderRight:0}}
                >
                    {
                        Router && Router.map(firstItem =>{

                            return firstItem.child && firstItem.child.length > 0 ? this.sunMenu(firstItem) : this.babaMenu(firstItem);

                        })                    
                    }
                    
                </Menu>
            </Fragment>
        )
    }

    export default withRouter(AsideMenu);

```

## 显示隐藏侧边栏

```js


    //views\index\Index.js
    import React,{Component} from "react";

    //组件
    import LayoutAside from "./components/aside";
    import LayoutHeader from "./components/header";
    import ContainerMain from "../../components/containerMain/Index";

    //css
    import "./layout.scss";

    //ANTD
    import { Layout } from 'antd';

    const {Header, Sider, Content} = Layout;

    class Index extends Component{
        constructor(props){
            super(props);
            this.state={
                collapsed: false,
            };
        }

        componentDidMount(){
            const collapsed = JSON.parse(sessionStorage.getItem("collapsed"));
            this.setState({  collapsed });
        }

        toggleCollapsed = () =>{
            const collapsed = !this.state.collapsed;
            this.setState({  collapsed });
            sessionStorage.setItem("collapsed",collapsed);

        }
        render(){
            return (
                <Layout className="laout-wrap">
                    <Header className="laout-header" ><LayoutHeader toggle = {this.toggleCollapsed} collapsed={this.state.collapsed}/></Header>
                    <Layout>
                        <Sider width="250px" collapsed={this.state.collapsed}><LayoutAside/></Sider>
                        <Content className="laout-main">
                            <ContainerMain />
                        </Content>
                    </Layout>
            </Layout>
            )
        }
    }
    export default Index;


```

```css

    /* src\views\index\components\aside.scss */
    .logo{
        float: left;
        width: 250px;
        height: 75px;
        margin-left: -50px;
        align-items: center;
        justify-content: center;
        background-color: #001529;
        -webkit-transition: all .2s ease 0s;
        -moz-transition: all .2s ease 0s;
        -ms-transition: all .2s ease 0s;
        -o-transition: all .2s ease 0s;
        transition: all .2s ease 0s;
        span{
            // display: block;
            width: 177px;
            height: 47px;
            background-color: #1a2d3f;
        }
        
    }
    .collapsed-close{
        
        .logo{
            width: 80px;
            span{
                width: 100%;
            }
        }
        .header-wrap{
            margin-left: 65px;
        }
    }
    .header-wrap{
        -webkit-transition: all .2s ease 0s;
        -moz-transition: all .2s ease 0s;
        -ms-transition: all .2s ease 0s;
        -o-transition: all .2s ease 0s;
        transition: all .2s ease 0s;
        margin-left: 230px;
        .header-icon{
            font-size: 24px;
            cursor: pointer;
        }
    }

```

```js

    //\views\index\components\header.js
    import React,{Component} from"react";

    //AnTd 
    import {AppstoreTwoTone } from '@ant-design/icons'
    //css
    import "./aside.scss";


    class Header extends Component{
        constructor(props){
            super(props);
            this.state={
                collapsed: props.collapsed
            };
        }

        //生命周期,监听父级props的值变化
        componentWillReceiveProps({collapsed}){
            console.log(collapsed);
            this.setState({
                //这里接受的参数和使用的值一样就可以写一个
                collapsed
            })
            
        };
        toggleMen = ()=>{
            this.props.toggle();
        }
        render() {
            const {collapsed} =this.state
            return (
                <div className={collapsed ? "collapsed-close" :""}>
                    <h1 className="logo"><span>LOgo</span> </h1>
                    <div className="header-wrap">
                        <span className="header-icon" onClick={this.toggleMen}><AppstoreTwoTone /></span>
                    </div>
                </div>
            )
        }
    }
    export default Header;

```