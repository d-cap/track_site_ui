(function() {
  'use strict';

  var pathService = function() {
    return {
      getServiceDefaultPath: 'http://localhost:8080/'
    };
  };

  var app = angular.module('trackSite');
  app.factory('pathService', pathService);
}());
