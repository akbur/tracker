var Expense = require('./models/expenseModel');
var Bill = require('./models/billModel');

module.exports = function(app) {

  //--API--EXPENSES 

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
    });
  });

//--API--BILLS 

//get all bills
  app.get('/api/bills', function (req, res){

    //use mongoose to get all bills in the database
    Bill.find(function (err, bills) {
      if (err) {
        res.send(err);
      }
      res.json(bills);
    });
  });

  //create an bill and send back all bills after creation
  app.post('/api/bills', function (req, res) {
    Bill.create({
      name: req.body.name,
      amount: req.body.amount,
      due: req.body.due,
      paid: req.body.paid,
    }, function (err, bill) {
      if (err) {
        res.send(err);
      }
      Bill.find(function (err, bills) {
        if (err) {
          res.send(err);
        }
        res.json(bills); 
      });
    });
  });

  //delete an bill
  app.delete('/api/bills/:bill_id', function (req, res) {
    Bill.remove({
      _id: req.params.bill_id
    }, function (err, bill) {
      if (err) {
        res.send(err);
      }
    });
  });

  //--APP--
  
  app.get('*', function(req, res) {
    res.render('/index');
  });

};
