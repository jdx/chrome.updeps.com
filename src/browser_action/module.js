var app = angular.module('browser_action', []);

app.run(function($window, chrome) {
    $window.foobar = function(jwt) {
        console.log(jwt);
    };
    var page = chrome.extension.getViews()[1];
    console.log(page.localStorage);
    var h1 = page.window.document.createElement("h1");
    h1.textContent = 'foooooo';
    window.document.body.appendChild(h1);
});
