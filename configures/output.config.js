const path =require('path');
const DIR = require('./path.config');
const Config=require('../package.json').Config;
const ENV=require('./env.config')

module.exports= {
    path:path.resolve(DIR.BUILD,`./${Config.publicPath}`),
    publicPath:ENV.IS_PRODUCTION?Config.publicPath:'/',
    filename:'[name]/entry.js',
    chunkFilename:'[id].bundle.js'
}