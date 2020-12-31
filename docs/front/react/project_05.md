---
title: react列表系列
---

## 自动化工程
注: 由于每次添加左边菜单栏都得更改也就是`containerMain/Index.js`文件下都得改,比较麻烦

```js
    //\components\containerMain\components.js
    /**自动化工程*/
    //建立上下文关系
    const files = require.context("../../views/",true,/\.js$/);//第一个参数,目录,第二个参数:是否拆找子级目录,第三参数:指定查找到文件
    //声明组件对象
    const components = [];
    //循环文件
    files.keys().map(key =>{
            //过滤掉index,login
        if(key.includes("./index/")|| key.includes("./login/")){return false;}
        //分割字符串
        const splitFilesName = key.split(".");
        const jsonObj = {};
        //path
        const path = `/index${splitFilesName[1].toLowerCase()}`;
        const component =  files(key).default;
        // 写入对象
        jsonObj.path = path;
        jsonObj.component = component;
        components.push(jsonObj);

    })

    export default components;

```

```js


    //\components\containerMain\Index.js
    /**自动化工程*/
    import components from "./components";

    render(){
        return(
            <Switch>
                {
                    components.map(item=>{
                        return <PrivateRouter exact key={item.path} path={item.path}  component={item.component}  />   
                    })
                }
                {/* <PrivateRouter exact path="/index/user/list"  component={User}  />   
                <PrivateRouter exact path="/index/user/add"  component={UserAdd}  />   
                <PrivateRouter exact path="/index/department/list"  component={DepartmentList}  />   
                <PrivateRouter exact path="/index/department/add"  component={DepartmentAdd}  />    */}
            </Switch>
           
        )
    }
```


## InputNumber
+ 专门处理数字的,大部门在form表单里

## React-cookies

+ sessionStorage:生命周期是仅存在当前会话下有效果,也就是当前窗口,只要这个浏览器没用关闭,sessionStorage在关闭了浏览器窗口后就会被销毁

+ localStorage:生命周期是永久存在的,在关闭页面或者浏览器之后localStorage中的数据也不会消失.localStorage除非主动删除数据,否则数据永远不会消失

+ cookie:生命周期为只在设置cookie过期时间之前一直有效,即使窗口或者浏览器关闭,存放数据大小为4k左右,有个数限制(各浏览器不一样,一般不超过20个,缺点不能存储大数据且不易读取).

+ 得安装依赖不然能用cookies
+ npm install react-cookies --save


## 解决无法获取token,添加部门接口调试

+ 添加部门接口

```js

   //react-admin\src\api\department.js
    import service from "../../src/utils/requets";

    /**
    * 添加部门接口
    */
    export function DepartmentAdd(data){
        return service.request({
            url:"/department/add/",
            method:"post",
            data, //请求了类型为post时
        })
    }

```

+ 修改react-router的路径

```js

    // react-admin\src\components\privateRouter\index.js
    import React from "react";

    import {Redirect, Route} from "react-router-dom";

    //token
    import {getToken} from "../../utils/cookies";
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

+ 新增文件cookies文件

```js

    //react-admin\src\utils\cookies.js
    import cookies from "react-cookies";

    const token = "adminToken";
    const user = "username";

    //存储token
    export function setToken(value){
        cookies.save(token,value)
    }
    export function getToken(){
        return cookies.load(token)
    }



    //存储用户名
    export function sutUsername(value){
        cookies.save(user,value)
    }


    export function getUsername(){
        return cookies.load(user)
}


```

+ 修改请求部门

```js
    //\react-admin\src\utils\requets.js
    //第二部: 请求拦截(请求头)
    service.interceptors.request.use(function (config) {



//--------------------------------------------------
        // 在发送请求之前做些什么 Token,Username
        config.headers["Token"] = getToken();
        config.headers["Username"] = getUsername();
//--------------------------------------------------




        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });


```

+ 添加部门页面(主体)

```js
    //react-admin\src\views\department\Add.js
    //部门管理-添加部门
    import React,{Component} from "react";

    //ANTD
    import{Form, Input,Button, InputNumber,Radio,message} from 'antd';

    //API
    import { DepartmentAdd } from "../../api/department";

    class AddDepartment extends Component{
        constructor(props){
            super();
            this.state={
                loading:false,
                fromLayout:{
                    labelCol:{span:2} ,
                    wrapperCol:{span:20} 
                }
            }
        }

        onSubmit = (v) =>{
            if(!v.name){
                message.error("部门不能为空");
                return false;
            }
            if(!v.number|| v.number ===0){
                message.error("人员数量不能为0");
                return false;
            }
            if(!v.content){
                message.error("描述不能为空");
                return false;
            }
            this.setState({
                loading:true,
            })
            DepartmentAdd(v).then(response=>{
                // console.log(response);
                const data = response.data;
                message.info(data.message);
                this.setState({
                    loading:false,
                })
                //重置表单
                this.refs.form.resetFields();
            }).catch(error=>{
                this.setState({
                    loading:false,
                })
            })
        }
        render() {
            return(
                // 老式写法
                // <Form onFinish={this.onSubmit} labelCol={this.state.fromLayout.labelCol} wrapperCol={this.state.fromLayout.wrapperCol}></Form>
                // es6扩展
                <Form 
                ref="form"
                onFinish={this.onSubmit}
                {...this.state.fromLayout} 
                initialValues={{status:true,number:0}}
                >
                    <Form.Item label="部门名称" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="人员熟量" name="number">
                        <InputNumber min={0} max={100}   />
                    </Form.Item>
                    <Form.Item label="禁启用" name="status">
                        <Radio.Group  >
                            <Radio value={true}>启用</Radio>
                            <Radio value={false}>禁用</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="描述" name="content">
                        <Input.TextArea />
                    </Form.Item>
                    <Button loading={this.state.loading} type="primary" htmlType="submit">提交</Button>
                </Form>
            )
        }
    }

    export default AddDepartment;


```

+ 两处修改

```js

   //react-admin\src\views\login\LoginFrom.js
    import {setToken,sutUsername} from "../../utils/cookies";


    Login(resquesData).then(response=>{
            this.setState({
                loading:true,
            })
            //路由跳转
            const data = response.data.data;
            setToken(data.token);


//------------------------------

            sutUsername(data.username)

//------------------------------




            this.props.history.push("/index");
        }).catch(error=>{
            this.setState({
                loading:true,
            })
        })

```


## React接口在`componentDidMount`来请求

+ 基本生命周期: constructor() --> componentWillMount()---->render()---->`componentDidMount()`

+ constructor被调用是在组件准备要挂载的最开始,此时组件尚未挂载到网页上.

+ componentWillMount 在constructor之后,在render之前,在这方法里的代码调用setState方法不会触发重新render,所以不会用来作加载数据之用

+ `componentDidMount`方法里的代码,是在组件已经完全挂载到网页上才会调用被执行.所以可以保证数据的加载

## 配置路径不用../../

+ 到`config/webpack.config.js`文件里搜索`alias`

```js

     alias: {
        '@': path.resolve('src'),
        '@c': path.resolve('src/components'),
        '@api': path.resolve('src/api'),
        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
      },

```


## 部门列表(1)

```js

    //src\api\department.js
    /**
    * 部门列表
    */
    export function GetList(data){
        return service.request({
            url:"/department/list/",
            method:"post",
            data, //请求了类型为post时
        })
    }

    /**
    * 删除列表一行
    */
    export function Delete(data){
        return service.request({
            url:"/department/delete/",
            method:"post",
            data, //请求了类型为post时
        })
    }

    //---------------------------------全局错误拦截------------------------------------------------------------
    //ANTD
    import{message} from 'antd';

    //第三步: 响应拦截(响应头)
    service.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        // console.log(response);
        const data = response.data
        if(data.resCode !==0){ //rescode不成功 全局错误拦截
            message.info(data.message);
            return  Promise.reject(response);
        }else{ //resCode成功
            return response;
        }
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

```

+部门列表页面 

```js

    //src\views\department\List.js
    import React,{Component,Fragment}from "react";


    //ANTD
    import {Form ,Input,Button, Table,Switch, message}from "antd";
    // API
    import {GetList,Delete} from "../../api/department";
    class DepartmentList extends Component{
        constructor(props){
            super();
            this.state = {
                //请求参数
                pageNumber:1, //页数
                pageSize:10, //显示多少条
                keyWork:"",
                selectedRowKeys:[],//复选框
                // 表头
                columns:[
                    { title:"部门名称",dataIndex:"name",key:"name"},
                    { 
                        title:"禁启用",
                        dataIndex:"status",
                        key:"status",
                        render:(text,rowData)=>{
                            return <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={rowData.status ==="1"? true : false }></Switch>
                        }
                    },
                    { title:"人员数量",dataIndex:"number",key:"number"},
                    { 
                        title:"操作",
                        dataIndex:"operation",
                        key:"operation",
                        width:215,
                        render:(text,rowData)=>{
                        return(
                            <div className="inline-button">
                                <Button type="primary">编辑</Button>
                                <Button type="danger" onClick={()=>this.onHandlerDelete(rowData.id)}>删除</Button>
                            </div>
                        ) 
                        }
                    },
                ],
                //表的数据
                data:[
                    
                ]
            }
        }



        //生命周期挂载完成
        componentDidMount = ()=>{
            this.loaddata()
        }
        //获取数据
        loaddata = ()=>{
            const {pageNumber,pageSize,keyWork} = this.state
            const requestData = {
                pageNumber:pageNumber,
                pageSize:pageSize,
            }
            if(keyWork){ requestData.name = keyWork }
            GetList(requestData).then(response=>{
                const responseData = response.data.data
            //   console.log(response);
            if(responseData.data){
                this.setState({
                    data:responseData.data
                })
            }
            })
        }

        // 搜索
        onFinish=(value)=>{
            this.setState({
                keyWork:value.name,
                pageNumber:1, 
                pageSize:10, 
                
            })
            // //重新获取数据
            this.loaddata()
            // console.log(111);
        
        }
        /**复选框 */
        onChangebox = (selectedRowKeys )=>{
            this.setState({
                selectedRowKeys
            })
            // console.log(selectedRowKeys);
        }
        //删除
        onHandlerDelete = (id) =>{
            // console.log(id);
            if(id){
                return false;
            }
            Delete({id:id}).then(response=>{
                // console.log(response);
                message.info(response.data.message);
                //请求数据
                this.loaddata();
            })
        }
        render(){
            const {columns,data} = this.state
            const rowSelection = {
                onChange: this.onChangebox
            }
            return(
                <Fragment>
                    <Form layout="inline" onFinish={this.onFinish}>
                        <Form.Item label="部门名称"  name="name"  >
                            <Input placeholder="请输入部门名称" />
                        </Form.Item>
                        <Form.Item shouldUpdate={true}  >
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="table-wrap">
                        <Table rowSelection={rowSelection} rowKey ="id" columns={columns} dataSource={data} bordered>  </Table>
                    </div>
                </Fragment>
            )
        }
    }

    export default DepartmentList;


```


## React传参方式(3种)

1. params传参(刷新页面后参数不消失,参数在地址栏里显示)
路由页面:<Router path="/link/:id" component={Demo}></Router>
链接方式:<Link to={'/Link/'+'xxx'}>首页</Link>或者<Link to={{pathname:'/link/'+'xxx'}}>首页</Link>
js方式:this.props.history.push('/link/'+'xxx')或者this.props.history.push({pathname:'link'+'xxx'})
获取方式:this.props.match.params.id//注意这里是match而非histry

```js

    //react\react-admin\src\views\department\List.js
    import {Link} from "react-react-dom";


    { 
        title:"操作",
        dataIndex:"operation",
        key:"operation",
        width:215,
        render:(text,rowData)=>{
            return(
            <div className="inline-button">
                <Button type="primary" onClick={()=>this.onHandlerEdit(rowData.id)}>
                    <Link to={'/index/department/add?id='+rowData.id}>编辑</Link>
                </Button>
            </div>
        ) 
        }
    },

     //react\react-admin\src\views\department\Add.js
    componentDidMount(){
        console.log(this.props.location.state.id);
    }

```

2. query传参(刷新页面参数消失)

```js

    //react\react-admin\src\views\department\List.js
    import {Link} from "react-react-dom";


    { 
        title:"操作",
        dataIndex:"operation",
        key:"operation",
        width:215,
        render:(text,rowData)=>{
            return(
            <div className="inline-button">
                <Button type="primary" onClick={()=>this.onHandlerEdit(rowData.id)}>
                    <Link to={{pathname:"/index/department/add",query:{id:rowData.id}}}>编辑</Link>
                </Button>
            </div>
        ) 
        }
    },

     //react\react-admin\src\views\department\Add.js
    componentDidMount(){
        console.log(this.props.location.query.id);
    }

```

2. query传参(刷新页面参数不消失,state传参是加密的)

```js

    //react\react-admin\src\views\department\List.js
    import {Link} from "react-react-dom";


    { 
        title:"操作",
        dataIndex:"operation",
        key:"operation",
        width:215,
        render:(text,rowData)=>{
            return(
            <div className="inline-button">
                <Button type="primary" onClick={()=>this.onHandlerEdit(rowData.id)}>
                    <Link to={{pathname:"/index/department/add",sate:{id:rowData.id}}}>编辑</Link>
                </Button>
            </div>
        ) 
        }
    },

     //react\react-admin\src\views\department\Add.js
    componentDidMount(){
        console.log(this.props.location.sate.id);
    }

```


## 删除/编辑

```js

    //src\api\department.js
    //新增三个接口
    /**
    * 禁用启用切换
    */
    export function Status(data){
        return service.request({
            url:"/department/status/",
            method:"post",
            data, //请求了类型为post时
        })
    }

    /**
    * 详情
    */
    export function Detailed(data){
        return service.request({
            url:"/department/detailed/",
            method:"post",
            data, //请求了类型为post时
        })
    }

    /**
    * 编辑
    */
    export function Edit(data){
        return service.request({
            url:"/department/edit/",
            method:"post",
            data, //请求了类型为post时
        })
    }

```



+ 列表页面


```js

    //src\views\department\List.js
    import React,{Component,Fragment}from "react";



    //*********************************************************************************************
    //ANTD
    import {Form ,Input,Button, Table,Switch, message,Modal}from "antd";
    // API
    import {GetList,Delete,Status} from "../../api/department";
    import { Link } from "react-router-dom";
    //*********************************************************************************************




    class DepartmentList extends Component{
        constructor(props){
            super();
            this.state = {
                //请求参数
                pageNumber:1, //页数
                pageSize:10, //显示多少条
                keyWork:"",


    //*********************************************************************************************

                selectedRowKeys:[],//复选框
                visible:false,// 删除警告弹框
                showPromiseConfirm:false,// 堂创确定按钮
                id:"",
    //*********************************************************************************************



                // 表头
                columns:[
                    { title:"部门名称",dataIndex:"name",key:"name"},
                    { 
                        title:"禁启用",
                        dataIndex:"status",
                        key:"status",
                        render:(text,rowData)=>{


    //*********************************************************************************************

                            return <Switch onChange={()=>this.onHandSwitch(rowData)} checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={rowData.status ==="1"? true : false }></Switch>
    //*********************************************************************************************



                        }
                    },
                    { title:"人员数量",dataIndex:"number",key:"number"},
                    { 
                        title:"操作",
                        dataIndex:"operation",
                        key:"operation",
                        width:215,
                        render:(text,rowData)=>{
                        return(
                            <div className="inline-button">

    // *********************************************************************************************

                                <Button type="primary">
                                    <Link to={{pathname:"/index/department/add",state:{id:rowData.id}}}>编辑</Link>
                                </Button>
                                <Button type="danger" onClick={()=>this.onHandlerDelete(rowData.id)}>删除</Button>
    //*********************************************************************************************

                            </div>
                        ) 
                        }
                    },
                ],
                //表的数据
                data:[
                    
                ]
            }
        }



        //生命周期挂载完成
        componentDidMount = ()=>{
            this.loaddata()
        }
        //获取数据
        loaddata = ()=>{
            const {pageNumber,pageSize,keyWork} = this.state
            const requestData = {
                pageNumber:pageNumber,
                pageSize:pageSize,
            }
            if(keyWork){ requestData.name = keyWork }
            GetList(requestData).then(response=>{
                const responseData = response.data.data
            //   console.log(response);
            if(responseData.data){
                this.setState({
                    data:responseData.data
                })
            }
            })
        }

        // 搜索
        onFinish=(value)=>{
            this.setState({
                keyWork:value.name,
                pageNumber:1, 
                pageSize:10, 
                
            })
            // //重新获取数据
            this.loaddata()
            // console.log(111);
        
        }
        /**复选框 */
        onChangebox = (selectedRowKeys )=>{
            this.setState({
                selectedRowKeys
            })
            // console.log(selectedRowKeys);
        }

    //*********************************************************************************************

        //删除
        onHandlerDelete(id){
            // console.log(id);
            if(!id){
                return false;
            }
            this.setState({
                visible:true,
                id
            })
        
        }
        /**删除警告弹框 */
        modalThen=()=>{
            Delete({id:this.state.id}).then(response=>{
                // console.log(response);
                message.info(response.data.message);
                this.setState({
                    visible:false,
                    id:"",
                    showPromiseConfirm:false
                })
                //请求数据
                this.loaddata();

            })
        }
        //禁用启用
        onHandSwitch(data){
            if(!data.status){return false;}
            const requesData = {
                id:data.id,
                status:data.status === "1"?false:true
            }
            Status().then(response =>{
                message.info(response.data.message)
            })
        }
        //编辑
    //*********************************************************************************************

        render(){
            const {columns,data} = this.state
            const rowSelection = {
                onChange: this.onChangebox
            }
            return(
                <Fragment>
                    <Form layout="inline" onFinish={this.onFinish}>
                        <Form.Item label="部门名称"  name="name"  >
                            <Input placeholder="请输入部门名称" />
                        </Form.Item>
                        <Form.Item shouldUpdate={true}  >
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="table-wrap">
                        <Table rowSelection={rowSelection} rowKey ="id" columns={columns} dataSource={data} bordered>  </Table>
                    </div>


    //*********************************************************************************************

                    <Modal
                        title="提示"
                        visible={this.state.visible}
                        onOk={this.modalThen}
                        onCancel={()=>{this.setState({visible:false})}}
                        showPromiseConfirm={this.state.showPromiseConfirm}
                        okText="确认"
                        cancelText="取消"
                        >
                        <p className="text-center">确认删除此信息吗,<strong className="color-red">删除后无法恢复</strong></p>
                        
                    </Modal>
    //*********************************************************************************************


                </Fragment>
            )
        }
    }

    export default DepartmentList;

```


+ 从列表跳至添加页面其实是编辑,添加及更改了一些方法 

```js

    //\src\views\department\Add.js
    //API
    import { DepartmentAdd,Detailed,Edit } from "../../api/department";

    class AddDepartment extends Component{
        constructor(props){
            super();
            this.state={
                loading:false,
                id:"",
                fromLayout:{
                    labelCol:{span:2} ,
                    wrapperCol:{span:20} 
                }
            }
        }

        //存储id避免Detailed传值写的过长
        componentWillMount(){
            if(this.props.location.state.id){
                this.setState({
                    id:this.props.location.state.id
                })
            }
        }
        //接受List传过来的参数
        componentDidMount(){
            this.getDetailed()
            // console.log(this.props.location.state.id);
        }

        getDetailed=()=>{
            if(!this.props.location.state){return false;}
            Detailed({id:this.state.id}).then(response=>{
                console.log(response);
                // const data = response.data.data
                // this.refs.form.setFieldsValue({
                //     content: data.content,
                //     name: data.name,
                //     number:data.number,
                //     status: data.status
                // })
                this.refs.form.setFieldsValue(response.data.data)
            })
        }

        onSubmit = (v) =>{
            if(!v.name){
                message.error("部门不能为空");
                return false;
            }
            if(!v.number|| v.number ===0){
                message.error("人员数量不能为0");
                return false;
            }
            if(!v.content){
                message.error("描述不能为空");
                return false;
            }
            this.setState({
                loading:true,
            })
        //确定按钮执行添加或者编辑
        this.state.id?this.onHandlerAdd(v):this.onHandEdit(v)
        }
        /**
        * 添加信息
        */
        onHandlerAdd = (v)=>{
            DepartmentAdd(v).then(response=>{
                // console.log(response);
                const data = response.data;
                message.info(data.message);
                this.setState({
                    loading:false,
                })
                //重置表单
                this.refs.form.resetFields();
            }).catch(error=>{
                this.setState({
                    loading:false,
                })
                
            })
        }

        /**
        * 编辑信息
        */
        onHandEdit = (v) =>{
            const responseData = v
            responseData.id = this.state.id 
            Edit(responseData).then(response=>{

            }).catch(error=>{
                this.setState({
                    loading:false
                })
            })
        } 

```