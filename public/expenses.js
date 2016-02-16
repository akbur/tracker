angular.module('budget.expenses', [])

.controller('ExpenseController', function ($scope, $http, Expenses) {
  angular.extend($scope, Expenses);
  $scope.data = {};
  $scope.expense = {};

  //call to get all expenses on load
  $scope.getExpenses($scope.data);

  $scope.addExpense = function() {
    Expenses.addExpense($scope.expense);
    
    //clear form and get newly added expense
    $scope.expense = {};
    $scope.getExpenses($scope.data);
  };

  $scope.deleteExpense = function(expenseID) {
    Expenses.deleteExpense(expenseID);
    //update expenses after deletion
    $scope.getExpenses($scope.data);
  }  
});