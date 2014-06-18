/**
 * Created by jcastro on 5/20/2014.
 */
'use strict';
angular.module('nearsofProyectApp')
.controller('SlideCtrl', function ($scope, $firebase, FIREBASE_URL) {
	$scope.myInterval = 3000;
	var flag = true;
	$scope.slides = [];
	$scope.slidedata = [];
	var fireRef = new Firebase(FIREBASE_URL);

	// TODO need to reset the array after a new element is added to the slideshow.

	fireRef.on('value', function(snapshot){
		if(flag){
			$scope.slides = [];
		}
		$scope.slidedata = snapshot.val();
		console.log($scope.slidedata);
		angular.forEach($scope.slidedata, function(value){
			$scope.slides.push({
				slideshow: '../views/slide_templates/slide1.html',
				title: value.title,
				p1: value.paragraph1,
				p2: value.paragraph2,
				img: value.img
			});
		});
	});


});

