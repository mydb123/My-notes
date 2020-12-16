---
title: react登录注册二
---
## 组件类型

1. 无状态组件
无状态(state)组件是最基础的组件形式,由于没有状态的影响所以就是纯静态展示的作用.属性(prors)加上一个渲染函数(render)

2. 有状态的组件
组件内部包含状态(state)且**状态随着事件**或者**外部的消息**而发生改变.有状态的组件通常会带有生命周期(lifecycle)

3. ui组件
负责数据的渲染,通过属性props接受外部数据加上render函数

4. 容器组件
axios数据的获取以及处理逻辑上的事,不负责数据的渲染

## 生命周期
+ 组件将要加载 componentWillMount()组件加载前

+ 组件加载完成 componenDidMount()

+ 将要接受父组件传来的props componetnWillReceiveProps()

+ 子组件是不是应该更新 shouldComponentUpdate()

+ 组件将要更新 componentWillUpdate()

+ 组件更新完成 componentDidUpdate()

+ 组件即将销毁 componentWillUnmount()


## 抽离成组件
+ 在`src`文件下新键`components`文件夹,在这里面接着新键`code`文件夹在新键`index.js`
+ 删除`LoginFrom.js`文件被抽离的部分

```js

    // src/components/code/index.js
        //验证码的部分被抽离了
    import React,{Component} from "react"; 

    // ANTD
    import { Button,message } from 'antd';

    //API
    import {GetCode} from "../../api/account";

    // 校验规则
    import {validate_email} from "../../utils/validate";

    // 定时器
    let timer= null; //在外部我们得销毁定时器

    class Code extends Component{
        constructor(props){
            super(props); //初始化默认值
            console.log( props);
            this.state={
                username:"",
                button_loading: false,//发送中的状态
                button_disabled:false,//禁用和激活的状态
                button_text:"获取验证码",
                module: props.module

            }
        };
        //this.props.user 每次去获取值
        //这里的username对应的是LoginFrom里等号左边的username
        componentWillReceiveProps({username}){
            console.log(username);
            this.setState({
                username
            })
        };
        /**销毁定时器组件 */
        componentWillUnmount(){
            clearInterval(timer); 
        }

        //获取验证码
        getCode = () =>{
            //因为这里下面有三处用道`this.state.username`所以改为自定义username
            const username = this.state.username
            if(!username){
                message.warning('用户名不能为空',1);
                return false;
            }
            if(!validate_email(username)){
                message.warning('邮箱格式不正确',1);
                return false;
            }
            // 修改验证码状态
            this.setState({
                button_loading:true,
                button_text:"发送中"
            })
            const responseData = {
                username,
                module: this.state.module
            }
            GetCode(responseData).then(response =>{
                message.success(response.data.message);
                //倒计时函数
                this.countDown();
            }).catch(error =>{
                this.setState({
                    button_loading:false,
                    button_text:"重新获取"
                })
            })
        };

        /**倒计时 */ 
        countDown = ()=>{
            // 定时时间
            let sec = 60;
            this.setState({
                button_loading:false,
                button_disabled:true,
                button_text:`${sec}S`
            })
            // setInterval \clearInterval 不间断定时器
            // setTimeout \clearTimeout 只执行一次
            timer = setInterval(() => {
                sec --;
                if(sec<=0){
                    this.setState({
                        button_text:"重新获取",
                        button_disabled:false,
                    })
                    clearInterval(timer); 
                    return false;   
                }
                this.setState({
                    button_text:`${sec}S`
                })
            }, 1000);

        }

        render(){
        return ( <Button  type="danger" disabled={this.state.button_disabled}  loading={this.state.button_loading}   block  onClick={this.getCode}> {this.state.button_text}</Button>)
        }
    }

    export default Code;

```

```js

    //  src/views/login/RegisterFrom.js
    //logfinFrom类似
    import React, { Component,Fragment } from "react";
        
    // ANTD
    import { Form, Input, Button,Row, Col } from 'antd';
    import { UserOutlined,LockOutlined  } from '@ant-design/icons';

    //校验规则
    import {validatse_pass} from "../../utils/validate";

    //css
    import "./index.scss";

    // API
    import {Register} from "../../api/account";

    //组件
    import Code from "../../components/code/index";


    class RegisterFrom extends Component {
        constructor() {
            super();
            this.state = {
                username:"",
                password:"",
                code:"",
                module:"register"
            };
        };

        /** input输入处理 */
        inputChangeUsername = (e) =>{
            let value = e.target.value
            // 更新input输入框的值给上面state的username
            this.setState({
                username: value,
            })
        };
        /** password 输入处理*/
        inputChangePassword = (e) =>{
            let value = e.target.value
            // 更新input输入框的值给上面state的username
            this.setState({
                password: value,
            })
        };
        /** Code 输入处理*/
        inputChangeCode = (e) =>{
            let value = e.target.value
            // 更新input输入框的值给上面state的username
            this.setState({
                code: value,
            })
        };
        

        onFinish = (values) => {
            const requesData = {
                username:this.state.username,
                password:this.state.password,
                code:this.state.code
            }
            console.log(requesData);
            return false
            Register().then(response =>{

            }).catch(error=>{

            })
        };

        toggleForm = () =>{
            // 去调用父级方法
            this.props.switchFrom("login");
            alert(111);
        }

        render() {
            const {username,module} = this.state;
            return (
            <Fragment>
                    <div className="form-header">
                        <h4 className="column">注册</h4>
                        <span onClick={ this.toggleForm}>登录</span>
                    </div>
                    <div className="form-content">
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        >
                            <Form.Item name="username" rules={[
                                { required: true, message: '邮箱不能为空' },
                                { type: "email", message: '邮箱格式不正确' },
                                
                                ]}>
                                <Input onChange={this.inputChangeUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
                            </Form.Item>
                            <Form.Item name="password"   rules={[
                                { required: true, message: '密码不能为空' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        let passwords_value = getFieldValue("passwords");
                                        if(!validatse_pass(value)){
                                            return Promise.reject("请输入大于6位小于20位数字+字母");
                                        }
                                        if(passwords_value && value !== passwords_value){
                                            return Promise.reject("两次密码不一致");
                                        }
                                        return Promise.resolve();
                                    },
                                }),
                                
                            ]}>
                                <Input onChange={this.inputChangePassword}  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="密码" />
                            </Form.Item>
                            <Form.Item name="passwords" rules={[
                                { required: true, message: '再次确认密码不能为空' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if(value !== getFieldValue("password")){
                                            return Promise.reject("两次密码不一致");
                                        }
                                    return Promise.resolve();
                                    },
                                }),
                            ]}>
                                <Input  prefix={<LockOutlined className="site-form-item-icon" />} placeholder="再次确认密码" />
                            </Form.Item>
                            <Form.Item name="code" rules={[
                                { required: true, message: '请输入密码' ,len: 6 }
                            ]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input onChange={this.inputChangeCode} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="验证码" />
                                </Col>
                                <Col span={9}>
                                    <Code username = {username} module={module}/>
                                </Col>
                            </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" block> 注册</Button>
                            </Form.Item>
                        </Form>
                    </div>
            </Fragment>
            )
        }
    }

    export default RegisterFrom

```

##  密码加密
+ 安装依赖`npm install crypto-js`
+ 在`RegisterFrom.js`里加`import Crypto-js`
+ md5加密`const pwd = CryptoJs.MD5(password).toString();`
+ md5加密`const pwd = CryptoJs.SHA1(password).toString();`

<img :src="$withBase('/front/react/密码加密.jpg')">


## 注册/登录

+ 点击注册触发方法`onFinish`

```js

    onFinish = (values) => {
        const requesData = {
            username:this.state.username,
            password:this.state.password,
            code:this.state.code
        }
        Register(requesData).then(response =>{
            const data = response.data;
            message.success(data.message);
            if(data.resCode ===0){
                this.toggleForm()
            }
           
        }).catch(error=>{

        })
    };

```