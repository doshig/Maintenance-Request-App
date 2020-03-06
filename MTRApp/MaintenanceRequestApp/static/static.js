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
        
        // console.log(equipProblem.equipment_problem)
    
        // TRYING TO GET TAG DATA USING id
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
        // https://www.w3schools.com/jsref/prop_node_textcontent.asp

        var first_name_inputted = document.getElementById('first_name_data').textContent;
        var last_name_inputted = document.getElementById('last_name_data').textContent;
        var badge_number_inputted = document.getElementById('badge_number_data').textContent;
        var department_name_inputted = document.getElementById('department_data').textContent;
        var supervisor_name_inputted = document.getElementById('supervisor_data').textContent;

        var equipment_number_inputted = document.getElementById('equipment_number').textContent;
        var equipment_name_inputted = document.getElementById('equipment_name').textContent;
        var equipment_location_inputted = document.getElementById('equipment_location').textContent;
        
        // console.log(first_name_inputted)

        var informationData = {'first_name': first_name_inputted, 'last_name': last_name_inputted, 'badge_number': badge_number_inputted, 'department': department_name_inputted, 'authorized_supervisor': supervisor_name_inputted, 'equipment_number': equipment_number_inputted, 'equipment_name': equipment_name_inputted, 'equipment_location': equipment_location_inputted, 'equipment_problem': equipProblem.equipment_problem, 'explain_problem': problem.equipment_problem2}
        

        $http.post('/mra/finalrequest', informationData)
        .then(function(response){

        },
        function(){
            alert('Could not add information');
        });
        // location.reload();   //Reload the web page to refresh data

            
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
        location.reload();   //Reload the web page to refresh data

    
    }};

}());



function run($http){
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';

}


