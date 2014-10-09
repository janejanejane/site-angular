'use strict';

angular.module('siteAngularApp')
  .controller('TasksAddCtrl', function ($scope, $state, $http, users) {
    console.log('TasksAddCtrl!!!!!!', users);

    $scope.errors = {};
    $scope.task = {};

    if(users){
      $scope.users = users;
      console.log('scope.users', $scope.users);
    }

    $scope.addTask = function(form) {
      $scope.submitted = true;
console.log('look at task>>>', $scope.task);
      if(form.$valid) {
        $http.post('/api/tasks', {
          taskName: $scope.task.taskName,
          description: $scope.task.description,
          user: $scope.task.user
        })
        .then( function() {
          console.log('inside task!!!');
          // Account created, redirect
          $state.go('angtest.tasks', null, { reload: true });
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
