'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    // uri: 'mongodb://localhost/siteangular-dev'
    uri: process.env.MONGOHQ_LOCAL || 'mongodb://localhost/siteangular-dev'
  },

  sendgrid: {
    username: process.env.SENDGRID_USERNAME,
    password: process.env.SENDGRID_PASSWORD
  },

  gmail: {
    username: process.env.GMAIL_USERNAME,
    password: process.env.GMAIL_PASSWORD
  },

  seedDB: true
};
