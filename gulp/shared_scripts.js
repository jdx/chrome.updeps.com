var gulp = require('gulp')
    , concat = require('gulp-concat');

var paths = ['src/shared/module.js', 'src/shared/**/*.js'];

module.exports = function() {
    gulp.src(paths)
      .pipe(concat('shared.js'))
      .pipe(gulp.dest('./dist'));
};
