var gulp = require('gulp')
    , concat = require('gulp-concat');

var paths = ['src/browser_action/app.js', 'src/browser_action/**/*.js'];

module.exports = function() {
    gulp.src(paths)
      .pipe(concat('browser_action.js'))
      .pipe(gulp.dest('./dist'));
};
