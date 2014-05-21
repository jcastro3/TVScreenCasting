'use strict';

angular
  .module('nearsofProyectApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
    $routeProvider
      .when('/slider', {
        templateUrl: 'views/slider.html',
        controller: 'SlideCtrl'
      });
    $routeProvider
      .when('/slides', {
        templateUrl: 'views/admin.html',
        controller: 'MainCtrl'
      });
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
