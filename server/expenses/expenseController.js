var Expense = require('./expenseModel');

var getExpenses = function(req, res) {
  Expense.find()
  .then(function(expenses) {
    res.json(expenses);
  })
  .catch(function(err){
    res.status(400).end(err);
  });
};

var addExpense = function(req, res) {
  Expense.create({
    name: req.body.name,
    amount: req.body.amount
  })
  .then(function() {
    Expense.find()
    .then(function(expenses){
      res.json(expenses);
    });
  })
  .catch(function(err) {
    res.status(400).end(err);
  });
};

var deleteExpense = function(req, res) {
  Expense.remove({
    _id: req.params.expense_id
  })
  .then(function(expense) {
    res.json(expense);
  })
  .catch(function(err){
    res.status(400).end(err);
  });
};

module.exports = {
  getExpenses: getExpenses,
  addExpense: addExpense,
  deleteExpense: deleteExpense
};