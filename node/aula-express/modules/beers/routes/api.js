var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

/* GET users listing. */
router.get('/', Controller.get);

router.post('/', Controller.create);

router.put('/', Controller.update);

router.delete('/', Controller.delete);

module.exports = router;