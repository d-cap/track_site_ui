(function() {
  'use strict';

  var urlService = function($http, pathService) {
    var index = function() {
      return $http.get(pathService.getServiceDefaultPath)
      .then(function(response) {
        return response.data;
      });
    };

    return {
      index: index
    };
  };

  var app = angular.module('trackSite');
  app.factory('urlService', ['$http', 'pathService', urlService]);
}());
