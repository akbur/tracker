var Expense = require('./expense/expenseModel.js');

module.exports = function(app) {

  //--api--
  //get all expenses
  app.get('/api/expenses', function(req, res){

    //use mongoose to get all expenses in the database
    Expense.find(function(err, expenses) {
      if (err) {
        res.send(err);
      }
      res.json(expenses);
    });
  });

  //create an expense and send back all expenses after creation
  app.post('/api/expenses', function(req, res) {
    console.log('request body', req.body);
    console.log('response', res.body);
    Expense.create({
      name: req.body.name,
      amount: req.body.amount
    }, function(err, expense) {
      if (err) {
        res.send(err);
      }
      Expense.find(function(err, expenses) {
        if (err) {
          res.send(err);
        }
        res.json(expenses); 
      });
    });
  });

  //--application--
  app.get('/', function(req, res) {
    res.render('/index');
  });

};
