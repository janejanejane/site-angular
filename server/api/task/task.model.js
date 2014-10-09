'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var TaskSchema = new Schema({
  taskName: String,
  description: String,
  dueDate: Date,
  completedDate: Date,
  user : [{ type: Schema.Types.ObjectId, ref: 'User', index: true }]
});

/**
 * Validations
 */

// Validate dueDate in past
TaskSchema
  .path('dueDate')
  .validate(function(dueDate) {
    return (dueDate.toISOString() >= new Date().toISOString());
  }, 'Due Date cannot be in the past.');

// Validate completedDate in past
TaskSchema
  .path('completedDate')
  .validate(function(completedDate) {
    return (completedDate.toISOString() <= this.dueDate.toISOString());
  }, 'Completed Date cannot be in the past.');

/**
 * Pre-save hook
 */
TaskSchema
  .pre('save', function(next) {
    return next();
  });

/**
 * Methods
 */
TaskSchema.methods = {
};

module.exports = mongoose.model('Task', TaskSchema);
