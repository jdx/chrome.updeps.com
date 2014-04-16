angular.module('updeps')
.controller('MetaCtrl', function($scope, $http, GithubService, UpdepsService) {
  UpdepsService.getMetaInfo(GithubService.fullName).success(function(repo) {
    $scope.version = repo.version;
  });
  UpdepsService.publishVisit(GithubService.fullName);
});
