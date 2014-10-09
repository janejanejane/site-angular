'use strict';

var Task = require('./task.model');
var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of tasks
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  // Task.aggregate([{$group: {_id: '$user'}}]);
  // Task.aggregate(
  //   { $group: { _id: { group: '$user' } } },
  //   function(err, records) {
  //       console.log(records)
  //       for(var i in record){

  //       }
  //       if(err) return res.send(500, err);
  //       res.json(200, tasks);
  //   }
  // );

  Task
    .find()
    .populate('user')
    .exec(function (err, tasks) {
        if(err) return res.send(500, err);
        res.json(200, tasks);
        console.log('exec:', tasks);

        // tasks.aggregate({ $group: { _id: { group: '$user' } } },
        //   function (err, tasks) {
        //     console.log('aggregate:', tasks);
        // })
    });
  // Task
  //   .find({}, [], {'group': 'user'})
  //   .populate('user')
  //   .exec(function (err, tasks) {
  //       if(err) return res.send(500, err);
  //       res.json(200, tasks);
  //   });
};

/**
 * Creates a new task
 */
exports.create = function (req, res, next) {
  var newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err) return validationError(res, err);
    res.json(task);
  });
};

/**
 * Get a single task
 */
exports.show = function (req, res, next) {
  var taskId = req.params.id;

  Task.findById(taskId, function (err, task) {
    if (err) return next(err);
    if (!task) return res.send(401);
    res.json(task);
  });
};

/**
 * Deletes a task
 * restriction: 'admin'
 */
exports.destroy = function(req, res) {
  Task.findByIdAndRemove(req.params.id, function(err, task) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a task
 */
exports.change = function(req, res, next) {
  var taskId = req.params.id,
      body = req.body;

  Task.findById(taskId, function (err, task) {
    task.taskName = body.taskName;
    task.description = body.description;
    task.user = body.user;

    task.save(function(err) {
      if (err) return validationError(res, err);
      res.send(200);
    });
  });
};

/**
 * Get task info
 */
exports.info = function(req, res, next) {
  var taskId = req.task._id;
  Task.findOne({
    _id: taskId
  }, function(err, task) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!task) return res.json(401);
    res.json(task);
  });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
