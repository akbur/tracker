var jwt = require('jwt-simple');
var User = require('../users/userModel.js');
var secret = require('./envDefaults').jwtSecret;

module.exports = function(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).end('Not Authorized');
  }

  try {
    var decoded = jwt.decode(token, secret);
    //decoded, on success, ends up being the payload
    User.findById(decoded.iss)
    .then(function(user) {
      if (decoded.exp >+ Date.now()) {
        return next();
      }
      return res.status(401).end('Token Expired.');
    })
    .catch(function(err) {
      return res.status(401).end(err);
    });
  } catch (err) {
    return res.status(401).end(err);
  }
}

