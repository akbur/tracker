var Expense = require('./expense/expenseModel.js');

module.exports = function(app) {

  //--api--
  //get all expenses
  app.get('/api/expenses', function (req, res){

    //use mongoose to get all expenses in the database
    Expense.find(function (err, expenses) {
      if (err) {
        res.send(err);
      }
      res.json(expenses);
    });
  });

  //create an expense and send back all expenses after creation
  app.post('/api/expenses', function (req, res) {
    console.log('request body', req.body);
    console.log('response', res.body);
    Expense.create({
      name: req.body.name,
      amount: req.body.amount
    }, function (err, expense) {
      if (err) {
        res.send(err);
      }
      Expense.find(function (err, expenses) {
        if (err) {
          res.send(err);
        }
        res.json(expenses); 
      });
    });
  });

  //delete an expense
  app.delete('/api/expenses/:expense_id', function (req, res) {
    Expense.remove({
      _id: req.params.expense_id
    }, function (err, expense) {
      if (err) {
        res.send(err);
      }
      /*
      //get and return all of the expenses after 
      Expense.find(function (err, expenses) {
        if (err) {
          res.send(err);
        }
        res.json(expenses);
      }) */
    }) 
  });

  //--application--
  app.get('/', function(req, res) {
    res.render('/index');
  });

};
