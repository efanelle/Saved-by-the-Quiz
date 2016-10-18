angular.module('sbtbApp.results', [])

.controller('ResultsController', function($scope, $location, Questions, users) {

  $scope.getUsers = function() {
    users.getScores().then(function(resp) {
      resp.data.forEach(function(user) {
        user.score = Number(user.score);
      });
      $scope.users = resp.data;
    });
  };
});