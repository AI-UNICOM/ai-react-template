const path =require('path');
const DIR = require('./path.config');

module.exports= {
    path:path.resolve(DIR.BUILD),
    publicPath:'/',
    filename:'[name]/entry.js',
    chunkFilename:'[id].bundle.js'
}