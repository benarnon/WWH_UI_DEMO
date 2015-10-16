'use strict';

/**
 * @ngdoc overview
 * @name arnonApp
 * @description
 * # arnonApp
 *
 * Main module of the application.
 */

var app = angular
  .module('arnonApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/topRated', {
        templateUrl: 'views/topRated.html',
        controller: 'topCtrl',
        controllerAs: 'main'
      })
       .when('/clusters', {
        templateUrl: 'views/clusters.html',
        controller: 'ClustersCtrl',
        controllerAs: 'cluster'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl', // you can write your own controller if controller is needed
        controllerAs: 'about'
      })
      .when('/maps', {
    	  templateUrl: 'views/maps.html',
    	  controller: 'MapsCtrl',
    	  controllerAs: 'maps'
      })
      /*.when('/treeMap', {
    	  templateUrl: 'views/treeMap.html',
    	  controller: 'treeMapCtrl',
    	  controllerAs: 'treeMap'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });





app.run(function ($rootScope) {
    $rootScope.globalVariable = 0; //global variable
});






