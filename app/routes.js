var Expense = require('./models/expense');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('/index');
  });

};
