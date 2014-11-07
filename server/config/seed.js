/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Alert = require('../api/alert/alert.model');


Alert.find({}).remove(function() {
  var today = new Date();
  console.log('getHours????', today.getHours()+5);
  Alert.create({
    alert_name: 'Ate Hanna\'s Birthday',
    alert_time: new Date('April 10, 1986'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Juliette\'s Birthday',
    alert_time: new Date('September 11, 1989'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Joseph\'s Birthday',
    alert_time: new Date('September 24, 1991'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Papa\'s Birthday',
    alert_time: new Date('September 30, 1961'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Diana\'s Birthday',
    alert_time: new Date('October 19, 1997'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Mama\'s Birthday',
    alert_time: new Date('November 8, 1962'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Auntie Jacque\'s Birthday',
    alert_time: new Date('February 14, 1961'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Kyle\'s Birthday',
    alert_time: new Date('May 10, 1997'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Kim\'s Birthday',
    alert_time: new Date('November 3, 2003'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  },{
    alert_name: 'Lola Poncing\'s Birthday',
    alert_time: new Date('October 30, 1940'),
    email: 'jeanclaudetteambait@gmail.com',
    active: true
  });
});
