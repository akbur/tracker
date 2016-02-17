angular.module('budget.services', [])

  .factory('Expenses', function ($http) {

    
    var getExpenses = function(data) {
      return $http({
        method: 'GET', 
        url: '/api/expenses',
      })
      .then(function(res) {
        data.expenses = res.data;
      });
    };

    var addExpense = function(expense) {
      return $http({
        method: 'POST', 
        url: '/api/expenses',
        data: expense
      });
    };

    var deleteExpense = function(expenseID) {
      return $http({
        method: 'DELETE',
        url: '/api/expenses/' + expenseID,
      });
    };

    var totalExpenses = function(data) {
      var total = 0;
      for (var i = 0; i < data.expenses.length; i++) {
        total += data.expenses[i].amount;
      };
      return total;
    };

    return {
      getExpenses: getExpenses,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      totalExpenses: totalExpenses
    }
  })
  
  
  .factory('Bills', function ($http) {

    var getBills = function(data) {
      return $http({
        method: 'GET', 
        url: '/api/bills',
      })
      .then(function(res) {
        var formattedData = formatDates(res.data);
        data.bills = formattedData;
      });
    };

    var addBill = function(bill) {
      return $http({
        method: 'POST', 
        url: '/api/bills',
        data: bill
      });
    };

    var deleteBill = function(billID) {
      return $http({
        method: 'DELETE',
        url: '/api/bills/' + billID,
      });
    };

    var formatDates = function(data) {
      console.log('data', data);
      formattedData = [];
      for (var i = 0; i < data.length; i++) {
        formattedData[i] = data[i];
        if (formattedData[i].due) {
          var dueDate = formattedData[i].due;
          dueDate = dueDate.slice(0, 10);
          dueDate = dueDate.substr(5) + '-' + dueDate.substr(0, 4);
          formattedData[i].due = dueDate;
        } else {
          formattedData[i].due = '';
        }
       
      }
      return formattedData;
    };

    return {
      getBills: getBills,
      addBill: addBill,
      deleteBill: deleteBill
    };
  });



