(function() {
    var repositoryMeta = document.querySelector('.repository-meta');
    var template = "<div ng-cloak ng-app='updeps'>" +
    "<div ng-controller='MetaController'>" +
    '<h3>Latest version: {{version}}</h3>' +
    '</div>' +
    '</div>';
    if (repositoryMeta) {
      repositoryMeta.insertAdjacentHTML('afterend', template);
    }
})();
