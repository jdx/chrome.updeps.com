var app = angular.module('app', [
        'shared'
]);

app.run(function(omnibox, auth) {
    omnibox.bootstrap();
    auth.bootstrap();
});

app.service('omnibox', function(chrome, auth, $http) {
    function inputChanged(text, suggest) {
        chrome.omnibox.setDefaultSuggestion({
            description: 'Search for <match>' + text + '</match> on updeps.com'
        });
        $http.get('http://updeps.dev/api/v1/repositories/search', {
            params: {q: text, per_page: 5}
        })
        .success(function(repos) {
            suggest(
                repos.map(function(r) {
                    description = r.full_name + ' <url>https://github.com/' + r.full_name + '</url> <dim>' + r.stargazers_count + ' stars</dim>'
                    description = description.split(text).join('<match>' + text + '</match>');
                    return {
                        content: r.full_name,
                        description: description
                    }
                })
            );
        });
    }
    function inputEntered(text) {
        chrome.tabs.update({ "url": "https://github.com/" + text });
    }
    return {
        bootstrap: function() {
            chrome.omnibox.onInputChanged.addListener(_.debounce(inputChanged, 150));
            chrome.omnibox.onInputEntered.addListener(inputEntered);
        }
    };
});
