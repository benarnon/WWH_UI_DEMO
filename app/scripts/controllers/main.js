'use strict';

/**
 * @ngdoc function
 * @name arnonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the arnonApp
 */
angular.module('arnonApp')
    .controller('MainCtrl', ['$scope', '$http','$location', 'Lightbox',
        function($scope, $http, $location, Lightbox) {
            $http.get('testJson_samples_names.json').success(function(data) {
                $scope.dataSet = $scope.resetDataSet = $scope.previousDataSet = data.Names;
            });

            $scope.title = 'Samples';
            //$scope.title = 'Clusters';
            
            $scope.changeTitle = function(name) {
                $scope.title = name;
            }
            $scope.columnHeader1 = 'Name';
            $scope.columnHeader2 = '';
            
            $scope.changeColumnsHeader = function(h1, h2) {
                $scope.columnHeader1 = h1;
                $scope.columnHeader2 = h2;

            }
            
            $scope.changeDataSet = function(newData, id) {
                if (newData) {
                    $scope.clusterID = id;
                    $scope.previousDataSet = $scope.dataSet;
                    $scope.dataSet = newData;
                }
                else{
                    $scope.genomeID = id;
                    var path2 =  $scope.clusterID + '/' + $scope.genomeID + '/' + $scope.genomeID + '_hist.jpeg';
                  console.log(path2);
                    Lightbox.openModal([{
                        url: path2
                    }], 0);
                }
            }
            
            $scope.go = function ( path ) {
            	  $location.path( path );
            	}
            
            
    }
    ]);