var User = require('./userModel');
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = require('../utils/envDefaults').jwtSecret;

var signup = function(req, res) {
  //Check to see if user with specified username or email exists
  User.findOne({
    $or: [
      {username: req.body.username},
      {email: req.body.email}
    ]
  })
  .then(function(user) {
    if (user) {
      return res.status(400).end('User exists');
    } else {
      //If user doesn't exist, create a new user
      User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      })
      .then(function(user) {
        res.json(user);
      })
      .catch(function(err) {
        return res.status(400).end(err);
      });
    }
  });
};

var signin = function(req, res) {
  User.findOne({username: req.body.username})
  .then(function(user) {
    //Check to see if the user exists
    if (!user) {
      return res.status(401).end('User not found.');
    }
    //check the users password
    return user.comparePassword(req.body.password)
    .then(function(isMatch) {
      if (!isMatch) {
        return res.status(401).end('Invalid Password.');
      }
      //if the password is correct, create a token (session)
      var expires = moment().add(1, 'days').valueOf();
      var token = jwt.encode({
        iss: user._id,
        exp: expires
      }, secret);
      console.log('server token', token);
      res.json({
        token: token,
        expires: expires,
        user: user.toJSON()
      });
    })
    .catch(function(err) {
      return res.status(400).end(err);
    });
  });
};

var getUsers = function(req, res) {
  User.find()
  .then(function(users) {
    res.json(users);
  })
  .catch(function(err) {
    return res.status(400).end(err);
  });
};

var removeUser = function(req, res) {
  User.remove({
    _id:req.params.user_id
  })
  .then(function(user) {
    res.json(user);
  })
  .catch(function(err) {
    return res.status(400).end(err);
  });
};

module.exports = {
  signin: signin,
  signup: signup,
  getUsers: getUsers,
  removeUser: removeUser,
};