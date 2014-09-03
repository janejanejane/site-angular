'use strict';

angular.module('siteAngularApp')
  .directive('projects', function () {
    return {
      templateUrl: 'app/projects/projects.html',
      restrict: 'E',
      replace: true
    };
  });