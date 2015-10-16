'use strict';

/**
 * @ngdoc function
 * @name arnonApp.controller:MapsCtrl
 * @description
 * # treeMapCtrl
 * Controller of the arnonApp
 */
angular.module('arnonApp')
    .controller('treeMapCtrl', ['$scope', '$http','$sce','$rootScope', 'Lightbox', 
        function($scope, $http, $sce, $rootScope, Lightbox) {


            

            
            $scope.title = 'Bi-Clustering Results';
            
            $scope.changeTitle = function(name) {
                $scope.title = name;
            }

            
            $rootScope.glob = 0;
            
            $scope.setGlobalVar = function(value) {
            	$rootScope.glob = value;
            }
            
           
    
    }
    ]);





