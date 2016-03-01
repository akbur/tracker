var app = angular.module('budget', [
  'budget.expenses', 
  'budget.services', 
  'budget.bills',
  'budget.auth',
  'ui.router'
  ])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  //for any unmatched url, redirect to expenses
  $urlRouterProvider.otherwise("/signin");

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
    })
    .state('signin', {
      url: '/signin',
      templateUrl: '/auth/signin.html',
      controller: 'AuthController'
    })
    .state('signup', {
      url: '/signup', 
      templateUrl: '/auth/signup.html',
      controller: 'AuthController'
    });
  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function($window) {
  var attach = {
    request: function(object) {
      var jwt = $window.localStorage.getItem('com.budget');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function($rootScope, $location, Auth){
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});