const path=require('path');
const glob=require('glob');

//项目根目录
const ROOT = path.resolve(__dirname,'../');
//开发目录
const SRC = path.resolve(ROOT,'src');
//生成目录
const BUILD = path.resolve(ROOT,'build');
//node_modules目录
const NODEMODULES = path.resolve(ROOT,'node_modules');
//视图目录
const VIEWS = path.resolve(SRC,'views');
//组件目录
const COMPONENTS = path.resolve(SRC,'components');
//资源目录
const RESOURCES = path.resolve(SRC,'resources');
//业务模块
const MODULES=path.resolve(SRC,'module');
//模块页面
const PAGES = glob.sync("!(_)*/!(_)*",{
    cwd:VIEWS
});


module.exports = {
    ROOT,
    SRC,
    BUILD,
    VIEWS,
    COMPONENTS,
    RESOURCES,
    PAGES,
    MODULES,
    NODEMODULES
}