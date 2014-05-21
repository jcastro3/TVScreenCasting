'use strict';

angular.module('nearsofProyectApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		$scope.verify = function(url){
			$location.path(url);
    };
  });
