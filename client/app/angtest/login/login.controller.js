'use strict';

angular.module('siteAngularApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $state) {
    $scope.user = {
      email: 'sub@sub.com',
      password: 'sub'
    };
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          // $location.path('/home');
          $state.go('angtest.home');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
