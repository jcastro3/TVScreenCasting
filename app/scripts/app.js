'use strict';

angular
  .module('nearsofProyectApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider.
     when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      }).
      when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
      }).
      when('/slider', {
        templateUrl: 'views/slider.html',
        controller: 'SlideCtrl'
      }).
      when('/slideshow', {
        templateUrl: 'views/slideshow.html',
        controller: 'SlideCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });


  })
  .constant('FIREBASE_URL', 'https://resplendent-fire-2473.firebaseio.com/TVScreenCast');
