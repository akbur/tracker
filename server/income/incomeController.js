var User = require('../users/userModel');

var addIncome = function(req, res) {
  var username = req.body.username;
  var income = req.body.income;
  console.log(username, income);
  User.update({ username: username },{ $set: {income: income} })
  .then(function(user) {
    res.json(user);
  })
  .catch(function(err) {
    return res.status(400).end(err);
  });
};

var getIncome = function(req, res) {
  var username = req.params.username;
  User.findOne({username: username})
  .then(function(user) {
    res.json(user);
  })
  .catch(function(err) {
    return res.status(400).end(err);
  });
};

module.exports = {
  addIncome: addIncome,
  getIncome: getIncome
};