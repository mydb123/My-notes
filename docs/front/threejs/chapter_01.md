---
title: three
---
## threejs在线编辑器
`https://threejs.org/editor/`

## 案例分段解释
```js
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width='device-width', initial-scale=1.0">
    <title>Three.js案例</title>
    <style>
        body{
            margin: 0;
        }
        canvas{
            width: 100%;
            height: 100%;
            display: block;
        }
    </style>
</head>
<body onload="init()">
    <!-- onload比ready执行晚一点 -->
    
    <!-- cdn引入/也可以下载引入 -->
<script src="https://cdn.bootcss.com/three.js/92/three.js"></script>
<!-- fpx插件 -->
<script src="https://www.wjceo.com/lib/js/libs/stats.min.js"></script> 
<!-- 调试工具插件 -->
<script src="https://cdn.bootcss.com/dat-gui/0.7.1/dat.gui.min.js"></script> 

<script>
    //声明全局变量
      //渲染器,    相机,场景,   物体,  材质,    网格,   fps
    var renderer,camera,scene,geometry,material,mesh, stats;

    //性能插件,监听fps
    stats = new Stats();
    document.body.appendChild(stats.dom)


    //初始化渲染器
    function initRenderer(){
        renderer = new THREE.WebGLRenderer();//实例化渲染器
        renderer.setSize(window.innerWidth,window.innerHeight);//设置宽高
        document.body.appendChild(renderer.domElement);//添加到dom结构里
    }

    //初始化场景
    function initScene(){
        scene = new THREE.Scene();//实例化场景
    }


    //初始化相机
    function initCamera(){
        camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 0.1, 200);//实例化相机
        camera.position.set(0,0,15); //x,y,z
    }

    //创建物体
    function initMesh(){
        geometry = new THREE.BoxGeometry(2, 2, 2);//创建几何体
        material = new THREE.MeshNormalMaterial();//创建材质,七彩材质(自带的)

        mesh = new THREE.Mesh(geometry,material);//创建网格组合起来
        scene.add(mesh); //将网格添加到场景
    }

    //运动动画
    function animate(){
        requestAnimationFrame(animate);//循环调用此函数

        mesh.rotation.x +=0.01;//每帧网格模型的沿着x轴旋转0.01弧度
        mesh.rotation.y +=0.02;//每帧网格模型的沿着y轴旋转0.02弧度


        stats.updated(); //fps使用
        renderer.render(scene,camera);//渲染界面
    }
    //创建环境光
    function initLight(){
        var light = new THREE.DirectionalLight(0xffffff);//添加了一个平行光
        light.position.set(20,50,50);//设置光的位置
        scene.add(light);//添加到场景

        //添加一个全局环境光
        scene.add(new THREE.AmbientLight(0x222222));
    }



    //初始化函数,页面加载完成时调用
    function init(){
        //3d三要素
        initRenderer(); //渲染
        initScene(); //场景
        initCamera(); //相机

        initLight();//环境光
        initMesh(); //物体

        animate(); //旋转,动画
    }
    
</script>
</body>
</html>

```
使用`Three.js`显示创建内容,我们必须需要三大件: 渲染器,相机和场景.相机获取到的场景内显示的内容,然后再通过渲染器渲染到画布上

## 创建渲染器
```js
     function initRenderer(){
        renderer = new THREE.WebGLRenderer();//实例化渲染器
        renderer.setSize(window.innerWidth,window.innerHeight);//设置宽高
        document.body.appendChild(renderer.domElement);//添加到dom结构里
    }
```
> 第一行: 这是基于WebGL的渲染器
> 第二行: 调用了一个设置函数`setSize`方法,这个是设置我们需要显示的窗口大小,案例我们是基于浏览器全屏显示
> 第三行: `renderer.domElement`是在实例化渲染器生成的一个canvas画布,渲染器渲染界面生成的内容,都在这个画布上显示.所以,我们将这个画布添加到`dom`当中,来渲染内容

## 创建相机
```js
     function initCamera(){
        camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 0.1, 200);//实例化相机
        camera.position.set(0,0,15)
    }
```
**Three.js里面有不同的相机,我们在这里使用到的是THREE.PerspectiveCamera,这个相机的效果是模拟人眼看到的效果,就是具有透视效果,近大远小**
> 第一行:我们实化了一个具体的相机,有四个值
  + 视野:当前值越大看的到的就越大,
  + 宽高比:就按照画布的宽高比来就好了
  + 近截面和远截面: 这个是设置相机可以看到场景内容的范围
> 第二行: 我们设置了相机的位置  

## 性能检测插件
在`three.js`里面,遇到的问题就是性能问题,所以我们需要时刻检测当前`three.js`的性能.现在在`three.js`常用插件的一款插件`stats`
1. 引入
`<script src="https://www.wjceo.com/lib/js/libs/stats.min.js"></script>`
2. 我们要实例一个`status`对象,然后把对象内生成的`dom`添加到页面中.
```js
      stats = new Stats();
    document.body.appendChild(stats.dom)
```
3. 调用
```js
     function animate(){
        requestAnimationFrame(animate);//循环调用此函数
        stats.updated(); //fps使用
        renderer.render(scene,camera);//渲染界面
    }
```

## scene场景
场景是我们每个`three.js`项目放置的容器,我们也可以拥有多个场景进行切换展示,你可以在场景内放置你的**模型**,**灯光**和**照相机**,还可以通过调整场景的位置,让场景内的所有内容都一起跟着调整位置.
1. THREE.Object3D
为了方便操作,`three.js`将每个能够直接添加到场景内的对象都继承至一个基类-`THREE.Object3D`,以后我们将继承至这个基类的对象称为3D对象,判断一个对象是否继承至`THREE.Object3D`,我们可以判断:

```js
    obj instanceof THREE.Object3D
    console.log('renderer',rendererinstanceof THREE.Object3D)
    //继承就返回true,不继承false
```
2. 向场景添加3d对象
` scene.add(mesh); //将网格添加到场景`

3. 获取3D对象
```js
    object3D.name = "firstObj" 
    scene.add(object3D)
    scene.getObjectByName("firstObj");//返回第一个匹配的对象
```
```js
    //看创建物体的代码
    mesh.name= 'lft';

     function init(){
        
        initRenderer(); 



    console.log(scene.getObjectByName("lft"))
    }
```
4. 删除3d对象
`mesh.visible = false //设置为false,模型就没了`
`scene.remove(mesh) //将一个模型从场景删除`

## 修改位置(3种方法)
+ 单独设置
```js
    mesh.position.x =3;//将模型的位置调整x正轴到距离原点为3的位置
    mesh.position.y +=5;//将模型的y轴位置以当前的位置向上移动5个单位.
     mesh.position.z -=5;
```
+ 一次性设置
`mesh.position.set(3,5,-6) //直接将模型设置在x轴为3,y轴为5,z轴为-6`

+ 重新赋值一个对象
`mesh.position = new THREE.Vector3(3,5,-6)`

## 修改大小
+ 单独设置
```js
    mesh.scale.x = 2;//模型沿着x轴方放大一倍
    mesh.scale.y = 0.5;//模型沿着y轴方缩小一倍
    mesh.scale.z = 1;//模型沿着z轴方不变
```

+ 一次性设置
`mesh.scale.set(2,2,2) //每个方向放大`

+ 重新赋值一个对象
`mesh.scale = new THREE.Vector3(3,5,-6)`

## 修改模型转向

+ 单独设置
```js
    mesh.rotation.x = Math.PI;//模型沿着x轴旋转180
    mesh.rotation.y = Math.PI*2;//模型沿着y轴旋转360
    mesh.rotation.z = Math.PI/2;//模型沿着z轴旋转90
```

+ 一次性设置
`mesh.rotation.set(2,2,2) `

+ 重新赋值一个对象
`mesh.rotation = new THREE.Euler(2,2,2,"YZX")`


## Geometry几何体
几何体很多看官网

##  Geometry和BufferGeometry
这个两个几何体都是用于储存模型的点位置,面的索引,法量向,颜色,ux纹理以及自定义属性
区别:
+ Geometry
    + 使用了three.js提供的THREE.Vector3或者THREE.Color这样来储存数据的
    + 性能弱
    + 适合动画场景
+ BufferGeometry
    + 储存数据原始
    + 性能好
    + 适合储存一些放入场景内不需要再额外操作的模型
**可以相互转换**

## 调试工具
1. 引入
`<script src="https://cdn.bootcss.com/dat-gui/0.7.1/dat.gui.min.js"></script>`
2. 建一个对象,在里面设置我们需要修改的一些数据
```js
    var controls = {
        positionX:0,
        positionY:0,
        positionZ:0,
    }
```
3. 实例化dat.GUI对象,将需要修改的配置添加对象中,并监听变化回调
```js
     function init(){


         gui = new dat.GUI();
         gui.add(controls,"positionX",-1,1).onChange(updatePosition); //只要数据变化机会触发onChange
         gui.add(controls,"positionY",-1,1).onChange(updatePosition);
         gui.add(controls,"positionZ",-1,1).onChange(updatePosition);

         function updatePosition(){
             mesh.position.set(controls.positionX,controls.positionY,controls.positionZ);
         }
     }

```
## MeshBasicMaterial材质
1. MeshBasicMaterial
一个以简单着色（平面或线框）方式来绘制几何体的材质。这种材质不受光照的影响。
```js
    geometry = new THREE.BoxGeometry(2, 2, 2);//创建几何体
    material = new THREE.MeshNormalMaterial({color:ox00fffff});//创建材质,七彩材质(自带的)

    mesh = new THREE.Mesh(geometry,material);//创建网格组合起来
    scene.add(mesh); //将网格添加到场景
```
2. MeshNormalMaterial
一种把法向量映射到RGB颜色的材质
3. LineBasicMaterial
一种用于绘制线框样式几何体的材质。

## 添加光
```js
    var light = new THREE.DirectionalLight(0xffffff);//添加了一个平行光
    scene.add(new THREE.AmbientLight(0x222222));//给场景添加了一个全局光
```
```js
    function initLight(){
        var light = new THREE.DirectionalLight(0xffffff);//添加了一个平行光
        light.position.set(20,50,50);//设置光的位置
        scene.add(light);//添加到场景

        //添加一个全局环境光
        scene.add(new THREE.AmbientLight(0x222222));
    } 
```

## Camera相机
```js
    function initCamera(){
        camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight, 0.1, 200);//实例化相机
        camera.position.set(0,0,15); //x,y,z
    }

```
## 相机插件
下载`https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js`
1. 选择相机,并且实例化
```js
    function initControl(){
        control = new THREE.OrbitControls(camera,renderer.domElement)
    }
```
2. 执行init方法
```js
    //初始化函数,页面加载完成时调用
    function init(){
        //3d三要素
        initRenderer(); //渲染
        initScene(); //场景
        initCamera(); //相机

        initLight();//环境光
        initMesh(); //物体

        initControl();//相机插件
        animate(); //旋转,动画
    }
```
3. 每一帧执行update
```js
    //运动动画
    function animate(){
        requestAnimationFrame(animate);//循环调用此函数

        mesh.rotation.x +=0.01;//每帧网格模型的沿着x轴旋转0.01弧度
        mesh.rotation.y +=0.02;//每帧网格模型的沿着y轴旋转0.02弧度


        stats.updated(); //fps使用
        control.update();
        renderer.render(scene,camera);//渲染界面
    }
```

## sprite 精灵
<img :src="$withBase('/front/threejs/精灵.jpg')">

## points 粒子
`http://www.webgl3d.cn/threejs/docs/#api/zh/objects/Points`

## 导入json模型
1. 先从官方提供的编译器`export object`导出
2. 
```js
    //创建物体
    function initMesh(){
       let loader = new THREE.ObjectLoader();//实例化ObjectLoader对象

        loader.load("导入上面导出的路径",function (group){
            scene.add(group)
        })
        
    }
```
2. 可能会出现跨域问题可以安装插件`Live.Server`

## gitf格式导入
`https://sketchfab.com/3d-models?date=week&features=downloadable&sort_by=-likeCount&cursor=bz0xJnA9MTY%3D`3d图像
下载点击图片有一个`Download 3D Model`点击就好了
`https://github.com/mrdoob/three.js/blob/master/examples/jsm/loaders/GLTFLoader.js`下载加载器
插件显示gitf的`fitf tools`

`<script src="导入下载包的路径GLTFLoader.js"></script> `
 ```js
    //创建物体
    function initMesh(){
        var loader = new THREE.GLTFLoader();//实例化ObjectLoader对象
        loader.load("导入上面导出的路径.gltf的",function (group){
            gltf.scene.scale.set(10,10,10);
            scene.add(gltf.scene);
        })
        
    }
```