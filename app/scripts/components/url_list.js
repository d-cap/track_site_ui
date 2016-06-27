(function() {
  'use strict';

  var urlListController = function($scope) {
    this.message = 'test';
  };

  var app = angular.module('trackSite');
  app.component('urlList', {
    template: '<h4>Track-site list: {{ model.message }}</h4>',
    controllerAs: 'model',
    controller: urlListController
  });
}());
