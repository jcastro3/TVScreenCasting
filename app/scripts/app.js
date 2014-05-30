'use strict';

angular
  .module('nearsofProyectApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'MainCtrl'
      }).
      when('/slider', {
        templateUrl: 'views/slider.html',
        controller: 'SlideCtrl'
      }).
      when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      when('/slideshow', {
        templateUrl: 'views/slideshow.html',
        controller: 'SlideCtrl'
      }).
      otherwise({
        redirectTo: '/admin'
      });


  });
