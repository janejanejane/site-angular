'use strict';

angular.module('siteAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('angtest.home', {
        url: '/home',
        templateUrl: 'app/angtest/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('angtest.users', {
        url: '/users',
        templateUrl: 'app/angtest/users/users.html',
        controller: 'UsersCtrl'
      })
      .state('angtest.add', {
        url: '/add',
        templateUrl: 'app/angtest/users/add/users.add.html',
        controller: 'UsersAddCtrl'
      });
  });