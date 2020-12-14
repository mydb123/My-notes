---
title: react登录注册
---

## 函数的定义方式

1. 箭头函数

<img :src="$withBase('/front/react/箭头函数1.jpg')">

```js

    tableHeader = () =>{};
    this.tableHeader

    (data)=>{this.handleClick}

```

<img :src="$withBase('/front/react/箭头函数2.jpg')">



2. 构造器内部声明

<img :src="$withBase('/front/react/构造函数创建.jpg')">

```js

    this.tableHeader = this.tableHeader.bind(this);


    //react里的写法
```

3. bind绑定

<img :src="$withBase('/front/react/bain绑定.jpg')">


```js

    clickHandle(){}

    this.handLoginClick.bind(this);

```


## 去迟严格模式和注意事项

```js

    //index.js

    <React.StrictMode>
    <App />
  </React.StrictMode>,

    //   改为
    ReactDOM.render(<App />,document.getElementById('root'));


```

注意: react里面的class得换成className;


## 登录注册组件化

<img :src="$withBase('/front/react/登录注册组件化.jpg')">

```js

    // index.js文件

        import React, { Component } from "react";
    //css
    import "./index.scss";

    //组件
    import LoginFrom from "./LoginFrom";
    import RegisterFrom from "./RegisterFrom";

    class Login extends Component {
        constructor() {
            super();
            this.state = {
                formType:"login"
            };
            
        }
        switchFrom = (value)=>{
            this.setState({
                formType: value
            })
        }
        render() {
            return (
                <div className="form-wrop">
                    <div>
                        {
                        this.state.formType === "login" 
                        ? <LoginFrom switchFrom={this.switchFrom} ></LoginFrom>
                        : <RegisterFrom switchFrom={this.switchFrom}></RegisterFrom> }
                    </div>
                </div>
            )
        }
    }

    export default Login;

```

************************

```js

    //LoginFrom.js文件

    import React, { Component,Fragment } from "react";
    
    // ANTD
    import { Form, Input, Button,Row, Col } from 'antd';
    import { UserOutlined,LockOutlined  } from '@ant-design/icons';

    //css
    import "./index.scss";

    class LoginFrom extends Component {
        constructor() {
            super();
            this.state = {};
        };

        onFinish = (values) => {
            console.log('Received values of form: ', values);
        };

        toggleForm = () =>{
            // 去调用父级方法
            this.props.switchFrom("register");
            alert(333);
        }

        render() {
            return (
            <Fragment>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={ this.toggleForm} >账号注册</span>
                </div>
                <div className="form-content">
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={() => this.onFinish}
                    >
                        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
                        </Form.Item>
                        <Form.Item name="code" rules={[{ required: true, message: 'Please input your code!' }]}>
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Code" />
                            </Col>
                            <Col span={9}>
                                <Button type="danger" block>获取验证码</Button>
                            </Col>
                        </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block> 登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
            )
        }
    }

    export default LoginFrom;

```

## 跨域使用的配置

+ 安装依赖`npm i http-proxy-middleware`;
+ 新键文件在src文件下新键`setupProxy.js`
+ 修改config文件下paths.js文件里`proxySetup: resolveApp`('src/setupProxy.js'),
+ 安装axios,`npm install axios -S`
+ 新键文件在utils里新键`requets.js`(请求拦截器);

```js
    //  utils/requets.js
    // 项目所有的请求拦截器

    import axios from "axios";

    //第一步:创建实例
    const service = axios.create({
        baseURL: '/devApi', //因为通过跨域去解决了所有这里留空
        timeout: 5000,
    });

    //第二部: 请求拦截
    service.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });


    //第三步: 响应拦截

    service.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    export default service;
```

```js

    //setupProxy.js
    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app){
        app.use(createProxyMiddleware("/devApi",{
            target:"http://www.web-jshtml.cn/api/react",//配置你需要的服务器地址
            changeOrigin:true,
            pathRewrite:{
                "^/devApi":"",
            },
        }))
        // app.use(proxy("/mangen/api",{
        //     target:"http://admintest.happymmall.com:7000",//配置你需要的服务器地址
        //     changeOrigin:true,
        // }))
    };

```

## 测试请求
+ 新键文件api/`account.js`.

```js

    import service from "../../src/utils/requets";

    /**
    * 登录接口
    */
    export function Login(data){
        return service.request({
            url:"/login/",
            method:"post",
            data, //请求了类型为post时
            //params:data //请求类型为get时候
        })
    };

    //LoginFrom.js
    //API
    import {Login} from "../../api/account";
     onFinish = (values) => {
        Login().then(response=>{
            console.log(response);
        }).catch(error=>{

        })
    };

```

## 环境变量
+ 安装依赖`npm install - g dotenv-cli`;
+ 新键三个文件在项目下`.env.development`,`.env.production`,`env.test`;

```js

    //.env.development
    REACT_APP_API = "/devApi"

```

+ 环境变量的配置

```js

    //requets.js
    const service = axios.create({
        baseURL: process.env.REACT_APP_API, //因为通过跨域去解决了所有这里留空
        timeout: 5000,
    });
```


```js
    
    //package.json
    // 搜索scripts添加以下内容
    //等到最好再说现在不加

    // "build:dev": "dotenv -e .env.development react-app-rewired buid",
    // "build:pro": "dotenv -e .env.production react-app-rewired buid",
    // "build:test": "dotenv -e .env.test react-app-rewired buid"
```

*******************************

```js

    //跨域
    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app){
        app.use(createProxyMiddleware([process.env.REACT_APP_API],{
            target: process.env.REACT_APP_BASE_URL ,//配置你需要的服务器地址
            changeOrigin:true,
            pathRewrite:{
                [`^${process.env.REACT_APP_API}`]:""
            },
        }))
        // app.use(proxy("/mangen/api",{
        //     target:"http://admintest.happymmall.com:7000",//配置你需要的服务器地址
        //     changeOrigin:true,
        // }))
    };

```



## 验证码

+ 添加接口

```js

    //  src/api/account.js
    /**
    * 验证码接口
    */
    export function GetCode(data){
        return service.request({
            url:"/getSms/",
            method:"post",
            data, //请求了类型为post时
        })
    }

```

+ 登录页面

1. 第一种写法

```js

    //  src/views/login/LoginFrom.js
    import { Form, Input, Button,Row, Col,message } from 'antd';// ANTD
    import {Login,GetCode} from "../../api/account";//API

    constructor() {
        super();
        this.state = {
            username:"",
        };
        //react没有双向数据绑定的概念,v-model这个Vue的
    };

     // input输入处理
    inputChange = (e) =>{
        let value = e.target.value
        // 更新input输入框的值给上面state的username
        this.setState({
            username: value,
        })
    }

    //获取验证码
    getCode = () =>{
        if(!this.state.username){
            message.warning('用户名不能为空',1);
            return false;
        }
        const responseData = {
            username:this.state.username,
            modile:"login"
        }
        GetCode(responseData).then(response =>{
            console.log(response);
        }).catch(error =>{
            
        })
    };

   
    render() {
        const {username,code_button_disabled} = this.state
        return (
            <Fragment>
                <Input value={username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                <Button type="danger" block onClick={this.getCode}>获取验证码</Button>

            </Fragment>
        );

```

+ 第二种方法(难但是页面效果好看)

```js

    //  src/utils/validate.js
    const reg_email= /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    export function validate_email(value){
        return reg_email.test(value);
    }

    //  src/views/login/LoginFrom.js

    // import {validate_email} from "../../utils/validate";
    constructor() {
        super();
        this.state = {
            username:"",
            // code_button_disabled : true
        };
        //react没有双向数据绑定的概念,v-model这个Vue的
    };


    const {username,code_button_disabled} = this.state;
    // const _this = this;//this指向问题
     <Form.Item name="username" rules={
        [
            { required: true, message: '邮箱不能为空' },
            { type: "email", message: '邮箱格式不正确' },
            // ({ getFieldValue }) => ({
            //     validator(rule, value) {
            //         if(validate_email(value)){
            //             _this.setState({
            //                 code_button_disabled : false
            //             })
            //             return Promise.resolve();
            //         }
            //       if (!value || getFieldValue('password') === value) {
                    
            //       }
            //       return Promise.reject('The two passwords that you entered do not match!');
            //     },
            // }),
        ]
    }>
        <Input value={username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
    </Form.Item>
    {/* <Button type="danger" disabled={code_button_disabled} block onClick={this.getCode}>获取验证码</Button> */}

```

## 验证码优化

```js
    //  src/views/login/LoginFrom.js
    constructor() {
        super();
        this.state = {
            code_button_loading: false,
            code_button_text:"获取验证码"

        };
        //react没有双向数据绑定的概念,v-model这个Vue的
    };

    getCode = () =>{
      
        // 修改验证码状态
        this.setState({
            code_button_loading:true,
            code_button_text:"发送中"
        })

        GetCode(responseData).then(response =>{
            console.log(response);
        }).catch(error =>{
            this.setState({
                code_button_loading:false,
                code_button_text:"重新获取"
            })
        })
    };
    //render()内部
    const {username,code_button_loading,code_button_text} = this.state;
    <Button type="danger" loading={code_button_loading} block onClick={this.getCode}>{code_button_text}</Button>

```

## 验证码倒计时
+ 第一种写法(建议)

```js

    //  src/views/login/LoginFrom.js
    
    //API
    import {Login,GetCode} from "../../api/account";

    class LoginFrom extends Component {
    constructor() {
        super();
        this.state = {
            code_button_loading: false,//发送中的状态
            code_button_disabled:false,//禁用和激活的状态
            code_button_text:"获取验证码"

        };
        //react没有双向数据绑定的概念,v-model这个Vue的
    };

   
    //获取验证码
    getCode = () =>{
        if(!this.state.username){
            message.warning('用户名不能为空',1);
            return false;
        }
        // 修改验证码状态
        this.setState({
            code_button_loading:true,
            code_button_text:"发送中"
        })
        const responseData = {
            username:this.state.username,
            modile:"login"
        }
        GetCode(responseData).then(response =>{
            //倒计时函数
            this.countDown();
        }).catch(error =>{
            this.setState({
                code_button_loading:false,
                code_button_text:"重新获取"
            })
        })
    };

    /**倒计时 */ 
    
    countDown = ()=>{
        // 定时器
        let timer= null; 
        // 定时时间
        let sec = 5;
        this.setState({
            code_button_loading:false,
            code_button_disabled:true,
            code_button_text:`${sec}S`
        })
        // setInterval \clearInterval 不间断定时器
        // setTimeout \clearTimeout 只执行一次
         timer = setTimeout(() => {
            sec--;
            if(sec<=0){
                this.setState({
                    code_button_text:"重新获取",
                    code_button_disabled:false
                })
                clearTimeout(timer); 
                return false;   
            }
            this.setState({
                code_button_text:`${sec}S`
            })
         }, 1000);

    }

 

   
    render() {
        const {username,code_button_loading,code_button_text,code_button_disabled} = this.state;
       
        return (
            <Fragment>
                    <div className="form-content">
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        >
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Code" />
                                </Col>
                                <Col span={9}>
                                    <Button 
                                    type="danger" 
                                    disabled={code_button_disabled} 
                                    loading={code_button_loading} 
                                    block 
                                    onClick={this.getCode}
                                    >
                                    {code_button_text}</Button>

                                </Col>
                            </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block> 登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
            </Fragment>
            )
        }
    };

```

+ 第二种

```js

    //  src/views/login/LoginFrom.js
    class LoginFrom extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            // code_button_disabled : true,
            code_button_loading: false,//发送中的状态
            code_button_disabled:false,//禁用和激活的状态
            code_button_text:"获取验证码",
            flag: true,

        };
        //react没有双向数据绑定的概念,v-model这个Vue的
    };

    // 登录
    onFinish = (values) => {
        Login().then(response=>{
            console.log(response);
        }).catch(error=>{

        })
    };
    //获取验证码
    getCode = () =>{
        //第一次点击
        // if(!this.state.flag){ return false;}
        if(!this.state.username){
            message.warning('用户名不能为空',1);
            return false;
        }
        // 修改验证码状态
        this.setState({
            code_button_loading:true,
            code_button_text:"发送中"
        })
        const responseData = {
            username:this.state.username,
            modile:"login"
        }
        // this.setState({flag:false})
        GetCode(responseData).then(response =>{
            //倒计时函数
            this.countDown();
        }).catch(error =>{
            this.setState({
                code_button_loading:false,
                code_button_text:"重新获取"
            })
            // this.setState({flag:true})
        })
    };

    /**倒计时 */ 
    
    countDown = ()=>{
        // 定时器
        let timer= null; 
        // 定时时间
        let sec = 5;
        this.setState({
            code_button_loading:false,
            code_button_disabled:true,
            code_button_text:`${sec}S`
        })
        // setInterval \clearInterval 不间断定时器
        // setTimeout \clearTimeout 只执行一次
         timer = setTimeout(() => {
            sec--;
            if(sec<=0){
                this.setState({
                    code_button_text:"重新获取",
                    code_button_disabled:false,
                    // flag:true
                })
                clearTimeout(timer); 
                return false;   
            }
            this.setState({
                code_button_text:`${sec}S`
            })
         }, 1000);

    }

    /** input输入处理 */
    inputChange = (e) =>{
        let value = e.target.value
        // 更新input输入框的值给上面state的username
        this.setState({
            username: value,
        })
    }

    toggleForm = () =>{
        // 去调用父级方法
        this.props.switchFrom("register");
        alert(333);
    }

    render() {
        const {username,code_button_loading,code_button_text,code_button_disabled} = this.state;
        // const {username,code_button_disabled} = this.state;
        // const _this = this;
        return (
           <Fragment>
                <div className="form-header">
                    <h4 className="column">登录</h4>
                    <span onClick={ this.toggleForm} >账号注册</span>
                </div>
                <div className="form-content">
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    >
                        <Row gutter={13}>
                            <Col span={15}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Code" />
                            </Col>
                            <Col span={9}>
                            // reate的行内按时写法不同**style={{color:'#fff'}}**
                                <div style={{color:'#fff'}} block onClick={this.getCode}>{code_button_text}</div> 
                            </Col>
                        </Row>
                        </Form.Item>

                    </Form>
                </div>
           </Fragment>
        )
    }
}

```