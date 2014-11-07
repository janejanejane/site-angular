'use strict';

describe('Service: hoi', function () {

  // load the service's module
  beforeEach(module('siteAngularApp'));

  // instantiate service
  var hoi;
  beforeEach(inject(function (_hoi_) {
    hoi = _hoi_;
  }));

  it('should do something', function () {
    expect(!!hoi).toBe(true);
  });

});
