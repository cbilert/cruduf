'use strict';

angular.module('myApp.tela-uf', [
  'ngRoute'  
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tela-uf', {
    templateUrl: 'tela-uf/tela-uf.html',
    controller: 'TelaUFCtrl'
  });
}])
.directive('telaUf', function() {
  return {
    restrict: 'E',
    templateUrl: 'tela-uf/tela-uf.html'
  };
})
.controller('TelaUFController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  $scope.mensagemSucesso="";
  $scope.mensagemErro="";
  $scope.newUF = {};
  $scope.selectedUF={};
  $scope.listaUF = []
  $scope.WEB_SERVICE_URL = 'https://ufwebservicerest.herokuapp.com/uf';
  var headers = {
    'Access-Control-Allow-Origin' :true ,
    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  
  $scope.loadLista = function(){  
    $http.get($scope.WEB_SERVICE_URL+'/listar',{headers:headers})
         .then( function(response) {
                  //console.log(response);
                  $scope.listaUF = response.data;
                  $scope.mensagemErro="";
                }, function(error) {
                  //console.log(error);
                  $scope.mensagemSucesso = "";
                  $scope.mensagemErro = error.data.result;
                }
    ).finally(function() {
          // Hide status messages after three seconds.
          $timeout(function() {
            $scope.mensagemSucesso = "";
            $scope.mensagemErro = "";
          }, 2500);
        });
  };
  $scope.loadLista();
  
  $scope.saveUF = function(){
    $http.post($scope.WEB_SERVICE_URL+'/cadastrar',$scope.newUF)
         .then( function(response) {
                 // console.log(response.data);
                  $scope.mensagemSucesso =response.data.result;
                  $scope.mensagemErro="";
                  $scope.loadLista();
                }, function(error) {
                 // console.log(error);
                  $scope.mensagemSucesso = "";
                  $scope.mensagemErro = error.data.result;
                }
    ).finally(function() {
          // Hide status messages after three seconds.
          $timeout(function() {
            $scope.mensagemSucesso = "";
            $scope.mensagemErro = "";
          }, 2500);
        });
    $scope.newUF = {};
  };

  $scope.selectUF = function(uf){
    $scope.selectedUF = uf;
  };

  $scope.updateUF = function(){
    $http.put($scope.WEB_SERVICE_URL+'/alterar', $scope.selectedUF)
         .then( function(response) {
                  //console.log(response.data);
                  $scope.mensagemSucesso = response.data.result;
                  $scope.mensagemErro="";
                  $scope.loadLista();
                }, function(error) {
                  //console.log(error);
                  $scope.mensagemSucesso = "";
                  $scope.mensagemErro = error.data.result;
                }
    ).finally(function() {
          // Hide status messages after three seconds.
          $timeout(function() {
            $scope.mensagemSucesso = "";
            $scope.mensagemErro = "";
          }, 2500);
        });
    $scope.selectedUF = {};
  };

  $scope.deleteUF = function(){
    $http.delete($scope.WEB_SERVICE_URL+'/excluir/'+$scope.selectedUF.sigla, $scope.selectedUF.sigla)
         .then( function(response) {
                  //console.log(response.data);
                  $scope.mensagemSucesso=response.data.result;
                  $scope.mensagemErro="";
                  $scope.loadLista();
                }, function(error) {
                  //console.log(error);
                  $scope.mensagemSucesso = "";
                  $scope.mensagemErro = error.data.result;
                }
    ).finally(function() {
          // Hide status messages after three seconds.
          $timeout(function() {
            $scope.mensagemSucesso = "";
            $scope.mensagemErro = "";
          }, 2500);
        });
  };
}]);