var Bill = require('./billModel');

var getBills = function(req, res) {
  Bill.find()
  .then(function(bills) {
    res.json(bills);
  })
  .catch(function(err) {
    res.status(400).end(err);
  });
};

var addBills = function(req, res) {
  Bill.create({
    name: req.body.name,
    amount: req.body.amount,
    due: req.body.due,
    paid: req.body.paid,
  })
  .then(function(){
    Bill.find()
    .then(function(bills){
      res.json(bills);
    });
  })
  .catch(function(err) {
    res.status(400).end(err);
  });
};

var deleteBill = function(req, res) {
  Bill.remove({
    _id: req.params.bill_id
  })
  .then(function(bill) {
    res.json(bill);
  })
  .catch(function(err) {
    res.status(400).end(err);
  });
};

module.exports = {
  getBills: getBills,
  addBills: addBills,
  deleteBill: deleteBill
};
