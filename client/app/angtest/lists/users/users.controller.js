'use strict';

angular.module('siteAngularApp')
  .controller('UsersCtrl', function ($scope, $http, socket) {
    console.log('UsersCtrl!!!!!!');

    $scope.user = {};

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
      socket.syncUpdates('user', $scope.users);
    });
  });
