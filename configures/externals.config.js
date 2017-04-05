const ENV = require('./env.config');
const _ = require('lodash-compat');
const routers = require('../router.js').routers;//路由配置
const host=require('../package.json').Config.host;
const port=require('../package.json').Config.port;
const devServerConfig = {
    contentBase: './build/',
    host: host,
    port: port, // 默认8080
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true
};
const proxy = {};//设置代理
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
}, ENV.IS_PRODUCTION ? {} : { devtool: 'source-map' })
