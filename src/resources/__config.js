module.exports={
    js:{
        jquery: require('!!file-loader?name=static/js/[name].[ext]!./assets/jquery.min.js'),
        html5shiv:require('!!file-loader?name=static/js/[name].[ext]!./assets/html5shiv.min.js'),
        respond:require('!!file-loader?name=static/js/[name].[ext]!./assets/respond.min.js')
    },
    css:{},
    images:{
        logo:require('!!file-loader?name=static/img/[name].[ext]!./images/logo.png')
    },
    commons:[//在static中设置,就会在页面 head中按顺序自动生成
        {name:"css",value:require('!!file-loader?name=static/css/[name].[ext]!./base.css')}
    ]
}