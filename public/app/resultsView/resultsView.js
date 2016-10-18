angular.module('sbtbApp.results', [])

.controller('ResultsController', function($scope, $location, Questions, users) {

  $scope.getUsers = function() {
    users.getScores().then(function(resp) {
      console.log('resp',resp.data)
      $scope.users = resp.data;
    });
  }
});