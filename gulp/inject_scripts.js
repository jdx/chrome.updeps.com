var gulp = require('gulp')
    , concat = require('gulp-concat');

var paths = ['src/inject/module.js', 'src/inject/**/*.js'];

module.exports = function() {
    gulp.src(paths)
      .pipe(concat('inject.js'))
      .pipe(gulp.dest('./dist'));
};
