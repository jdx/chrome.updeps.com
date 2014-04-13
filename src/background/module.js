var app = angular.module('app', [
        'shared'
]);

app.run(function(omnibox, auth) {
    omnibox.bootstrap();
    auth.bootstrap();
});
