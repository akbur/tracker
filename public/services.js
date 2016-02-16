angular.module('budget.services', [])

  .factory('Expenses', function ($http) {
    
    var getExpenses = function(data) {
      return $http({
        method: 'GET', 
        url: '/api/expenses',
      })
      .then(function(res) {
        console.log('getExpenses response', res);
        data.expenses = res.data;
      });
    };

    var addExpense = function(expense) {
      console.log('expense', expense);
      return $http({
        method: 'POST', 
        url: '/api/expenses',
        data: expense
      })
    };

    return {
      getExpenses: getExpenses,
      addExpense: addExpense
    }
  });

