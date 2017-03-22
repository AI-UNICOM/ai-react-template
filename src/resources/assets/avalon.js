var avalon = require('./avalon.ie.js');

avalon.config({
    debug: false,
    interpolate: ['{%','%}']
});


module.exports=avalon;