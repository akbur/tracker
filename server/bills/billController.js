var Bill = require('./billModel');

var getBills = function(req, res) {
  Bill.find(function (err, bills) {
    if (err) {
      res.send(err);
    }
    res.json(bills);
  });
};

var addBills = function(req, res) {
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
};

var deleteBill = function(req, res) {
  Bill.remove({
    _id: req.params.bill_id
  }, function (err, bill) {
    if (err) {
      res.send(err);
    }
  });
};

module.exports = {
  getBills: getBills,
  addBills: addBills,
  deleteBill: deleteBill
};
