var app = angular.module('budget', [
  'budget.expenses', 
  'budget.services', 
  'budget.bills',
  'ui.router'
  ])

.config(function ($stateProvider, $urlRouterProvider) {
  //for any unmatched url, redirect to expenses
  $urlRouterProvider.otherwise("/expenses");

  $stateProvider
    .state('expenses', {
      url: "/expenses",
      templateUrl: "/expenses/expenses.html",
      controller: 'ExpenseController'
    })
    .state('bills', {
      url: "/bills",
      templateUrl: "/bills/bills.html",
      controller: 'BillController'
    });

});