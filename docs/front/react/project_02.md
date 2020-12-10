---
title: react登录注册
---

## 函数的定义方式

1. 箭头函数

<img :src="$withBase('/front/react/箭头函数1.png')">


```js

    tableHeader = () =>{};
    this.tableHeader

    (data)=>{this.handleClick}

```

<img :src="$withBase('/front/react/箭头函数2.png')">



2. 构造器内部声明

<img :src="$withBase('/front/react/构造函数创建.png')">

```js

    this.tableHeader = this.tableHeader.bind(this);


    //react里的写法
```

3. bind绑定

<img :src="$withBase('/front/react/bain绑定.png')">


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

<img :src="$withBase('/front/react/登录注册组件化.png')">

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