describe('MetaCtrl', function() {
  var ctrl, $scope;

  var MockGithubService = {
    fullName: 'dickeyxxx/foobar'
  };

  var MockUpdepsService = {
    publishVisit: jasmine.createSpy(),
    getMetaInfo: function() {
      return { success: function(cb) { cb({name: 'dickeyxxx/foobar', version: '1.0.1'}); } };
    }
  };

  beforeEach(module('updeps', function($provide) {
    $provide.value('UpdepsService', MockUpdepsService);
    $provide.value('GithubService', MockGithubService);
  }));

  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    ctrl = $controller('MetaCtrl', {$scope: $scope});
  }));

  it('gets the version', function() {
    expect($scope.version).toBe('1.0.1');
  });

  it('publishes visit', function() {
    expect(MockUpdepsService.publishVisit).toHaveBeenCalledWith('dickeyxxx/foobar');
  });
});
