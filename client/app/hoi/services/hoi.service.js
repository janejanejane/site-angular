'use strict';

angular.module('siteAngularApp')
  .factory('HoiService', function ($http, socket) {
    var HoiService = {};

    HoiService.getAlertsByMonth = function(callback){
        $http.get('/api/alerts').success(function(alerts) {
            var months = {
                    0: 'January',
                    1: 'February',
                    2: 'March',
                    3: 'April',
                    4: 'May',
                    5: 'June',
                    6: 'July',
                    7: 'August',
                    8: 'September',
                    9: 'October',
                    10: 'November',
                    11: 'December'
                },
                records = [];

            for(var i = 0; i < 12; i++){
                records.push({
                    month: months[i],
                    celebrators: alerts[i]
                });
            }
            callback(records);
        });
    };

    HoiService.hasPassed = function(date, callback){
        var today = new Date(),
            birthday = new Date(date);

        if(birthday.getMonth() < today.getMonth()){
            callback('last');
        } else {
            if(birthday.getMonth() === today.getMonth()){
                if(birthday.getDate() < today.getDate()){
                    callback('last');
                } else if(birthday.getDate() === today.getDate()){
                    callback('now');
                } else {
                    callback('on');
                }
            }
        }
    };

    return HoiService;
  });
