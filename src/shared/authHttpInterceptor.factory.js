shared.factory('authInterceptor', function(auth) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if (auth.jwt()) {
                config.headers.Authorization = 'Bearer ' + auth.jwt();
            }
            return config;
        }
    };
});

shared.config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
