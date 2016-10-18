angular.module('sbtbApp.services', [])

.factory('users', function($http) {

  var newUser = function(user) {
    console.log('this is the user info', user);
    return $http.post('/quiz', user).then(function(res) {
      console.log(res);
    });
  };

  var getScores = function() {
    return $http.get('/results').success(function(resp) {
      console.log('successful response', resp);
    });
  };

  return {newUser: newUser,
          getScores: getScores};

});