'use strict';

angular.module('siteAngularApp')
  .controller('UsersCtrl', function ($scope, $http, socket) {
    console.log('UsersCtrl!!!!!!');

    $scope.users = [];

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
      socket.syncUpdates('user', $scope.users);
    });

    $scope.addUser = function() {
      if(!$scope.newUser) {
        return;
      }
      console.log('inside user!!!');
      $http.post('/api/users', $scope.newUser);
      $scope.newUser = '';
    };
  });
