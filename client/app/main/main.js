'use strict';

angular.module('siteAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('angtest', {
        url: '/angtest',
        templateUrl: 'app/angtest/angtest.html',
        controller: 'AngtestCtrl'
      })
      .state('angtest.home', {
        url: '/home',
        templateUrl: 'app/angtest/home/home.html',
        controller: 'AngtestHomeCtrl'
      })
      .state('angtest.home.users', {
        url: '/users',
        templateUrl: 'app/angtest/users/users.html',
        controller: 'UsersCtrl'
      });
  });