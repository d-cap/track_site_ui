(function() {
  'use strict';

  var urlController = function($scope) {
    $scope.message = 'Track site!';
  };

  var app = angular.module('trackSite');
  app.controller('UrlController', ['$scope', urlController]);
}());
