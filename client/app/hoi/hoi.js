'use strict';

angular.module('siteAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hoi.alerts', {
        url: '/',
        templateUrl: 'app/hoi/hoi.html',
        controller: 'HoiCtrl'
      })
      .state('hoi.alerts.add', {
        url: 'add',
        templateUrl: 'app/hoi/add/add.html',
        controller: 'HoiAddAlertCtrl'
      });
  });