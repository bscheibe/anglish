'use strict';

/**
 * @ngdoc overview
 * @name anglishApp
 * @description
 * # anglishApp
 *
 * Main module of the application.
 */
angular
  .module('anglishApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cool', {
        templateUrl: 'views/cool.html',
        controller: 'CoolCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
