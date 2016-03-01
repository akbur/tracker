angular.module('budget.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth) {
 $scope.user = {};

   $scope.signin = function () {
    console.log($scope.user);
     Auth.signin($scope.user)
       .then(function (token) {
        console.log('token', token);
         $window.localStorage.setItem('jwt', token);
         //$location.path('/bills');
       })
       .catch(function (error) {
         console.error(error);
       });
   };

   $scope.signup = function () {
     Auth.signup($scope.user)
       .then(function (token) {
         $window.localStorage.setItem('jwt', token);
         $location.path('/bills');
       })
       .catch(function (error) {
         console.error(error);
       });
   };
 });
