angular.module('up')
.service('UpdepsService', function($http) {
  return {
    getMetaInfo: function(repoName) {
      return $http.get('http://updeps.dev/api/v1/repositories/' + repoName);
    }
  };
});
