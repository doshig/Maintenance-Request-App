(function() {
    'use strict';
    angular.module('MRApp.demo', []).controller('MRAppController', ['$scope', '$http', DataFunction]).run(['$http', run]);

    function DataFunction($scope, $http) {

        $scope.MyData = [];
        $http.get('/mra/employee').then(function(response){
            $scope.MyData = response.data;
        });
        $scope.MyDataEquipment = [];
        $http.get('/mra/equipment').then(function(response){
            $scope.MyDataEquipment = response.data;
    
        });
        
        
        $scope.addEquipmentProblem = function(equipProblem, problem){   
        
        var newEquipmentProblem = {
            equipment_problem: equipProblem.equipment_problem  
        };    
        var newProblem = {
            explain_problem: problem.equipment_problem2  
        };    
    
            
        $http.post('/mra/equipmentproblem', newEquipmentProblem)
        .then(function(response){

        },
        function(){
            alert('Could not add equipment problem');
        });
        // location.reload();   //Reload the web page to refresh data

        
        $http.post('/mra/problem', newProblem)
        .then(function(response){

        },
        function(){
            alert('Could not add problem');
        });
        // location.reload();   //Reload the web page to refresh data

    }};

}());



function run($http){
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';

}




