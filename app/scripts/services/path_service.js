(function() {
  'use strict';

  var pathService = function() {
    return {
      getServiceDefaultPath: 'http://localhost:8080/'
    };
  };

  var app = angular.module('track-site');
  app.factory('pathService', pathService);
}());
