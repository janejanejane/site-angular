'use strict';

var express = require('express'),
    router = express.Router(),
    controller = require('./alert.controller');

router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;