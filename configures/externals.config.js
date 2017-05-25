const ENV = require('./env.config');
const _ = require('lodash-compat');
const routers = require('../router.js').routers;//路由配置
const Config=require('../package.json').Config;

const devServerConfig = {
    // contentBase: './build/',
    host: Config.host,
    port: Config.port, // 默认8080
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true
};

let targetUrl=Config.devTargetUrl;
if(ENV.IS_TEST)targetUrl=Config.testTargetUrl;
if(ENV.IS_PRODUCTION)targetUrl=Config.distTargetUrl;

const proxy = {};//设置代理

Config.proxyHttpNames.forEach(name=>{
    proxy[name]={
        target: targetUrl,
        changeOrigin: true
    }
})

routers.forEach(key => {
    let router = `/${key.router}`, view = `/${key.view}`, pathRewrite = {};
    pathRewrite[`^${router}`] = "";
    proxy[router] = {
        target: `http://${devServerConfig.host}:${devServerConfig.port + view}`,
        pathRewrite: pathRewrite
    }
});

// console.log("proxy===", proxy);
module.exports = Object.assign({
    devServer: Object.assign(devServerConfig, {
        proxy: proxy
    }),
    externals: {
        jquery: 'window.$',
        dialog: 'window.dialog'
    }
}, ENV.IS_DEBUG ? { devtool: 'source-map' }:{})
