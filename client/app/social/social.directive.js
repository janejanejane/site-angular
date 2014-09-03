'use strict';

angular.module('siteAngularApp')
  .directive('social', function () {
    return {
      templateUrl: 'app/social/social.html',
      restrict: 'E',
      replace: true
    };
  });