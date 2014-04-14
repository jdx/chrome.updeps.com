up.controller('MetaController', function($scope, $http, $window) {
  var github = $window.document.title;
  $http.get('http://updeps.dev/api/v1/repositories/' + github).success(function(repo) {
    $scope.version = repo.version;
  });
});
