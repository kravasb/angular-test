'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope){
        $scope.saveEvent=function(event){
            alert(event.name)
        };
        $scope.cancelEdit=function(event){
            event.name="";
        };
    });