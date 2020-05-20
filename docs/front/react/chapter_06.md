---
title: React案例
---
```js
//1. 导包
import react from 'react'
import ReactDOM from 'react-dom'

//定义父组件使用class关键字定义组件

class Cmtlit extends React.component{
    constructor(){
        super()
        this.state = {
            CommentList:[
                {id:1 user:"路飞", content:'哈哈,沙发'}
                {id:2, user:"索大", content:'哈哈,沙发'}
                {id:3,user:"香克斯", content:'哈哈,沙发'}
                {id:4, user:"弗兰克", content:'哈哈,沙发'}
                {id:5, user:"乔巴", content:'哈哈,沙发'} 
            ]
        }
    }
    render(){
        return 
        <div>
        <h1>这是评论列表组件</h1>
        {this.state.CommentList.map(item =><div key={item.id}>
        <h1>评论人:{item.user}</h1>
        <p>评论内容:{item.content}</p>
        </div>
        )}
        </div>
    }
}


//调用渲染
ReactDOM.render(
    <div>
    <Cmtlit></Cmtlit>
    </div>,document.getELementBYID('app'))
```