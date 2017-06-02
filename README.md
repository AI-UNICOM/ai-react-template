# React多页面模板（用于解决兼容IE8技术方案）

> 内置 jquery 1.7.2

> 支持ES6写法

> 支持 Xtemplate 模板引擎

> 支持 axios(使用fetch-ie8进行简单封装)

> 内置 react@0.14,react-router,redux等

> Webpack预处理,支持热启动,反向代理,Scss,图片处理等全套方案

> 接口采用代理方式


## 配置 package.json(Config节点)

```
    Config:{
        "host": "localhost",
        "port": 3000,//端口
        "publicPath": "/",//设置contextpath
        "distBackend": "",//用于把项目打包开发项目的目录中
        "devTargetUrl": "",//开发环境请求接口
        "testTargetUrl": "",//测试环境请求接口
        "distTargetUrl": "/",//生成环境测试接口
        "proxyHttpNames": [//代理设置
            "/service",
            "/user/doLogin",
            "/common/getSeq"
        ]
    }
```

## 使用

```
    //安装
    npm install
    //启动
    npm run start
    //发布
    npm run dist
```



## 目录结构
```
    ├─build # 编译之后的代码,以及静态资源,以及路由资源
    ├─node_modules # npm管理的第三方模块
    ├─src # 当前项目的源码
        ├─components #自定义组件
        ├─layouts # 基本的布局文件
        ├─resources # 公共资源,此目录下的,文件路径存放并没有严格的存放要求,默认情况下css文件直接放入此文件夹
        │  ├─assets # 一般存在第三方公共js文件,比如avalon,jquery等,并不是所有的js模块都是用npm install
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

## React 一些概念介绍

> 反模式:把Props的值给state

## 修改日志

