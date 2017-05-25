const path= require('path');
const DIR = require('./path.config');
const ENV = require('./env.config');
const entrys={
    "libs": [
      ...ENV.IS_DEBUG ? [] : ['es5-shim',
      'es5-shim/es5-sham',
      // 'core-js',
      'es6-promise',
      'babel-polyfill',
      'console-polyfill',
      'fetch-detector',
      'fetch-ie8'],
      path.resolve(DIR.RESOURCES,`./assets/global`)
    ]
};

DIR.PAGES.forEach(name=>{
    entrys[name]=path.resolve(DIR.VIEWS,`./${name}/index`)
});
// entrys["home/demo"]=path.resolve(DIR.VIEWS,`./home/demo/index`)
module.exports=entrys;