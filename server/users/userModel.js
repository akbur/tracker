var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  income: Number
});

UserSchema.methods.comparePassword = function(password) {
  var savedPassword = this.password;
  return new Promise(function(resolve, reject) {
    bcrypt.compare(password, savedPassword, function(err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

//before saving the user, hash password and save hashed
//version of password instead
UserSchema.pre('save', function(next) {
  var user = this;
  var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  next();
});


module.exports = mongoose.model('User', UserSchema);