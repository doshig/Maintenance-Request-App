(function() {
    'use strict';
    angular.module('MRApp.demo', []).controller('MRAppController', ['$scope', '$http', DataFunction]).run(['$http', run]);

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
            // console.log($scope.MyDataEquipment)
        });
        $scope.formInfo = {};
        $scope.sendData = function() {
        // console.log($scope.formInfo);
        
        
        $scope.addEquipmentProblem = function(formInfo){
        
            var newEquipmentProblem = {
                equipment_problem: formInfo.equipment_problem  
            };    
    
            // console.log(newEquipmentProblem)
            
        $http.post('/mra/equipmentproblem', newEquipmentProblem)
        .then(function(response){

        },
        function(){
            alert('Could not add equipment problem');
        });
        // location.reload();   //Reload the web page to refresh data

        };
    
    }

        // $scope.formInfo2 = {};
        //     $scope.sendData = function() {
        //     console.log($scope.formInfo2);
            
            
        //     $scope.addEquipmentProblem2 = function(formInfo2){
            
        //         var newEquipmentProblem2 = {
        //             equipment_problem: formInfo.equipment_problem2  
        //         };    
        
        //         // console.log(newEquipmentProblem)
                
        //     $http.post('/mra/problem', newEquipmentProblem2)
        //     .then(function(response){

        //     },
        //     function(){
        //         alert('Could not add problem');
        //     });
        //     // location.reload();   //Reload the web page to refresh data

        //     };
        
        // }
            
        

        
    }
}());

function run($http){
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';

}






// def save(self,*args, **kwargs):

            
//             super(HeatTreat, self).save(*args, **kwargs)













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