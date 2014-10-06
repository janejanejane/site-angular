'use strict';

angular.module('siteAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/angtest/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('angtest.home', {
        url: '/angtest',
        templateUrl: 'app/angtest/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('angtest.users', {
        url: '/users',
        templateUrl: 'app/angtest/lists/users/users.html',
        controller: 'UsersCtrl',
        authenticate: true
      })
      .state('angtest.users.add', {
        url: '/add',
        templateUrl: 'app/angtest/lists/users/add/users.add.html',
        controller: 'UsersAddCtrl',
        authenticate: true
      })
      .state('angtest.tasks', {
        url: '/tasks',
        templateUrl: 'app/angtest/lists/tasks/tasks.html',
        controller: 'TasksCtrl',
        authenticate: true
      });
  });