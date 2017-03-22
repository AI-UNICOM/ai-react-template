const path=require('path');
const DIR = require('./path.config');

module.exports={
    alias:{
        components:DIR.COMPONENTS,
        resources:DIR.RESOURCES,
        modules:DIR.MODULES,
        domConfigRes:path.resolve(DIR.RESOURCES,'./__config.js')
    },
    extensions: ['.js','.xtpl','.css', '.scss']
}