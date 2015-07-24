var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

router.get('/', Controller.retrieve);

router.post('/', Controller.create);

module.exports = router;