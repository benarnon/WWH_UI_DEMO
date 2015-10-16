'use strict';

/**
 * @ngdoc function
 * @name arnonApp.controller:MainCtrl
 * @description
 * # ClustersCtrl
 * Controller of the arnonApp
 */
angular.module('arnonApp')
    .controller('ClustersCtrl', ['$scope', '$http', 'Lightbox',
        function($scope, $http, Lightbox) {
            $http.get('testJson.json').success(function(data) {
                $scope.dataSet = $scope.resetDataSet = $scope.previousDataSet = data.Clusters;
            });

            $scope.title = 'Clusters';
            
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
            
            
    }
    ]);