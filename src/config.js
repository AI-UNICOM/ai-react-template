var ROUTER = require("../router").routerUrls;
var DOM = {
    js:{
        jquery: require('!!file-loader?name=static/js/[name].[ext]!./resources/assets/jquery.min.js')
    },
    css:{},
    images: {},
    commons:[//在static中设置,就会在页面 head中按顺序自动生成
        
        {name:"css",value:require('!!file-loader?name=static/css/[name].[ext]!./resources/base.css')}
    ]
}
module.exports = {
    "DOM": DOM,
    "ROUTER": ROUTER
}