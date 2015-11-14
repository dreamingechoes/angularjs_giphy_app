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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/gif', {
        templateUrl: 'views/gif.html',
        controller: 'GifCtrl',
        controllerAs: 'gif'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
