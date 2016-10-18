angular.module('sbtbApp.quiz', [])
.factory('Questions', function() {
  var questions = [{
  question: "What score did Zack get on his SATs?",
  answers: [900, 1020, 1502, 1600],
  correct: 2
}, {
  question: "What is the name of Screech's robot?",
  answers: ["Mike","Kevin", "Harry", "Slater"],
  correct: 1
}, {
  question: "What was Slater's football jersey number?",
  answers: [6, 9, 12, 11],
  correct: 0
}, {
  question: "Finish this line: \n I'm so excited, I'm so excited, I'm so.....",
  answers: ["drunk", "tired", "excited", "scared"],
  correct: 3
}, {
  question: "Which is NOT a name of an employee at the Max?",
  answers: ['James', 'Jeff', 'Kelly', 'Bruce'],
  correct: 3
}, {
  question: "What was name of the band the group created?",
  answers: ['Zack Attack', 'Friends Forever', 'The Max', 'The Temptations'],
  correct: 0
}, {
  question: "What was Screech's dog's name?",
  answers: ['Max', 'Walter', 'Hounddog', 'Sparky'],
  correct: 2
}, {
  question: "What is Lisa's alias on the Teen Line in 1-900 Crushed?",
  answers: ['Jewel', 'Princess', 'Angel', 'Peaches'],
  correct: 1
}, {
  question: "What is Jessie Spano's middle name?",
  answers: ['Marie', 'Ann', 'Myrtle', 'Christine'],
  correct: 2
}, {
  question: "How much money did Lisa charge on her Dad's credit card?",
  answers: ['$394', '$375', '$342', '$386'],
  correct: 3
}];

//need to iterate through questions and feed them into a controller.
var getQuestion = function(questionNumber) {
    if (questionNumber < questions.length) {
      return questions[questionNumber];
    } else {
      return false;
    }
};
return {getQuestion: getQuestion};

})

.controller('QuizController', function(Questions, $scope) {

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
    $scope.checkAnswer = function() {
    if (input){

    }
  };
  $scope.nextQuestion = function() {

  };

});