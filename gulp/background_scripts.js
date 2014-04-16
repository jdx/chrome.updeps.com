var gulp = require('gulp')
    , concat = require('gulp-concat');

var paths = ['src/background/module.js', 'src/background/**/*.js'];

module.exports = function() {
    return gulp.src(paths)
      .pipe(concat('background.js'))
      .pipe(gulp.dest('./dist'));
};
