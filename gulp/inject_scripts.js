var gulp = require('gulp')
    , concat = require('gulp-concat');

var paths = ['src/inject/module.js', 'src/inject/**/*.js'];

module.exports = function() {
    return gulp.src(paths)
      .pipe(concat('inject.js'))
      .pipe(gulp.dest('./dist'));
};
