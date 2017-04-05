const fs = require('fs');
const rimraf = require('rimraf');
const DIR = require('./path.config');
rimraf(DIR.BUILD, fs, function cb() {
  console.log('build目录已清空');
});