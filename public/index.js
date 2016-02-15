var app = angular.module('budget-tracker', [])

app.controller('ExpenseController', function($scope) {
  $scope.expenses = [];

  $scope.addExpense = function(expenseName, expenseAmount) {
    $scope.expenses.push({ name: expenseName, amount: expenseAmount});
    $scope.expense.name = '';
    $scope.expense.amount = '';
  }
})