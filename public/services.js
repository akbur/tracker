angular.module('budget.services', [])

  .factory('Expenses', function ($http) {
    var token = window.localStorage.jwt;

    var getExpenses = function(data) {

      return $http({
        method: 'GET', 
        url: '/api/expenses'
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
    var token = window.localStorage.jwt;

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
        url: '/api/bills/' + billID
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
  })
  .factory('Auth', function($http, $location, $window) {
      var signin = function (user) {
        return $http({
          method: 'POST',
          url: '/auth/signin',
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
      };

      var signup = function (user) {
        return $http({
          method: 'POST',
          url: '/auth/signup',
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
      };

      var isAuth = function () {
        return !!$window.localStorage.getItem('com.budget');
      };

      var signout = function () {
        $window.localStorage.removeItem('com.budget');
        $location.path('/signin');
      };


      return {
        signin: signin,
        signup: signup,
        isAuth: isAuth,
        signout: signout
      };
    });



