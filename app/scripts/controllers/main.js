'use strict';

/**
 * @ngdoc function
 * @name anglishApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglishApp
 */
angular.module('anglishApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
