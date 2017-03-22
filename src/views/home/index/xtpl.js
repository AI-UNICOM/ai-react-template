var tpl = require('./index.xtpl');
var domConfigRes=require('domConfigRes');

var Xtemplate = require('xtemplate/lib/runtime');

module.exports=new Xtemplate(tpl).render({
  DOM:domConfigRes
})