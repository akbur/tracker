var mongoose = require('mongoose');

module.exports = mongoose.model('Expense', {
  name: String, 
  amount: Number
});