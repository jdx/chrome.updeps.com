angular.module('up')
.service('GithubService', function($window) {
  return {
    full_name: $window.document.title
  };
});
