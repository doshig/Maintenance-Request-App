(function() {
    'use strict';
    angular.module('MRApp.demo', []).controller('MRAppController', ['$scope', '$http', DataFunction])

    function DataFunction($scope, $http) {
        $scope.MyData = [];
        $http.get('/mra/employee').then(function(response){
            $scope.MyData = response.data;
            // console.log(response.data)
        });
    }
}());