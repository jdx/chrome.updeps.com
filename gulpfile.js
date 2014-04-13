var gulp = require('gulp');

[
    'watch',
    'background_scripts',
    'browser_action_scripts',
    'shared_scripts',
    'inject_scripts'
].forEach(function(name) {
    gulp.task(name, require('./gulp/' + name));
});

gulp.task('build', [
    'background_scripts',
    'browser_action_scripts',
    'shared_scripts',
    'inject_scripts'
]);
gulp.task('default', ['build', 'watch']);
