shared.service('auth', function(chrome, localStorage) {
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
