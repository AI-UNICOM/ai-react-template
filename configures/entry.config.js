const path= require('path');
const DIR = require('./path.config');
const entrys={
    "global":path.resolve(DIR.RESOURCES,`./assets/global`)
};

DIR.PAGES.forEach(name=>{
    entrys[name]=path.resolve(DIR.VIEWS,`./${name}/index`)
});
module.exports=entrys;