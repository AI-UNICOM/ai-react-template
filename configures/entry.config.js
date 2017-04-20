const path= require('path');
const DIR = require('./path.config');
const entrys={
    "global": [
      'es5-shim',
      'es5-shim/es5-sham',
      'es6-promise',
      'babel-polyfill',
      'fetch-detector',
      'fetch-ie8',
      path.resolve(DIR.RESOURCES,`./assets/global`)
    ]
};

DIR.PAGES.forEach(name=>{
    entrys[name]=path.resolve(DIR.VIEWS,`./${name}/index`)
});
module.exports=entrys;