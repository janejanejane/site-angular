'use strict';

angular.module('siteAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('hoi', {
        url: '/hoi',
        templateUrl: 'app/hoi/hoi.html',
        controller: 'HoiCtrl'
      });
  });