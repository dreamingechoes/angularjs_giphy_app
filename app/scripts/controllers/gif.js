'use strict';

/**
 * @ngdoc function
 * @name angularjsGiphyAppApp.controller:GifCtrl
 * @description
 * # GifCtrl
 * Controller of the angularjsGiphyAppApp
 */
angular.module('angularjsGiphyAppApp')
  .controller('GifCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
    if($scope.search === undefined){
      $scope.search = "happy";
    }
    if($scope.limit === undefined){
      $scope.limit = 6;
    }

    $scope.change = function(){
      fetch();
    };

    $scope.update = function(gif){
      $scope.search = gif.tag;
      $scope.change();
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    };

    function fetch(){
      var deferred = $q.defer();
      $http.get('//api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&' +
                'q=' + $scope.search +
                '&limit=' + $scope.limit )
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response.data.data));
      }, function errorCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    };
  }]);
