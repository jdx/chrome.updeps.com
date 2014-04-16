angular.module('updeps')
.service('GithubService', function($window) {
  return {
    fullName: $window.document.title
  };
});
