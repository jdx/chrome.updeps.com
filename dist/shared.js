var shared = angular.module('shared', []);

shared.service('AuthService', function(chrome, localStorage) {
    function messageReceived(req, sender, res) {
        localStorage.jwt = req.jwt;
    }

    function bootstrap() {
        chrome.runtime.onMessageExternal.addListener(messageReceived);
    }

    function jwt() {
        return localStorage.jwt;
    }

    function isLoggedIn() {
        !!jwt();
    }

    return {
        bootstrap: bootstrap,
        isLoggedIn: isLoggedIn,
        jwt: jwt
    };
});

shared.factory('chrome', function($window) {
    return $window.chrome;
});

shared.constant('localStorage', localStorage);

shared.service('searchService', function(auth) {
    console.log(auth.jwt());
});
