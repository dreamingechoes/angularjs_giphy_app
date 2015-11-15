'use strict';

/**
 * @ngdoc overview
 * @name angularjsGiphyAppApp
 * @description
 * # angularjsGiphyAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsGiphyAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/gifs', {
        templateUrl: 'views/gif.html',
        controller: 'GifCtrl',
        controllerAs: 'gif'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
