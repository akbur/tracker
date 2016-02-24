var billController = require('./billController');
var express = require('express');

var router = express.Router();

router.get('/', billController.getBills);
router.post('/', billController.addBills);
router.delete('/:bill_id', billController.deleteBill);

module.exports = router;