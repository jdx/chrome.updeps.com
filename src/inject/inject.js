chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        load();
	}
	}, 10);
});

function load() {
    chrome.extension.sendMessage({
        foo: 'bar'
    });
}
