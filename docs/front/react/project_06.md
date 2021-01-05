---
title: 优化分离组件
---

## 原版List组件

```js

   //src\views\department\List.js
    // 分离table前的部门列表组件
    import React,{Component,Fragment}from "react";

    //ANTD
    import {Form ,Input,Button, Table,Switch, message,Modal}from "antd";
    // API
    import {GetList,Delete,Status} from "../../api/department";
    import { Link } from "react-router-dom";

    //table 组件
    // import TableComponent from "@c/tableData/Index";
    class DepartmentList extends Component{
        constructor(props){
            super();
            this.state = {

                loadingTable:false,
                //请求参数
                pageNumber:1, //页数
                pageSize:10, //显示多少条
                keyWork:"",

                selectedRowKeys:[],//复选框
                visible:false,// 删除警告弹框
                showPromiseConfirm:false,// 堂创确定按钮
                id:"",

                // 表头
                columns:[
                    { title:"部门名称",dataIndex:"name",key:"name"},
                    { 
                        title:"禁启用",
                        dataIndex:"status",
                        key:"status",
                        render:(text,rowData)=>{
                            return <Switch onChange={()=>this.onHandSwitch(rowData)} loading={rowData.id ==this.state.id} checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={rowData.status ==="1"? true : false }></Switch>
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

                                <Button type="primary">
                                    <Link to={{pathname:"/index/department/add",state:{id:rowData.id}}}>编辑</Link>
                                </Button>
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
            this.setState({loadingTable:true})
            GetList(requestData).then(response=>{
                const responseData = response.data.data
            //   console.log(response);
            if(responseData.data){
                this.setState({
                    data:responseData.data
                })
            }
            this.setState({loadingTable:false})
            }).catch(error=>{
            this.setState({loadingTable:false})
            })
        }

        // 搜索
        onFinish=(value)=>{
            if(this.state.loadingTable){return false;}
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
        onHandlerDelete(id){
            if(!id){
                if(this.state.selectedRowKeys.length === 0){  return false; }
                id =this.state.selectedRowKeys.join();
                
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
                    showPromiseConfirm:false,
                    selectedRowKeys:[]
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
            this.setState({ id:data.id })
            Status(requesData).then(response =>{
                message.info(response.data.message)
                this.setState({ id:"" })

            }).catch(error=>{
                this.setState({ id:"" })
            })
        }
        //编辑
        render(){
            const {columns,data,loadingTable} = this.state
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
                        {/* <TableComponent  /> */}
                        <Table loading={loadingTable} rowSelection={rowSelection} rowKey ="id" columns={columns} dataSource={data} bordered>  </Table>
                        <Button onClick={()=>this.onHandlerDelete()}>批量删除</Button>
                    </div>
                    
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
                </Fragment>
            )
        }
    }

    export default DepartmentList; 


```

## 分离组件
+ 新建文件

```js

   //src\api\common.js
    import service from "../../src/utils/requets";

    /**
    * 部门列表
    */
    export function TableList(params){
        return service.request({
            url:params.url,
            method:params.method||"post",
            data:params.data, //请求了类型为post时
        })
    }

```

+ 新建抽离api路径

```js

   //src\api\requestUrl.js
    const requestUrl = {
        "departementList":"/department/list/"
    }
    export default requestUrl;

```

+ 简单抽离并不完全

```js

    //新建文件
    //src\components\tableData\Index.js
    import React ,{Component}from "react";

    //ANTD
    import {Form ,Input,Button, Table,Switch, message,Modal}from "antd";

    // API
    import {TableList} from "@api/common";

    //url
    import requestUrl from "@api/requestUrl";

    class TableComponent extends Component{
        constructor(props){
            super(props);
            this.state={
                //请求参数
                pageNumber:1, //页数
                pageSize:10, //显示多少条
                keyWork:"",

                loadingTable:false,//加载提示
                //数据
                data:[],
            }
        }
    
        componentDidMount = ()=>{
            // console.log(requestUrl);
            this.loaddata()
        }
        //获取列表数据
        loaddata = ()=>{
            const {pageNumber,pageSize,keyWork} = this.state
            // const requestData = {
            //     pageNumber:pageNumber,
            //     pageSize:pageSize,
            // }
            // if(keyWork){ requestData.name = keyWork }
            // this.setState({loadingTable:true})
            // requestData.url = this.props.config.url
            const requestData = {
                url:requestUrl[this.props.config.url],
                method:this.props.config.method,
                methods: "post",
                data: {
                    pageNumber:pageNumber,
                    pageSize:pageSize,
                },
            
            }

            TableList(requestData).then(response=>{
                const responseData = response.data.data
                // console.log(response);
                if(responseData.data){
                    this.setState({
                        data:responseData.data
                    })
                }
                this.setState({loadingTable:false})
            }).catch(error=>{
                this.setState({loadingTable:false})
            })
        }
        
        /**
        * 复选框 
        * 
        */
        onChangebox = (value)=>{

        }
        render(){
            const {loadingTable} = this.state
            const {thead,checkbox,rowKey} = this.props.config
            const rowSelection = {
                onChange: this.onChangebox
            }
            return (
                <Table loading={loadingTable} rowKey={rowKey||"id"} rowSelection={checkbox?rowSelection:null} columns={thead} dataSource={this.state.data} bordered></Table>
            )
        }
    }

    export default TableComponent;

```

+ 删除List.js中多余部分及其添加

```js

    //显示为添加注释为删除
    //src\views\department\List.js
    //table 组件
    import TableComponent from "@c/tableData/Index";
    this.state = {
            loadingTable:false,
            //请求参数
            tableConfig:{
                url:"departementList",
                methods:"post",
                checkbox:true,
                rowkey:"id",
                thead:[
                    { title:"部门名称",dataIndex:"name",key:"name"},
                    { 
                        title:"禁启用",
                        dataIndex:"status",
                        key:"status",
                        render:(text,rowData)=>{
                            return <Switch onChange={()=>this.onHandSwitch(rowData)} loading={rowData.id ==this.state.id} checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={rowData.status ==="1"? true : false }></Switch>
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
    
                                <Button type="primary">
                                    <Link to={{pathname:"/index/department/add",state:{id:rowData.id}}}>编辑</Link>
                                </Button>
                                <Button type="danger" onClick={()=>this.onHandlerDelete(rowData.id)}>删除</Button>
                            </div>
                        ) 
                        }
                    },
                ]
            },
    //获取数据
    // loaddata = ()=>{
    //     const {pageNumber,pageSize,keyWork} = this.state
    //     const requestData = {
    //         pageNumber:pageNumber,
    //         pageSize:pageSize,
    //     }
    //     if(keyWork){ requestData.name = keyWork }
    //     GetList(requestData).then(response=>{
    //         const responseData = response.data.data
    //     //   console.log(response);
    //       if(responseData.data){
    //           this.setState({
    //               data:responseData.data
    //           })
    //       }
    //     })
    // }

    // const {columns,data} = this.state
    //     const rowSelection = {
    //         onChange: this.onChangebox
    //     }
    <div className="table-wrap">
        <TableComponent  config={this.state.tableConfig} />
        // <Table rowSelection={rowSelection} rowKey ="id" columns={columns} dataSource={data} bordered>  </Table>
    </div>
    
```



## 数据类型检测
+ import PropTypes from "prop-types";
PropTypes提供一系列验证器,可确保组件接受的数据类型是真实有效的.在本例中我们使用了PropTypes String.当传入的prop值类型不正确时,javaScript控制台会报错

```js

    //校验数据类型
    MyComponent.propTypes = {
        //你可以将属性声明为js原生类型,默认情况下这些属性都是可选的
        optionalArray:PropTypes.array,
        optionalBool:PropTypes.bool,
        optionalFunc:PropTypes.func,
        optionalNumber:PropTypes.number,
        optionalObject:PropTypes.object,
        optionalString:PropTypes.string,
    }

```

```js

    //默认值
    MyComponent.defaultProps={
        batchButton:false
    }

```



## state里数据要异步
当立即改变`state`里面的值时候要在`setState`里进行异步处理例子如下:

```js

    this.setState({
        pageNumber:value
    },()=>{
        this.loadData()
    })

```