
const entry = require('./configures/entry.config.js');
const output = require('./configures/output.config.js');
const plugins =require('./configures/plugins.config.js');
const resolve = require('./configures/resolve.config.js');
const modules = require('./configures/module.config.js');
const externals = require('./configures/externals.config.js');

module.exports= Object.assign({entry,output,plugins,resolve,module:modules},externals);