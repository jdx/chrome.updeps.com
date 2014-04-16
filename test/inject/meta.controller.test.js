describe('MetaCtrl', function() {
  var ctrl, $scope;
  var MockUpdepsService = {
    getMetaInfo: function() {
      return { success: function(cb) { cb({version: '1.0.1'}); } };
    }
  };

  beforeEach(module('up', function($provide) {
    $provide.value('UpdepsService', MockUpdepsService);
  }));
  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    ctrl = $controller('MetaCtrl', {$scope: $scope});
  }));

  it('works', function() {
    expect($scope.version).toBe('1.0.1');
  });
});
