module.exports={
    devServer:{
        contentBase: './build/',
        host: 'localhost',
        port: 3000, // 默认8080
        inline: true, // 可以监控js变化
        hot: true, // 热启动
        compress: true,
        watchContentBase: false
    },
    externals:{
        jquery: 'window.$',
        dialog:'window.dialog'
    },
    devtool: 'source-map',
}