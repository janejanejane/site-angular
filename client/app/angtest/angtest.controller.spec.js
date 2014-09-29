'use strict';

describe('Controller: AngtestCtrl', function () {

  // load the controller's module
  beforeEach(module('siteAngularApp'));

  var AngtestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngtestCtrl = $controller('AngtestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
