'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    // uri: 'mongodb://localhost/siteangular-dev'
    uri: process.env.MONGOHQ_LOCAL || 'mongodb://localhost/siteangular-dev'
  },

  seedDB: true
};
