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
        name: 'static',
        filename: 'static/libs.js',
        minChunks: 4,
    }),
    new ExtractTextPlugin('[name]/style.css'),
    new webpack.DefinePlugin({
        IS_PRODUCTION: ENV.IS_PRODUCTION,
        IS_TEST: ENV.IS_TEST,
        ROUTER: JSON.stringify(ROUTER)
    })
];
if(!ENV.IS_DEBUG){
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, screw_ie8: false },
        mangle: { screw_ie8: false },
        output: { screw_ie8: false }
    }));
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}


DIR.PAGES.forEach(name => {
    plugins.push(new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(DIR.VIEWS, `./${name}/xtpl.js`),
        chunks: ["static", name],//加载js,
        inject: "body",//默认把js插入到body minify，生成压缩后的HTML代码
        hash: true//生成缓存
    }));
});




module.exports = plugins;