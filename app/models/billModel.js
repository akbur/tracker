var mongoose = require('mongoose');

var BillSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  due: Date,
  paid: Boolean
});

module.exports = mongoose.model('Bill', BillSchema);