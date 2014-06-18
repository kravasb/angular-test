'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.snippet='<span style="color:red">Hi there</span>';
        $scope.boolValue=false;
        $scope.buttonDisabled = true;
        $scope.mystyle={color:'red'};
        $scope.myclass="blue";
        $scope.event={
            name:"Angular Boot Camp",
            date: "1/1/2013",
            time: "10.30 am",
            location:{
                address: "CompatibL LLC",
                city: "Kyiv",
                country: "Ukraine"
            },
            imageUrl: "img/angular-logo.png",
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: "Sasha Kravchuk",
                    duration:"1 hour",
                    level: "Advanced",
                    abstract: "In this session you will learn about directives",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: "Maxim Malik",
                    duration:"2 hour",
                    level: "Beginner",
                    abstract: "Scopes are made for fun and can bring you profit",
                    upVoteCount: 0
                },
                {
                    name: "Well behaved Controllers",
                    creatorName: "Vadim Gurzhiy",
                    duration:"15 minutes",
                    level: "Normal",
                    abstract: "Controllers are made to controll smth",
                    upVoteCount: 0
                }
            ]
        };
        $scope.upVoteSession=function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession=function(session){
            session.upVoteCount--;
        }
    }
);