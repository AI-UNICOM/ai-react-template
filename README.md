# 多页面应用模板（用于解决IE8技术方案）

> 内置 jquery 1.7.2

> 兼容IE8

> 支持ES6写法

> 支持avalon2.0

> 支持 Xtemplate 模板引擎

> 支持 axios(使用fetch-ie8进行简单封装)

> 支持 react@0.14

# 使用

```
    //安装
    npm install
    //启动
    npm run start
    //发布
    npm run build
```


# IE8 测试

> gulp

> 每修改代码就执行 npm run dev

# 目录结构
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
    ├─webpack.dev.js #开发环境webpack的配置文件
    ├─webpack.dist.js #生产环境webpack的配置文件
```


