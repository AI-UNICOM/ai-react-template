const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DIR = require('./path.config');
const ENV = require('./env.config');
const ROUTER = require('../router').routerUrls;



const plugins = [
    new webpack.ProvidePlugin({
        $: 'jquery',
        dialog: "dialog"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'libs',
        filename: 'static/libs.js',
        minChunks: 4,
    }),
    new ExtractTextPlugin('[name]/styles.css'),
    new webpack.DefinePlugin({
        IS_PRODUCTION: ENV.IS_PRODUCTION,
        IS_TEST: ENV.IS_TEST,
        ROUTER: JSON.stringify(ROUTER)
    })
];

DIR.PAGES.forEach(name => {
    plugins.push(new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(DIR.VIEWS, `./${name}/xtpl.js`),
        chunks: ["global", "libs", name],//加载js,
        inject: "body",//默认把js插入到body minify，生成压缩后的HTML代码
        hash: true//生成缓存
    }));
});




module.exports = plugins;