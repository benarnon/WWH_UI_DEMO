'use strict';

/**
 * @ngdoc function
 * @name arnonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the arnonApp
 */
angular.module('arnonApp')
    .controller('topCtrl', ['$scope', '$http','$location', 'Lightbox',
        function($scope, $http, $location, Lightbox) {
            $http.get('biclusters/RunDescription.json').success(function(data) {
                $scope.dataSet = data.description;
            });
            
           // $scope.data1 = dataSet.sam

            $scope.title = 'Top-Rated';
            
            $scope.changeTitle = function(name) {
                $scope.title = name;
            }
            $scope.columnHeader1 = 'Name';
            $scope.columnHeader2 = 'Date';
            
            $scope.changeColumnsHeader = function(h1, h2) {
                $scope.columnHeader1 = h1;
                $scope.columnHeader2 = h2;

            }
            

            
            $scope.go = function ( path ) {
            	  $location.path( path );
            	}
            
            
    }
    ]);