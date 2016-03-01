angular.module('budget.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth) {
 $scope.user = {};

   $scope.signin = function () {
    console.log($scope.user);
     Auth.signin($scope.user)
       .then(function (res) {
          console.log(res);
          console.log($scope.user.username);
         $window.localStorage.setItem('jwt', res);
         $window.localStorage.setItem('username', $scope.user.username);
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
