'use strict';

angular.module('siteAngularApp')
  .controller('AngtestCtrl', function ($scope, $location) {

    $scope.tabs = [
        { title:'User List', link:'angtest.users', active:($location.url()==='/angtest/users') },
        { title:'Add User', link:'angtest.add', active:($location.url()==='/angtest/add') }
      ];
  });
