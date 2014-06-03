'use strict';

angular.module('nearsofProyectApp')
  .controller('adminSlideshow', function ($scope, $location, $resource) {
    
    $scope.data = $resource('../api/');

		$scope.verify = function(url){
			$location.path(url);
    };
  });
