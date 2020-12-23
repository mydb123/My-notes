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