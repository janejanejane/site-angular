'use strict';

angular.module('siteAngularApp')
  .directive('presentations', function () {
    return {
      templateUrl: 'app/presentations/presentations.html',
      restrict: 'E',
      replace: true
    };
  });