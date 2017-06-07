# React多页面模板（用于解决兼容IE8技术方案）

> 内置 jquery 1.7.2

> 支持ES6写法

> 支持 Xtemplate 模板引擎

> 支持 axios(使用fetch-ie8进行简单封装)

> 内置 react@0.14,react-router,redux等

> Webpack预处理,支持热启动,反向代理,Scss,图片处理等全套方案

> 接口采用代理方式


## 环境搭建

> node官网下载 node 安装包(版本>=6.0),安装完成之后,在控制台中输入 node -v 查看node版本,进行确认

> 全局安装webpack(npm install webpack -g),要求版本>=2.0,安装完成之后,在控制台中输入 webpack -v 查看webpack版本,进行确认

> 全局安装 ai-unicon-cli (npm install webpack -g),安装完成，在控制台中输入 ai-unicon init [项目名称],进行创建前端项目框架

> 在项目中，打开控制台,执行npm run install,进行相关依赖加载。

> 加载完成后,执行npm run start命令进行服务启动(启动时间较长,请耐心等待),会自动打开浏览器,如果在页面中看到 Hello World,说明工程安装以及测试完毕,可以正常使用

> 介于此框架由我进行长期维护,功能方面会一直进行优化,使用此框架后,最好不要对其进行修改(开发过程只需对src文件夹操作即可),防止带来不必要的升级的麻烦

## 目录结构
```
    ├─build # 编译之后的代码,以及静态资源,以及路由资源
    ├─node_modules # npm管理的第三方模块
    ├─src # 当前项目的源码
        ├─components #自定义组件
        ├─layouts # 基本的布局文件
        ├─resources # 公共资源,此目录下的,文件路径存放并没有严格的存放要求,默认情况下css文件直接放入此文件夹
        │  ├─assets # 一般存在第三方公共js文件,比如jquery等,并不是所有的js模块都是用npm install
        │  ├─fonts # 字体文件
        │  ├─images # 图片资源
        |  ├─.css/.scss #css/scss样式文件
        │  └─__config.js # 用于载入一些静态资源呢,用于页面上面使用
        │
        └─views # 存放相关业务模块(页面)
            ├─user # 业务模块(比如用户管理模块,此模块包含用户的增删查改的业务页面)
                ├─add # 业务页面(注意一个页面对应一个文件夹,比如添加用户页面)
                    ├─index.js #客户端js代码
                    ├─index.xtpl #Html主页面
                    ├─xtpl.js #用于控制 Html主页面
    │      
    ├─.babelrc # babel的配置文件
    ├─.eslintrc # ESLint的配置文件
    ├─.gitignore # git的配置文件
    ├─.npmrc # npm的配置文件
    ├─package.json # npm的配置文件
    ├─router.js # 路由控制器
    ├─configures # webpack的选项配置
    ├─webpack.config.js #webpack的配置文件
```

## Layouts(Xtemplate) 使用

> 如何进行页面开发?

```
    浏览器输入localhost:3000/user/add.html---->views/user/add/xtpl.js入口文件

```

## Resources 使用

> 用于存放静态资源,比如图片,jquery,css等等

##### __config.js介绍

> 本框架中html中是禁止直接使用静态资源的,例如
```
    <header>
        <script src="../../resource/asset/js/jquery.js">
        <link href="../../resource/asset/base.css">
    </header>
    <body>
        <img src="../../resource/asset/img/logo.png">
    </body>

```

> 现在__config.js进行资源配置
```
    module.exports = {
        "DOM": {
            jquery: require('!!file-loader?name=static/js/[name].[ext]!./assets/js/jquery.js'),
            base:require('!!file-loader?name=static/css/[name].[ext]!./assets/base.css'),
            logo:require('!!file-loader?name=static/img/[name].[ext]!./assets/img/logo.png'),
            commons:[
                { name: "js", value: require('!!file-loader?name=static/js/[name].[ext]!./assets/artDialog/js/dialog.js') },
            ]
        }
    }
```
> 在xtpl(页面/模板)中使用
```
    <header>
        <script src={{DOM.jquery}}>
        <link href={{DOM.base}}>
    </header>
    <body>
        <img src={{DOM.logo}}>
    </body>
```
> 注：所引用的css里面不要包含图片,会导致运行的时候,图片找不到。位于commons里面配置的资源无需手动在模板中使用,会自动加载到header中

## 前后端分离模式

###### 开发环境前后端分离原来

```
                前端工程                                                    后台服务工程
    ├──────────────────────────────│                                ├──────────────────────────────│
    ├   http:localhost:3000/login  │ http:[IP]:[PORT]/[NAME]/login  ├                              │
    ├  JS ---------->Http Proxy----│------------>http请求---------->├           接口服务            │
    ├                              │                                ├                              │
    ├                              │                                ├                              │
    ├──────────────────────────────│                                ├──────────────────────────────│

```

###### 生产环境与后端融合

```
                前端工程                                                    后台web工程
    ├──────────────────────────────│                                ├──────────────────────────────│
    ├                              ├                                │                              |
    ├    webpack 编译打包           │------------> Ajax ---------->  ├                              │
    ├                              │                                ├                              │
    ├                              │                                ├                              │
    ├──────────────────────────────│                                ├──────────────────────────────│
```


### 配置 package.json(Config节点)

```
    "Config": {
    "host": "localhost",
    "port": 3000,
    "publicPath": "/",                                  //后端应用名称
    "distBackend": "",                                  //把前端包打入到后端web中的路径
    "proxyConfig":{                                     //反向代理相关设置
        "Apis":{                                        //环境API设置
            "dev":"http://10.19.9.27:8080/cb2_web",
            "test":"http://10.20.16.210:8200/cb2_web",
            "dist":"/"
        },
        "Urls": [                                       //Url配置
          "/service",
          "/user/doLogin",
          "/common/getSeq"
        ]
    }
  }
```

### 使用

> 使用 npm run 可以查询此框架中相关命令
```
    //启动开发环境服务(一般情况下在此环境中进行开发)
    npm run start
    //生成测试环境代码
    npm run test
    //生成生产环境代码
    npm run dist
    //删除build文件夹中的文件
    npm run clean-build
    //删除node_modules
    npm run clean-node_modules
    //编译/生成单独文件(例如生成 只对home/index文件进行相关编译生成)
    npm run dist --home.index
    
```





## React 组件写法参照

```
    class App extends React.Component{
        static defaultProps={
            //设置props默认值，调用此类的时候就会执行
        }
        static propTypes={
            //设置props属性的类型
        }
        constrouct(props){
            supur(props)
            this.state={
                //初始化state属性,调用此实例的时候就会被执行
            }
        }
        componentWillMount(){
            //渲染"虚拟DOM"之前就会执行
        }
        componentDidMount(){
            //渲染"真实DOM"之后执行,可以通过this.getDOMNode()访问此组件的真实dom
        }
        componentWillReceiveProps(nextProps){
            //当props被父组件修改的时候就会执行
        }
        shouldComponentUpdate(){
            //在props发生变化的时候,用于决定此组件是否应该发生更新。
        }
        componentWillUpdate(){
            //组件接收到新的props和state进行渲染之前
        }
        componentDidUpdate(){
            //组件更新后
        }
        componentWillUnmount(){
            //组件清理和销毁
            //一般用于销毁之前创建的定时器或者添加的事件监听器
        }
        render(){//创建虚拟dmo
            //只能出现一个顶级元素
            return (//可以返回null,false,react组件
                <h1>Hello World</h1>
            )
        }
    }
```

## React 相关组件(redux,router)

##### react-router(常用)
```
    //定义
    import { Router, Route, hashHistory } from 'react-router';

    let routes =<Route path="/" component={App}>
                    <IndexRedirect to="/index" />
                    //<IndexRoute component={Home}/>              //默认情况下加载的子组件
                    <Route path="/index" component={Index}/>    
                    <Route path="/about" component={About}/>
                </Route>;
    render(<Router routes={routes} history={browserHistory}/>, document.getElementById('app'));

    //DOM 调用
    <Link to="/about" activeStyle={{color: 'red'}} activeClassName="active">About</Link>

    //JS 调用
    import { browserHistory } from 'react-router';
    browserHistory.push('/some/path');


```

##### redux(常用)

```

```

##### React 相关技术栈

> http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html



