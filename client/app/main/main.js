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
      });
  });