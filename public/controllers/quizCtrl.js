angular.module('sbtbApp-quiz', [])

.controller('Quiz', function(Questions, $scope, Links) {

  $scope = {};

  $scope.startQuiz = function() {
    $scope.id = 0;
    $scope.getQuestion();
  };

  $scope.getQuestion = function() {
    var curr_quest = Questions.getQuestion($scope.id);
    if(curr_quest) {
      $scope.question = curr_quest.question;
      $scope.answers = curr_quest.answers;
      $scope.correct = curr_quest.correct;
    } else {
      //i need something else here
      $scope.ended = 'quiz over';
    }
  };

  $scope.answer = function() {
  };

});