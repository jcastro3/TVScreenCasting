'use strict';

angular.module('nearsofProyectApp')
  .controller('loginCtrl', function ($scope, FirebaseAuthClient, $firebase) {
    var url = new Firebase('https://resplendent-fire-2473.firebaseio.com/');
    var auth = new FirebaseAuthClient(url, function(error, user){
      if (error) {
	// an error occurred while attempting login
        console.log(error);
      }else if (user) {
	// user authenticated with Firebase
        auth.login('google');
        console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
      }else {
        auth.logout();
	    }
    });

    $scope.login = function(provider) {
      auth.login(provider);
    };
    // $scope.login = function(){
    //   angularFireAuth.login('google');
    // };

    // $scope.logout = function(){
    //   angularFireAuth.logout();
    // };
    
  });
