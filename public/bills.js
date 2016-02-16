angular.module('budget.bills', [])

.controller('BillController', function ($scope, Bills) {
  angular.extend($scope, Bills);
  $scope.data = {};
  $scope.bill = {};

  $scope.getBills = function () {
    Bills.getBills($scope.data)
    .then(function() {
      console.log($scope.data);
    });
  }

  $scope.addBill = function () {
    Bills.addBill($scope.bill);
    //clear form
    $scope.bill = {};
    //get newly added bills
    $scope.getBills($scope.data);
  };

  $scope.deleteBill = function(billID) {
    Bills.deleteBill(billID);
    //update bills after deletion
    $scope.getBills($scope.data);
  };

  //get all bills on load
  $scope.getBills($scope.data);

});