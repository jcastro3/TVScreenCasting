'use strict';

angular.module('nearsofProyectApp')
  .controller('adminCtrl', function ($scope, $firebase, FIREBASE_URL) {
    // TODO make this a constant
	var dataRef = new Firebase(FIREBASE_URL);

   
  $scope.newSlide = function(){
        var data = {title:$scope.slide.title, paragraph1:$scope.slide.p1, paragraph2:$scope.slide.p2};
        dataRef.child($scope.slide.title).set(data);
        $scope.slide.title = '';
        $scope.slide.p1 = '';
        $scope.slide.p2 = '';
      };

  $scope.slide = $firebase(dataRef);

});
