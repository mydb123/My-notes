---
title: zy健康项目简记
---
### 首页

<img :src="$withBase('/project/project/首页.jpg')">

## 项目进展和咨询进度展示
1. 建立一个单独的api文件夹,哪个文件用接口哪个引入`import api from "@/api/index";`

<img :src="$withBase('/project/project/接口统一出口.jpg')">

```js
//base文件
        /**
    * 接口域名的管理
    */
    const base = {    
        sq: 'http://localhost:81/api-bp',  //todo 发布时修改该位置
        //sq: 'http://www.chorainzk.com:2020/api-bp',  //外网域名
    }
export default base;
```
+ http文件
```js
   
    
 /**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import store from '../store/index';
import { Message } from 'element-ui'
    
const clearstore = {
    source: {
        token: null,
        cancel: null
    }
}

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 10000;
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
axios.interceptors.request.use(    
    config => {        
        config.cancelToken = clearstore.source.token
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码  'Basic '+token      
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。'Bearer '+token        
        const token = store.getters.token;     
        token && (config.headers.Authorization = 'Bearer '+token);        
        return config;   
    },    
    error => Promise.error(error)
)

// 响应拦截器
axios.interceptors.response.use(    
    
    // 请求成功
    res => 
    {   
        return Promise.resolve(res)
    },  
      
    // 请求失败
    error => {
        // console.info(error.response.status)
        return Promise.reject(error)
    });
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.post(url,data)
           .then(response => {
            resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }

  /**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postDownLoad(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.post(url,data,{responseType: 'blob'})
           .then(response => {              
            resolve(response);
           },err => {
             reject(err)
           })
    })
  }
export  {clearstore};
```
+ 对qs模块的解释
```js
    简单来说，qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库。

在项目中使用命令行工具输入：npm install qs
安装完成后在需要用到的组件中：import qs from 'qs’
具体使用中我查看了：qs.parse()和qs.stringify()

这两种方法虽然都是序列化，但是还是有区别的。
qs.parse()是将URL解析成对象的形式
qs.stringify()是将对象 序列化成URL的形式，以&进行拼接

解决我遇到的问题我使用了qs.stringify()
```
+  接口文件
```js
    //接口
    import base from './base' // 导入接口域名列表
    import {get,post} from '@/utils/http' // 导入http中创建的axios1实例
    import qs from 'qs' // 根据需求是否导入qs模块

    const project = {
    // 立项信息
    lxxx (formData) {
        return post(`${base.sq}/workbench/bizProject/lxxx`,qs.stringify(formData));
    },
    // 根据角色名称查询用户
    getUserByRoleName (roleName) {
        return get(`${base.sq}/workbench/bizProject/getUserByRoleName?roleName=`+roleName);
    },
    // 根据角色名称查询用户
    getUserByRoleNamePost (roleName) {
        return post(`${base.sq}/workbench/bizProject/getUserByRoleName`,qs.stringify({"roleName":roleName}));
    },
    // 根据id查询项目信息
    getProjectById (id) {
        return get(`${base.sq}/workbench/bizProject/`+id);
    },
    // 上传文件
    uploadFile (obj) {
        return post(`${base.sq}/workbench/uploadFile`, obj, { headers: { 'Content-Type': 'multipart/form-data' }});
    },
    deleteFile(id) {//删除文件
        let operator = sessionStorage.getItem("user");
        return post(`${base.sq}/workbench/deleteFile`, qs.stringify({ id: id, operator: operator }));
    },
    loadFile(foreignId, type) {//加载
        return get(`${base.sq}/workbench/findFileByForeignIdAndType?foreignId=` + foreignId + "&type=" + type);
    },
    goingAndCompleteProject(){//首页当前在建项目和竣工项目
        return get(`${base.sq}/workbench/bizProject/goingAndCompleteProject`);
    },
}
export default project

```
+ html
```js
    <el-col :span="8">
        <el-card>
        <div class="Projecthader" >
            <span>项目进展</span>
        </div>
        <ul class="textitem" style='cursor:pointer'>
            <li  :key="project.id" v-for="project in projectList" @click="goProjectDetail(project)">
                {{ project.name }}
            </li>
        </ul>
        </el-card>
    </el-col>
```
<img :src="$withBase('/project/project/代码块1.jpg')">

## echarts图表
+ html
```html
    <el-col :span="8">
            <el-card>
            <div class="Projecthader" >
                <span>项目年度分布图</span>
            </div>
            <div id="barEcharts" class="whmauto"></div>
        </el-card>
    </el-col>
```
```js
     barEcharts(xAxisData,seriesData){
            // 基于准备好的dom，初始化echarts实例
            let barEcharts = this.$echarts.init(document.getElementById('barEcharts'));
            // 绘制图表
            barEcharts.setOption({
                xAxis: {
                    type: 'category',
                    data: xAxisData
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: seriesData,
                    type: 'bar'
                }]
            });
        },
        mounted(){
        this.countProjectByYear();//项目年度分布Echarts
        this.countProjectByProvince();//项目省份Echarts
        this.countProjectByScale();//项目规模Echarts
   },
```
## 详情页面

<img :src="$withBase('/project/project/xqym.jpg')">  

+ data定义
```js
import api from '@/api/index';
import {projectPhase,getStatusNameByStatus,judgeRoleByUserName,selectUpdateRouteByStatus,judgeFLagByStatus} from '@/utils/util';



  data() {
        return {
            roleName:'',
            zbCompanyList:[],
            username:sessionStorage.getItem("user"),
            show1:true,
            getStatusNameByStatus:getStatusNameByStatus,
            judgeRoleByUserName:judgeRoleByUserName,
            judgeFLagByStatus:judgeFLagByStatus,
            pageResult:{
            },
            formInline: {
				name: '',
				zbCompany:'',
				province:'',
                status:'',
                pageSize:10,
                pageNumber:1,
            },
			formData:{
				province:'',
			},
            options:projectPhase,
        }
    },
```
+ 分页条件查询
```js
    search:function(formInline){
            api.counsel.pageSearch(formInline).then(response => {
                this.pageResult = response.data
            });
        },
```

+ 咨询和跟进
```html
    <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
            v-if="judgeRoleByUserName(username)==0"
            size="small"
            @click="handleConsel(scope.$index, scope.row)">咨询</el-button>
            <el-button
            size="small"
            v-if="judgeRoleByUserName(username)==1&&scope.row.status!=0&&judgeFLagByStatus(scope.row.status)"
            @click="handleEdit(scope.$index, scope.row)">跟进</el-button>
        </template>
    </el-table-column>
```

```js
handleConsel(index,row){//咨询
           this.$router.push({path:"/workbench/project/counsel",query:{id:row.id,name:row.name}});
        },   
        handleEdit(index,row){//跟进
           let router = selectUpdateRouteByStatus(row.status);
           this.$router.push(router + "?id=" + row.id);
        },
```

+ 省选择
```html
    <el-form-item label="省份">
        <v-distpicker 
            :province="formInline.province" 
            only-province
            @selected="onSelected">
        </v-distpicker>
    </el-form-item>
```
```js
     //省选择事件
        onSelected(data) {
            this.formInline.province = data.province.value;
        },
```
+ 页码改变
```html
   <el-pagination
        @current-change="handleCurrentChange"
        :current-page="formInline.pageNumber"
        :page-size="formInline.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="pageResult.total">
    </el-pagination>
```
```js
      //当前页码改变
        handleCurrentChange: function(currentPage){
            this.formInline.pageNumber = currentPage
            this.search(this.formInline)
        },
```
+ 查询
```html
     <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
```
```js
  //查询
        onSubmit(){
            this.formInline.pageNumber = 1
            this.search(this.formInline)
        },
```
+ 获取总包单位下拉框和获取当前用户角色
```js
 created() {
        //获取当前用户角色
		api.login.getUserRoleApi().then(response => {
            this.roleName = response
            sessionStorage.setItem("roleName",response)
        });
		//查询总包单位赋值下拉框
		api.project.getUserByRoleNamePost("zb").then(response => {
            this.zbCompanyList = response.data
        });
        this.search(this.formInline)
        
    },
```