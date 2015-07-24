var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

router.get('/', Controller.renderList);

module.exports = router;