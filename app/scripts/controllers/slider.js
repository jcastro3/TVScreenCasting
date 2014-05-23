/**
 * Created by jcastro on 5/20/2014.
 */
'use strict';

angular.module('nearsofProyectApp')
    .controller('SlideCtrl', function ($scope) {
	$scope.myInterval = 5000;
	var slides = $scope.slides = [];
	$scope.addSlide = function() {
		var newWidth = 1900 + slides.length;
		slides.push({
			text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
			['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
		});
	};

	for (var i=0; i<4; i++) {
		$scope.addSlide();
	}
});
