var mongoose = require('mongoose');

var BillSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  due: Date,
  paid: {
    type: Boolean,
    default: false}
});

module.exports = mongoose.model('Bill', BillSchema);