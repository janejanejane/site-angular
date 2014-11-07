'use strict';

angular.module('siteAngularApp')
  .controller('HoiCtrl', function ($scope, $q, socket, HoiService) {
    console.log('HoiCtrl loaded!');

    HoiService.getAlertsByMonth(function(alerts){
        $scope.alerts = alerts;
        socket.syncUpdates('alert', $scope.alerts);
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
