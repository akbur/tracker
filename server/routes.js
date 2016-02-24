var express = require('express');

var billRoutes = require('./bills/billRoutes');
var expenseRoutes = require('./expenses/expenseRoutes');

var router = express.Router();

router.use('/bills', billRoutes);
router.use('/expenses', expenseRoutes);

module.exports = router;
