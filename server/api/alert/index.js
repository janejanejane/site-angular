'use strict';

var express = require('express'),
    router = express.Router(),
    controller = require('./alert.controller');

router.get('/', controller.index);

module.exports = router;