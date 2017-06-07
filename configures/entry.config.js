const path= require('path');
const DIR = require('./path.config');
const ENV = require('./env.config');
const entrys={
    "static": [
      ...ENV.IS_DEBUG ? [] : ['es5-shim',
      'es5-shim/es5-sham',
      'es6-promise',
      'babel-polyfill',
      'console-polyfill',
      'fetch-detector',
      'fetch-ie8'],
      path.resolve(DIR.SRC,`./global`)
    ]
};

const {name,argvs}=ENV.ORDER;
if(name==="dist"&&argvs.length){//单独打包一个页面
    const _name_=argvs[0].replace(/\./,'/')
    entrys[_name_]=path.resolve(DIR.VIEWS,`./${_name_}/index`)
}else{
    DIR.PAGES.forEach(name=>{
        entrys[name]=path.resolve(DIR.VIEWS,`./${name}/index`)
    });
}
module.exports=entrys;