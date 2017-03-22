const path = require('path');
const DIR = require('./path.config');
module.exports={
    rules:[
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
            use:['style-loader', 'css-loader']
        },
        {
            test:/\.scss$/,
            include:[DIR.SRC],
            use:['style-loader', 'css-loader',{
                loader:"postcss-loader",
                options: {
                    plugins: function () {
                        return [
                            require('precss'),
                            require('autoprefixer')({
                                remove: false,
                                browsers: ['ie >= 8', '> 1% in CN'],
                            })
                        ];
                    }
                }
            }]
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