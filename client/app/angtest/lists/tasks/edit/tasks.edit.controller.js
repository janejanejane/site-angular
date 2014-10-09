'use strict';

angular.module('siteAngularApp')
  .controller('TasksEditCtrl', function ($scope, $state, $http, task, users) {
    console.log('TasksEditCtrl!!!!!!', task);

    $scope.errors = {};
    $scope.task = {};

    if(task){
      $scope.task = task;
      $scope.task.user = task.user[0];
      console.log('scope.task', $scope.task);
    }

    if(users){
      $scope.users = users;
      console.log('scope.users', $scope.users);
    }

    $scope.editTask = function(form) {
      $scope.submitted = true;
console.log('look at task>>>', $scope.task, $scope.task.user);
      if(form.$valid) {
        console.log('form valid')
        $http.put('/api/tasks/' + $scope.task._id, {
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
          console.log('error!!!!', err);
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
