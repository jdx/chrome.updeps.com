var gulp = require('gulp')
    , concat = require('gulp-concat');

var paths = ['src/browser_action/module.js', 'src/browser_action/**/*.js'];

module.exports = function() {
    return gulp.src(paths)
      .pipe(concat('browser_action.js'))
      .pipe(gulp.dest('./dist'));
};
