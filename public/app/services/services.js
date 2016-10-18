angular.module('sbtbApp.services', [])
.factory('Questions', function() {
  var questions = [{
  question: "What score did Zack get on his SATs?",
  answers: ['900', '1020', '1502', '1600'],
  correct: '1502'
}, {
  question: "What is the name of Screech's robot?",
  answers: ["Mike","Kevin", "Harry", "Slater"],
  correct: 'Kevin'
}, {
  question: "What was Slater's football jersey number?",
  answers: ['6', '9', '12', '11'],
  correct: '6'
}, {
  question: "Finish this line: \n I'm so excited, I'm so excited, I'm so.....",
  answers: ["drunk", "tired", "excited", "scared"],
  correct: 'scared'
}, {
  question: "Which is NOT a name of an employee at the Max?",
  answers: ['James', 'Jeff', 'Kelly', 'Bruce'],
  correct: 'Bruce'
}, {
  question: "What was name of the band the group created?",
  answers: ['Zack Attack', 'Friends Forever', 'The Max', 'The Temptations'],
  correct: 'Zack Attack'
}, {
  question: "What was Screech's dog's name?",
  answers: ['Max', 'Walter', 'Hounddog', 'Sparky'],
  correct: 'Hounddog'
}, {
  question: "What is Lisa's alias on the Teen Line in 1-900 Crushed?",
  answers: ['Jewel', 'Princess', 'Angel', 'Peaches'],
  correct: 'Princess'
}, {
  question: "What is Jessie Spano's middle name?",
  answers: ['Marie', 'Ann', 'Myrtle', 'Christine'],
  correct: 'Myrtle'
}, {
  question: "How much money did Lisa charge on her Dad's credit card?",
  answers: ['$394', '$375', '$342', '$386'],
  correct: '$386'
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

});