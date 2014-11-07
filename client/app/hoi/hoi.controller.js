'use strict';

angular.module('siteAngularApp')
  .controller('HoiCtrl', function ($scope, $q, HoiService) {
    console.log('HoiCtrl loaded!');

    HoiService.getAlertsByMonth(function(alerts){
        $scope.alerts = alerts;
    });

    $scope.now = new Date();

    $scope.checkIfPast = function(birthday){
        var deferred = $q.defer();
        try {
            HoiService.hasPassed(birthday, function(value){
                console.log(value);
                deferred.promise = value;
            });
        } catch(e){
          deferred.reject(e);
        }
        return deferred.promise;
    };
  });
