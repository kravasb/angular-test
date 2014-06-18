'use strict';

eventsApp.filter("durations", function(){

    return function(duration){
        switch (duration){
            case 1:
                return "One hour";
            case 2:
                return "Two Hours";
            case 4:
                return "Four Hours";
            default:
                return "Full Day";
        }
    }
});