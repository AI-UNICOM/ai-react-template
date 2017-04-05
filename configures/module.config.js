const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIR = require('./path.config');
const ENV = require('./env.config');



function doCssByEnv(cssloaders){
    if(!Array.isArray(cssloaders)){
        cssloaders=cssloaders?[cssloaders]:[];
    }
    if(ENV.IS_PRODUCTION){
        cssloaders.unshift({
            loader: 'css-loader',
            options:{
                minimize: true,
                '-autoprefixer': true,
            }
        });
        return ExtractTextPlugin.extract(cssloaders);
    }else{
        cssloaders.unshift('style-loader','css-loader');
        return cssloaders;
    }
}

module.exports={
    rules:[
         {
            test: /\.js$/,
            include:[DIR.SRC],
            loaders: ['babel-loader']
        },
        {
            test: /\.js$/,
            include:[path.join(DIR.SRC,"./views")],
            enforce: "post",
            loaders: ['es3ify-loader']
        },
        {
            test: /\.html$/,
            include:[DIR.SRC],
            loader: 'html-loader'
        },
        {
            test: /\.xtpl$/,
            include:[DIR.SRC],
            loader:'xtpl-loader'
        },
        {
            test:/\.css$/,
            include:[DIR.SRC],
            use:doCssByEnv()
        },
        {
            test:/\.scss$/,
            include:[DIR.SRC],
            use:doCssByEnv({
                loader:"postcss-loader",
                options: {
                    plugins() {
                        return [
                            require('precss'),
                            // require('nextcss'),
                            require('postcss-import'),
                            require('autoprefixer')({
                                remove: false,
                                browsers: ['ie >= 8', '> 1% in CN'],
                            })
                        ];
                    }
                }
            })
        },
        {
            test:/\.(png|jpg|gif)$/,
            include:[DIR.SRC],
            loader:'url-loader',
            options: {
                limit: 8192,
                name: 'static/img/[hash].[ext]',
            }
        },
        {
             test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
             include:[DIR.SRC],
             loader:'file-loader',
             options:{
                 name:'static/fonts/[name].[ext]'
             }
        }
    ]
}