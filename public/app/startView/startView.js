angular.module('sbtbApp.start', [])

.controller('StartController', function($scope, $location, Questions) {
    $scope.startQuiz = function() {
    $scope.getQuestion();
  };


})