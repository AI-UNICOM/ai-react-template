var ROUTER = require("../../router").routerUrls;
var DOM = {
    js:{
        jquery: require('!!file-loader?name=static/js/[name].[ext]!./assets/jquery.min.js')
    },
    css:{},
    images:{
        logo:require('!!file-loader?name=static/img/[name].[ext]!./images/logo.png')
    },
    commons:[//在static中设置,就会在页面 head中按顺序自动生成
        {name:"css",value:require('!!file-loader?name=static/css/[name].[ext]!./base.css')}
    ]
}
module.exports = {
    "DOM": DOM,
    "ROUTER": ROUTER
}