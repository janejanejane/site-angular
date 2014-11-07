'use strict';

angular.module('siteAngularApp')
  .controller('HoiAddAlertCtrl', function ($scope, $state, $http) {
    console.log('HoiAddAlertCtrl!!!!!!');

    $scope.errors = {};
    $scope.alert = {};
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();
    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;

    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.addAlert = function(form) {
      $scope.submitted = true;
        console.log('look at alert>>>', $scope.alert);
        if(form.$valid) {
            $http.post('/api/alerts', {
                alertName: $scope.alert.alertName,
                alertTime: $scope.alerttime,
                email: $scope.alert.email,
                active: true
            })
            .then( function() {
                console.log('inside alert!!!');
                // alert created, redirect
                $state.go('hoi.alerts', null, { reload: true });
            })
            .catch( function(err) {
                err = err.data;
                $scope.errors = {};

                // Update validity of form fields that match the mongoose errors
                angular.forEach(err.errors, function(error, field) {
                    form[field].$setValidity('mongoose', false);
                    $scope.errors[field] = error.message;
                });
            });
        }
    };
  });
