var expenseController = require('./expenseController');
var express = require('express');

var router = express.Router();

router.get('/', expenseController.getExpenses);
router.post('/', expenseController.addExpense);
router.delete('/:expense_id', expenseController.deleteExpense);

module.exports = router;
