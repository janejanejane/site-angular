'use strict';

angular.module('siteAngularApp')
  .controller('UsersAddCtrl', function ($scope, $state, Auth) {
    console.log('UsersAddCtrl!!!!!!');

    $scope.errors = {};
    $scope.user = {};

    $scope.addUser = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          firstName: $scope.user.firstName,
          lastName: $scope.user.lastName,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          console.log('inside user!!!');
          // $scope.user = {};
          // Account created, redirect
          $state.go('angtest.users');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };
  });
