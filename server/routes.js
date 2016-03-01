var express = require('express');

var billRoutes = require('./bills/billRoutes');
var expenseRoutes = require('./expenses/expenseRoutes');
var incomeRoutes = require('./income/incomeRoutes');

var router = express.Router();

router.use('/bills', billRoutes);
router.use('/expenses', expenseRoutes);
router.use('/income', incomeRoutes);

module.exports = router;
