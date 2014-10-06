/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Task = require('../api/task/task.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    firstName: 'Sub',
    lastName: 'Test',
    email: 'sub@sub.com',
    password: 'sub'
  },{
    provider: 'local',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');

      Task.find({}).remove(function() {
        seedTask('Test', 'User', {
          taskName: 'Grocery',
          description: 'Buy apple',
          dueDate: new Date('2015-01-01'),
          completedDate: new Date('2014-12-01')
        });
        seedTask('Test', 'User', {
          taskName: 'Grocery',
          description: 'Buy sugar',
          dueDate: new Date('2015-01-01'),
          completedDate: new Date('2014-12-01')
        });
        seedTask('Sub', 'Test', {
          taskName: 'Bill',
          description: 'Pay electricity',
          dueDate: new Date('2015-10-01'),
          completedDate: new Date('2014-09-30')
        });

        function seedTask(firstName, lastName, values){
          var foundUser;

          User.findOne({'firstName': firstName, 'lastName': lastName}, function (err, user) {
            foundUser = user;
            values.user = user._id;

            Task.create(values, function(err, task){
              foundUser.tasks.push(task._id);
              foundUser.save();
            });
          });
        };
      });
    }
  );
});