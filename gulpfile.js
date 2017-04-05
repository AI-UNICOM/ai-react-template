//用于生成文件,用于测试IE环境
var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('default', function () {
  connect.server({
  	port:"3001",
    root:"build",
    name: 'Dev App',
    livereload: false
  });
});