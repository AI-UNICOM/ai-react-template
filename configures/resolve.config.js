const path=require('path');
const DIR = require('./path.config');

module.exports={
    alias:{
        components:DIR.COMPONENTS,
        resources:DIR.RESOURCES,
        modules:DIR.MODULES,
        domConfigRes:path.resolve(DIR.SRC,'./config.js')
    },
    extensions: ['.js','.jsx','.xtpl','.css', '.scss']
}