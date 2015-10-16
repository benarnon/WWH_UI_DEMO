'use strict';

/**
 * @ngdoc function
 * @name arnonApp.controller:MapsCtrl
 * @description
 * # MapsCtrl
 * Controller of the arnonApp
 */
angular.module('arnonApp')
    .controller('MapsCtrl', ['$scope', '$http','$sce','$rootScope', 'Lightbox', 
        function($scope, $http, $sce, $rootScope, Lightbox) {

            $http.get('biclusters/all.json').success(function(data) {// Change it in order to use only one copy of samples.json!!
                $scope.dataSet = data.BiClusters;

            });
            
            
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
              }   
            
            $scope.title = 'Bi-Clustering Results';
            
            $scope.changeTitle = function(name) {
                $scope.title = name;
            }
            
            $scope.columnHeader1 = 'Name';
            $scope.columnHeader2 = 'Results';
            
            $scope.changeColumnsHeader = function(h1, h2) {
                $scope.columnHeader1 = h1;
                $scope.columnHeader2 = h2;
            }
            
            $rootScope.glob = 1;
            
            $scope.setGlobalVar = function(value) {
            	$rootScope.glob = value;
            }
            

            
           
    
    }
    ]);





