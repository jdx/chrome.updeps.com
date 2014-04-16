describe('UpdepsService', function() {
  var UpdepsService, $httpBackend;

  beforeEach(module('up'));

  beforeEach(inject(function(_$httpBackend_, _UpdepsService_) {
    UpdepsService = _UpdepsService_;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://updeps.dev/api/v1/repositories/dickeyxxx/foobar')
    .respond({name: 'foobar'});
  }));

  it('has the full name of the repo', function() {
    UpdepsService.getMetaInfo('dickeyxxx/foobar')
    .success(function(info) {
      expect(info.name).toBe('foobar');
    });
    $httpBackend.flush();
  });
});
