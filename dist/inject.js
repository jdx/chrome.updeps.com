angular.module('updeps', [
  'shared'
]);

angular.module('updeps')
.service('GithubService', function($window) {
  return {
    fullName: $window.document.title
  };
});

(function() {
    var repositoryMeta = document.querySelector('.repository-meta');
    var template = "<div ng-cloak ng-app='updeps'>" +
    "<div ng-controller='MetaCtrl'>" +
    '<h3>Latest version: {{version}}</h3>' +
    '</div>' +
    '</div>';
    if (repositoryMeta) {
      repositoryMeta.insertAdjacentHTML('afterend', template);
    }
})();

angular.module('updeps')
.controller('MetaCtrl', function($scope, $http, GithubService, UpdepsService) {
  UpdepsService.getMetaInfo(GithubService.fullName).success(function(repo) {
    $scope.version = repo.version;
  });
  UpdepsService.publishVisit(GithubService.fullName);
});

angular.module('updeps')
.service('UpdepsService', function($http, AuthService) {
  return {
    getMetaInfo: function(repoName) {
      return $http.get('http://updeps.dev/api/v1/repositories/' + repoName);
    },
    publishVisit: function(repoName) {
      return $http.post('http://updeps.dev/api/v1/visits', {jwt: AuthService.jwt(), repo: repoName});
    }
  };
});
