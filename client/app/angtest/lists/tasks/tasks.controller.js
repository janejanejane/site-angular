'use strict';

angular.module('siteAngularApp')
  .controller('TasksCtrl', function ($scope, $http, $location, socket) {
    console.log('TasksCtrl!!!!!!');

    $scope.task = {};

    $scope.tabs = [
        { title:'Task List', link:'angtest.tasks', active:($location.url()==='/angtest/tasks') }
      ];

    $http.get('/api/tasks').success(function(tasks) {
      $scope.tasks = tasks;
      socket.syncUpdates('task', $scope.tasks);
    });
  });
