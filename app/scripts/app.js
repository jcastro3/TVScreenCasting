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
      when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
      when('/slider', {
        templateUrl: 'views/slider.html',
        controller: 'SlideCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });


  });
