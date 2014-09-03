'use strict';

angular.module('siteAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    // $http.get('/api/twitterline').success(function(twitterfeed) {
    //   $scope.twitterfeed = twitterfeed;
    // });
  });
