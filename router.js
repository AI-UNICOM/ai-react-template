const _ = require('lodash');
const fs = require('fs');
const host = require('./package.json').Config.host;
const port = require('./package.json').Config.port;
const entrys = require('./configures/entry.config.js');
const routersTemp1 = {}, routersTemp2 = {};
const keys = _.drop(_.keys(entrys));

// 循环entry中的值，生成原始路由对象routersTemp1
for (let i = 0; i < keys.length; i++) {
    routersTemp1[keys[i]] = {
        router: keys[i],
        view: `${keys[i]}.html`
    }
}
// 判断是否存在build文件夹,不存在则创建
if (!fs.existsSync('./build')) {
    fs.mkdirSync('./build');
}

// 判断是否存在router.json文件，取值
let jsonObj = [];
if (fs.existsSync('./build/router.json')) {
    jsonObj = JSON.parse(fs.readFileSync('.\/build\/router.json'));
}

// 将json文件中的值整合成需要的格式
if (jsonObj.length > 0) {
    for (let i = 0; i < jsonObj.length; i++) {
        let key = jsonObj[i].view.split(".")[0];
        routersTemp2[key] = jsonObj[i];
    }
}

// 合并entry及json文件取出的值
const routersTemp = Object.assign(routersTemp1, routersTemp2);
// 组装代理需要的数据格式
const routers = _.sortByOrder(_.values(routersTemp1), 'router', 'desc');
// 生成新的json文件
fs.writeFileSync('.\/build\/router.json', JSON.stringify(routers));

//生成客户端的跳转链接
var routerUrls = {};
for (var index in routersTemp) {
    var key = index.split("/");
    routerUrls[key[0]] = routerUrls[key[0]] || {};
    routerUrls[key[0]][key[1]] = `/${routersTemp[index].router}`;
}
module.exports = { "routers": routers, "routerUrls": routerUrls };

