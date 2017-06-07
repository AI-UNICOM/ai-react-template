var ROUTER = require("../router").routerUrls;
var DOM = {
    js:{
        jquery: require('!!file-loader?name=static/js/[name].[ext]!./resources/assets/jquery.min.js')
    },
    css:{},
    images: {
        logo: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/login/login-img.png'),
        user: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/header.png'),

        targetgUserRec: {//目标用户推荐里面的图片
            swfImg01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/swfImg01.jpg'),
            swfImg02: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/swfImg02.jpg'),
            swfImg03: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/swfImg03.jpg'),
            xsdImg01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/xsdImg01.jpg'),
            xsdImg02: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/xsdImg02.jpg'),
            xsdImg03: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/xsdImg03.jpg'),
            wxjtImg01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/wxjtImg01.jpg'),
            wxjtImg02: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/wxjtImg02.jpg'),
            wxjtImg03: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/wxjtImg03.jpg')
        },
        phoneImg: {
            swfImg01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/phoneImg01.jpg'),
            swfImg02: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/phoneImg02.jpg'),
            swfImg03: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/phoneImg03.jpg'),
        },
        banner: {
            banner01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/banners/banner01.jpg'),
            banner02: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/banners/banner02.jpg'),
            banner03: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/banners/banner03.jpg'),
            banner04: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/banners/banner04.jpg')
        },
        footer: {
            footer01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/footerImg01.png'),
            footer02: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/footerImg02.png')
        },
        natManImg: {
            natManImg01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/index/setIco.png'),

        },
        userQuery: {
            pkgImg01: require('!!file-loader?name=static/img/[name].[ext]!./resources/images/products/small/001.jpg')
        }

    },
    commons:[//在static中设置,就会在页面 head中按顺序自动生成
        { name: "js", value: require('!!file-loader?name=static/js/[name].[ext]!./resources/assets/artDialog/js/dialog.js') },
        { name: "js", value: require('!!file-loader?name=static/js/[name].[ext]!./resources/assets/artDialog/js/dialogHelp.js') },

        { name: "js", value: require('!!file-loader?name=static/js/[name].[ext]!./resources/assets/laydate/laydate.js') },
        // {name:"css",value:require('!!file-loader?name=static/css/[name].[ext]!./base.css')},
        // {name:"css",value:require('!!file-loader?name=static/css/[name].[ext]!./public.css')}
    ]
}
module.exports = {
    "DOM": DOM,
    "ROUTER": ROUTER
}