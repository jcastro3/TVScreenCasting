/**
 * Created by jcastro on 5/20/2014.
 */
'use strict';

angular.module('nearsofProyectApp')
    .controller('SlideCtrl', function ($scope) {
	$scope.myInterval = 5000;
	$scope.slides = [];
	$scope.addSlide = function() {
		//var newWidth = 1170 + slides.length;
		$scope.slides.push(
		{
			slideshow: '../views/slides/slide1.html'
		},
		{
			slideshow: '../views/slides/slide2.html'
		});
	};

	for (var i=0; i<4; i++) {
		$scope.addSlide();
	}
});

