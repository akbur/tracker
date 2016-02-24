var Expense = require('./expenseModel');

var getExpenses = function(req, res) {
  Expense.find(function (err, expenses) {
    if (err) {
      res.send(err);
    }
    res.json(expenses);
  });
};

var addExpense = function(req, res) {
  Expense.create({
    name: req.body.name,
    amount: req.body.amount
  }, function (err, expense) {
    if (err) {
      res.send(err);
    }
    Expense.find(function (err, expenses) {
      if (err) {
        res.send(err);
      }
      res.json(expenses); 
    });
  });
};

var deleteExpense = function(req, res) {
  Expense.remove({
    _id: req.params.expense_id
  }, function (err, expense) {
    if (err) {
      res.send(err);
    }
  });
};

module.exports = {
  getExpenses: getExpenses,
  addExpense: addExpense,
  deleteExpense: deleteExpense
};