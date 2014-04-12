app.service('omnibox', function(chrome) {
    function inputChanged(text, suggest) {
        console.log('inputChanged: ', text);
        suggest([{
            content: text + ' one',
            description: '<match>' + text + '</match>bar <dim>sslklj</dim> <url>https://github.com/dickeyxxx/updeps.com</url>'
        }]);
    }
    function inputEntered(text) {
        alert(text);
    }
    return {
        bootstrap: function() {
            chrome.omnibox.onInputChanged.addListener(_.debounce(inputChanged, 150));
            chrome.omnibox.onInputEntered.addListener(inputEntered);
        }
    };
});
