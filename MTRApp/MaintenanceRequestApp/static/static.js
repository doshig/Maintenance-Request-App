(function() {
    'use strict';
    angular.module('MRApp.demo', []).controller('MRAppController', ['$scope', '$http', DataFunction])

    function DataFunction($scope, $http) {

        $scope.MyData = [];
        $http.get('/mra/employee').then(function(response){
            $scope.MyData = response.data;
            // console.log(response.data)
        });
        $scope.MyDataEquipment = [];
        $http.get('/mra/equipment').then(function(response){
            $scope.MyDataEquipment = response.data;
            // console.log(response.data)
            console.log($scope.MyDataEquipment)
        });





        
    }
}());


// (function() {
//     'use strict';
//     angular.module('MRApp.demo', []).controller('MRAppControllerEquipment', ['$scope', '$http', EquipmentFunction])

//     function DataFunction($scope, $http) {
//         $scope.MyDataEquipment = [];
//         $http.get('/mra/equipment').then(function(response){
//             $scope.MyDataEquipment = response.data;
//             // console.log(response.data)
//         });
//     }
// }());