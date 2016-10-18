angular.module('sbtbApp', [
  'sbtbApp.start',
  'sbtbApp.quiz',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/start', {
      templateUrl: 'app/startView/startView.html',
      controller: 'StartController'
    })
    .when('/quiz', {
      templateUrl: 'app/quizView/quizView.html',
      controller: 'QuizController'
    })
    // .when('/results', {
    //   templateUrl: 'app/resultsView/resultsView.html',
    //   controller: 'ResultsController'
    // })
    .otherwise({
      redirectTo: '/'
    });
  });
