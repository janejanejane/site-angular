'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AlertSchema = new Schema({
  alert_name: String,
  alert_time: Date,
  email: String,
  active: Boolean
});

module.exports = mongoose.model('Alert', AlertSchema);