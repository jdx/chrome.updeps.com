describe('GithubSvc', function() {
  var GithubService;
  var $window = {document: {title: 'dickeyxxx/updeps.com'}};

  beforeEach(module('up', function($provide) {
    $provide.value('$window', $window);
  }));

  beforeEach(inject(function(_GithubService_) {
    GithubService = _GithubService_;
  }));

  it('has the full name of the repo', function() {
    expect(GithubService.full_name).toBe('dickeyxxx/updeps.com');
  });
});
