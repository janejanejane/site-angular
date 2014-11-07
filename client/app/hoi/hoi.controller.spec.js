'use strict';

describe('Controller: HoiCtrl', function () {

  // load the controller's module
  beforeEach(module('siteAngularApp'));

  var HoiCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HoiCtrl = $controller('HoiCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
