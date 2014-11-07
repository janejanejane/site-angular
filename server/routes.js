/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  // app.use('/api/users', require('./api/user'));
  // app.use('/api/tasks', require('./api/task'));
  app.use('/api/alerts', require('./api/alert'));

  app.use('/auth', require('./auth'));

  app.route('/flap')
    .get(function(req, res){
      res.sendfile(app.get('appPath') +  'flap/index.html');
    });

  app.route('/pdaf')
    .get(function(req, res){
      res.sendfile(app.get('appPath') +  'pdaf/index.html');
    });
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
