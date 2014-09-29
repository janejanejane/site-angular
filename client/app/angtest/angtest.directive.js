'use strict';

angular.module('siteAngularApp')
  .directive('angtest', function () {
    return {
      templateUrl: 'app/angtest/angtest.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });