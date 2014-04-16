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
