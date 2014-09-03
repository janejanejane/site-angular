'use strict';

describe('Directive: projects', function () {

  // load the directive's module and view
  beforeEach(module('siteAngularApp'));
  beforeEach(module('app/projects/projects.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<projects></projects>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the projects directive');
  }));
});