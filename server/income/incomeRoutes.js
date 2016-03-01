var incomeController = require('./incomeController');
var express = require('express');

var router = express.Router();

router.put('/:username', incomeController.addIncome);
router.get('/:username', incomeController.getIncome);

module.exports = router;