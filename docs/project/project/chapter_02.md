---
title: zy档案馆项目
---
### vue框架播放监控
+ 引入layer和播放插件
```js
// layer
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';

//播放插件
import './js/jsmpeg.min'
 
Vue.prototype.$layer = layer(Vue);
```
+ 接口的引入与导出
```js
    // video.js文件
import base from './base'; // 导入接口域名列表
import {get,post} from '@/utils/http'; // 导入http中创建的axios1实例

const video = {         
    toPlay(id) {     
        return get(`${base.sq}/video/toPlay?id=`+id)
    }
}

export default video;

    // index.js文件
    /** 
 * api接口的统一出口
 */
import login from '@/api/login';
import file from '@/api/file';
import user from '@/api/user'
import video from '@/api/video';

// 其他模块的接口……

// 导出接口
export default {    
    login,
    file,
    user,
    video,
    // ……
}

```
+ 播放的页面
```js

    <template>
    <div style="margin:0 auto;top:50%">
        <canvas id="video" style="width:790px;height:550px;"></canvas>
    </div>
</template>
<script>
import base from '@/api/base' // 导入接口域名列表
import api from "@/api/index";
import JSMpeg from "@/js/jsmpeg.min.js";
export default {
    data() {
        return {
            player:{},
        }
    },
    props: {
        videoId: "",
        layerid: "",
        lydata: {
            type: Object,
            default: () => {
                return {};
            }
        },
        lyoption: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    methods: {
        getPlayUrl(id){
            if(id!=null&&id!=""&&id!=undefined){
                api.video.toPlay(id).then(response => {
                    var canvas = document.getElementById('video');
                    this.player = new JSMpeg.Player(base.video+"?id="+id, {canvas: canvas});
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    },
    mounted(){
        this.getPlayUrl(this.videoId);
   },
    beforeDestroy(){
        this.player.destroy();
   },
}
</script>
 

<style lang='scss'>

</style>

```
+ 点击按钮播放的主页面
```js
    <template>
//  监控一层 
    <div class="beijing">
        <div id="monitorOne">
            <div class="map">
                <img class="mapImg" src="@/assets/img/point/监控/一层.png" alt="">
                <i class="point1" @click="monitorPlay(1)">
                    <img src="@/assets/img/point/监控/jiangkong.png" alt="">
                </i>
              
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/index";
import play from '@/views/workbench/videoSurveillanceSystem/play'
export default {
    data() {
        return {
        }
    },
    methods: {
         monitorPlay(videoId){
            this.$layer.iframe({
                content: {
                    content: play, //传递的组件对象
                    parent: this,//当前的vue对象
                    data:{//props
                        "videoId":videoId
                    }
                },
                area:['800px','600px'],
                title: '监控',
                id: 'video-play',
                cancel:()=>{//关闭事件
                    
                }
            });
        }
    },
    mounted(){   
   },
   created(){
        
   }
}
</script>
 

<style lang='scss'>
.beijing{
    height: 100%;
    background-color: #000;
}
    #monitorOne{
        width: 1640px;
        height: 817px;
        margin: 0 auto;
        .map{
            width: 100%;
            height: 100%;
            position: relative;
            .mapImg{
                width: 100%;
                height: 100%;
            }
            .point1{
                top: 13%;
                left: 18%;
            }
            
        }
        .map i:nth-of-type(n){
            position: absolute;
            width: 40px; 
            height: 40px;
            cursor: pointer;
        }
        .map i:nth-of-type(n) img{
            width: 100%;
            height: 100%;
        }
        
    }
</style>

```

## 项目文件分类

<img :src="$withBase('/project/project/分类.jpg')">
