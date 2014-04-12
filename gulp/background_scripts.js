var gulp = require('gulp')
    , concat = require('gulp-concat');

var paths = ['src/background/module.js', 'src/background/**/*.js'];

module.exports = function() {
    gulp.src(paths)
      .pipe(concat('background.js'))
      .pipe(gulp.dest('./dist'));
};
