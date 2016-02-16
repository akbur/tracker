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

    return {
      getExpenses: getExpenses,
      addExpense: addExpense,
      deleteExpense: deleteExpense
    }
  });

