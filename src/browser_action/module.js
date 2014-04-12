var app = angular.module('browser_action', []);

app.run(function($window) {
    $window.foobar = function(jwt) {
        console.log(jwt);
    };
    console.log('loaded');
});
