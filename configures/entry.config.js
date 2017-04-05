const path= require('path');
const DIR = require('./path.config');
const entrys={
    "global":path.resolve(DIR.RESOURCES,`./assets/global`)
    // "global": [
    //   'es6-promise',
    //   'fetch-ie8',
    //   'es5-shim',
    //   'es5-shim/es5-sham'
    // ]
};

DIR.PAGES.forEach(name=>{
    entrys[name]=path.resolve(DIR.VIEWS,`./${name}/index`)
});
module.exports=entrys;