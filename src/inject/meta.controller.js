var up = angular.module('up');

up.controller('MetaCtrl', function($scope, $http, GithubService, UpdepsService) {
  UpdepsService.getMetaInfo(GithubService.fullName).success(function(repo) {
    $scope.version = repo.version;
  });
});
