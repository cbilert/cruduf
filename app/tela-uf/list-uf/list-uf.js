'use strict';

angular.module('myApp.list-uf', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list-uf', {
    templateUrl: 'tela-uf/list-uf/list-uf.html',
    controller: 'listaUFController'
  });
}])
.directive('listUf', function() {
  return {
    restrict: 'E',
    templateUrl: 'tela-uf/list-uf/list-uf.html'
  };
});
