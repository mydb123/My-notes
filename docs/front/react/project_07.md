---
title: 分离组件添加部门
---

## 添加组件分离原版

```js
    //  src\views\department\Add.js
    //部门管理-添加部门
    import React,{Component,Fragment} from "react";

    //ANTD
    import{Form, Input,Button, InputNumber,Radio,message} from 'antd';

    //API
    import { DepartmentAdd,Detailed,Edit } from "../../api/department";

    //组件
    import FormCom from"@c/form/Index";

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
            if(this.props.location.state){
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
                // console.log(response);
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
            // console.log(v);
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
        this.state.id?this.onHandEdit(v):this.onHandlerAdd(v)
            // this.onHandlerAdd(v)
        }
        /**
        * 添加信息
        */
        onHandlerAdd = (v)=>{
            DepartmentAdd(v).then(response=>{
                console.log(response);
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
                this.setState({
                    loading:false,
                })
                //重置表单
                this.refs.form.resetFields();
            }).catch(error=>{
                this.setState({
                    loading:false
                })
            })
        }
        render() {
            return(
                // 老式写法
                // <Form onFinish={this.onSubmit} labelCol={this.state.fromLayout.labelCol} wrapperCol={this.state.fromLayout.wrapperCol}></Form>
                // es6扩展
                <Fragment>
                    <FormCom />
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
                </Fragment>
            )
        }
    }

    export default AddDepartment;

```


## 函数报错

<img :src="$withBase('/front/react/报错返回函数.jpg')">

## 提取组件该怎么传参例:

```js

    //src\views\department\Add.js
    //源文件需要的东西
    //引入新建组件
    import FormCom from"@c/form/Index";
     constructor(props){
        super();
        this.state={
           
            formItem:[
                {type:"Input", label:"部门名称", name:"name",required:true },
                {type:"Select", label:"人员熟量", name:"select",required:true }
            ]
        }
    }
    render() {
        const {formItem} = this.state
        return(
             <FormCom formItem={formItem} />
        )
    }

```

+ 新文件

```js

    import React,{Component,Fragment}from"react";


    //ANTD
    import {Form,Input,Button} from "antd";
    class FormCom extends Component{
        constructor(props){
            super(props);
            this.state={};
            console.log(props);//这里可以打印出来
        }

        
        //初始化
        initFormItem = ()=>{
            const {formItem} =this.props;
            //检测是否存在 FormItem
            console.log(formItem);
            if(!formItem || (formItem && formItem.length === 0 )){return false;};
            //循环处理
            const formList = [];
            formItem.map(item=>{
                if(item.type === "Input"){
                    formList.push(this.inputElem(item)) ;
                };
                if(item.type === "Select"){
                    formList.push(this.selectElem(item));
                };
            })
            return formList
            console.log(formList);
        }

     
        render(){
            return(
                <Fragment>
                    <Form  ref="form" onFinish={this.onSubmit} {...this.state.fromLayout}  initialValues={{status:true,number:0}} >
                        {this.initFormItem()}
                        <Form.Item>
                            <Button loading={this.state.loading} type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </Fragment>
            )
        }
    }

    export default FormCom;

```
