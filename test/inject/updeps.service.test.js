describe('UpdepsService', function() {
  var UpdepsService, $httpBackend;

  var AuthService = {
    jwt: function() { return 'token'; }
  };

  beforeEach(module('updeps', function($provide) {
    $provide.value('AuthService', AuthService);
  }));

  beforeEach(inject(function(_$httpBackend_, _UpdepsService_) {
    UpdepsService = _UpdepsService_;
    $httpBackend = _$httpBackend_;
  }));

  describe('#getMetaInfo', function() {
    beforeEach(function() {
      $httpBackend.expectGET('http://updeps.dev/api/v1/repositories/dickeyxxx/foobar')
      .respond({name: 'foobar'});
    });

    it('has the full name of the repo', function() {
      UpdepsService.getMetaInfo('dickeyxxx/foobar')
      .success(function(info) {
        expect(info.name).toBe('foobar');
      });
      $httpBackend.flush();
    });
  });

  describe('#publishVisit', function() {
    beforeEach(function() {
      $httpBackend.expectPOST('http://updeps.dev/api/v1/visits', {jwt: 'token', repo: 'dickeyxxx/foobar'})
      .respond();
    });
    it('sends the visit to updeps.com', function() {
      UpdepsService.publishVisit('dickeyxxx/foobar');
      $httpBackend.verifyNoOutstandingExpectation();
    });
  });
});
