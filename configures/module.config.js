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
        // {
        //     test: /\.jsx?$/,
        //     include:[DIR.SRC],
        //     enforce: "post",
        //     loaders: ['es3ify-loader']
        // },
        {
            test: /\.jsx$/,
            include:[DIR.SRC],
            loader: 'babel-loader',
            query: {
            // https://github.com/babel/babel-loader#options
            cacheDirectory: ENV.IS_DEBUG,

            // https://babeljs.io/docs/usage/options/
            babelrc: false,
            presets: [
                'react',
                'es2015-loose',
                'stage-1',
            ],
            plugins: [
                'transform-runtime',
                ...ENV.IS_DEBUG ? [] : [
                'transform-react-remove-prop-types',
                'transform-react-constant-elements',
                'transform-react-inline-elements',
                'transform-es3-modules-literals',
                'transform-es3-member-expression-literals',
                'transform-es3-property-literals'
                ],
            ],
            },
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
            // include:[DIR.SRC],
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