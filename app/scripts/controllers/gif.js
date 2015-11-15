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

    $scope.change = function(){
      if($scope.search !== undefined && $scope.limit !== undefined && $scope.method !== undefined) {
        $scope.fetch();
      }
    };

    $scope.update = function(gif){
      $scope.search = gif.tag;
      $scope.change();
    };

    $scope.fetch = function(){
      var deferred = $q.defer();
      $http.get('//api.giphy.com/v1/gifs/' +
                $scope.method +
                '?api_key=dc6zaTOxFJmzC&' +
                'q=' + $scope.search +
                '&limit=' + $scope.limit )
      .then(function successCallback(response) {
        deferred.resolve($scope.gifs = angular.fromJson(response.data.data));
      }, function errorCallback(error) {
        deferred.resolve($scope.gifs = angular.fromJson({}));
      });
      return deferred.promise;
    };
  }]);
