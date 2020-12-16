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