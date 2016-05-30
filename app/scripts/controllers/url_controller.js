(function() {
  'use strict';

  var urlController = function($scope) {
    $scope.message = 'Track site!';
  };

  var app = angular.module('track-site');
  app.controller('UrlController', ['$scope', urlController]);
}());
