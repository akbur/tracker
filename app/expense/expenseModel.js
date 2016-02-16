var mongoose = require('mongoose');

var ExpenseSchema = new mongoose.Schema({
  name: String,
  amount: Number
});

module.exports = mongoose.model('Expense', ExpenseSchema);