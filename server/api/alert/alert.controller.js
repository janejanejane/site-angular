'use strict';

var _ = require('lodash'),
    Alert = require('./alert.model');

// Get list of alerts
exports.index = function(req, res) {
  Alert
    .find(function (err, alerts) {
        if(err) return res.send(500, err);
        var result = _.groupBy(alerts, function(record){
          console.log('alert_time:', record.alert_time.getMonth());
          return record.alert_time.getMonth();
        });
        res.json(200, result);
        console.log('find:', result);
    });

  // Alert
  //   .aggregate({
  //     $project : {
  //       birthday : {
  //         month: { $month: "$alert_time" },
  //         day: { $dayOfMonth: "$alert_time" },
  //         year: { $year: "$alert_time" } },
  //       name: '$alert_name',
  //       recipient: '$email',
  //       _id:0
  //     }
  //   },{
  //     $sort: {
  //       _id: 1
  //   }})
  //   .exec(function(err, alerts){
  //     if(err) return res.send(500, err);
  //     res.json(200, alerts);
  //     console.log('find:', alerts);
  //   });
                  //{$match:{date:{$gte: fromDate, $lt: toDate}}},
                  // {$project:{_id:0,date:1, count:1}},
  // Alert.aggregate()
  //   .match({ date: {$lt: (new Date()) }})
  //   .group({ _id: null })
  //   .exec(function (err, alerts) {
  //     if(err) return res.send(500, err);
  //     res.json(200, alerts);
  //     console.log('aggregate:', alerts);
  //   });
};


/**
 * Creates a new alert
 */
exports.create = function (req, res, next) {
  var newAlert = new Alert(req.body);
  newAlert.save(function(err, alert) {
    if (err) return validationError(res, err);
    res.json(alert);
  });
};