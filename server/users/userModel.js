var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  income: Number
});

module.exports = mongoose.model('User', UserSchema);