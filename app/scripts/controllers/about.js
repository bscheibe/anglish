'use strict';

/**
 * @ngdoc function
 * @name anglishApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anglishApp
 */
angular.module('anglishApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
