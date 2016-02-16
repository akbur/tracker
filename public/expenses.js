angular.module('budget.expenses', [])

.controller('ExpenseController', function ($scope, $http, Expenses) {
  angular.extend($scope, Expenses);
  $scope.data = {};
  $scope.expense = {};
  $scope.total;

  $scope.income = 0;

  //gets updated expenses, then gets new total
  $scope.getExpenses = function(data) {
    Expenses.getExpenses($scope.data)
    .then(function() {
      $scope.total = $scope.totalExpenses($scope.data);
    });
  };

  $scope.addExpense = function() {
    Expenses.addExpense($scope.expense);
    //clear form 
    $scope.expense = {};
    // get newly added expense
    $scope.getExpenses($scope.data);
  };

  $scope.deleteExpense = function(expenseID) {
    Expenses.deleteExpense(expenseID);
    //update expenses after deletion
    $scope.getExpenses($scope.data);
  };

  //get all expenses on load
  $scope.getExpenses($scope.data);

});