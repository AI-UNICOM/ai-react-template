var tpl = require('./index.xtpl');
var domConfigRes=require('domConfigRes');
domConfigRes.DOM.js.hasShimES5=true

var Xtemplate = require('xtemplate/lib/runtime');

module.exports=new Xtemplate(tpl).render({
  DOM:domConfigRes.DOM
})