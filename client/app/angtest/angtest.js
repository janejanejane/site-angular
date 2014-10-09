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
      })
      .state('angtest.tasks.add', {
        url: '/add',
        templateUrl: 'app/angtest/lists/tasks/add/tasks.add.html',
        resolve: {
          users: function($http, $q){
            var deferred = $q.defer();
            console.log('resolve users');
            try{
              $http.get('/api/users').success(function(users) {
                 deferred.resolve(users);
                 console.log('users value', users);
              });
            }catch(e){
              deferred.reject(e);
            }
            return deferred.promise;
          }
        },
        controller: 'TasksAddCtrl',
        authenticate: true
      })
      .state('angtest.tasks.edit', {
        url: '/edit/:taskId',
        templateUrl: 'app/angtest/lists/tasks/edit/tasks.edit.html',
        resolve: {
          task: function($http, $stateParams, $q){
            var deferred = $q.defer();
            try{
              $http.get('/api/tasks/' + $stateParams.taskId).success(function(task) {
                 deferred.resolve(task);
              });
            }catch(e){
              deferred.reject(e);
            }
            return deferred.promise;
          },
          users: function($http, $q){
            var deferred = $q.defer();
            console.log('resolve users');
            try{
              $http.get('/api/users').success(function(users) {
                 deferred.resolve(users);
                 console.log('users value', users);
              });
            }catch(e){
              deferred.reject(e);
            }
            return deferred.promise;
          }
        },
        controller: 'TasksEditCtrl',
        authenticate: true
      });
  });