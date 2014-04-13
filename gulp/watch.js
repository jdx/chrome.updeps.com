var gulp = require('gulp');

module.exports = function() {
    gulp.watch('./src/background/*.js', ['background_scripts']);
    gulp.watch('./src/browser_action/*.js', ['browser_action_scripts']);
    gulp.watch('./src/inject/*.js', ['inject_scripts']);
    gulp.watch('./src/shared/*.js', ['shared_scripts']);
};
