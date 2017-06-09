'use strict';

var angular = require('angular');

angular.module('todoListApp')
    .controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService) {

    dataService.getTodos(function(response){
        var todos = response.data.todos;
        $scope.todos =  todos;
    });

    $scope.addTodo = function() {
        $scope.todos.unshift({name: "This is a new todo.",
            completed: false});
    };

}]);

angular.module('todoListApp').controller('todoCtrl', require('./todo'));

function MainCtrl ($scope, dataService) {

    dataService.getTodos(function(response){
        var todos = response.data.todos;
        $scope.todos =  todos;
    });

    $scope.addTodo = function() {
        $scope.todos.unshift({name: "This is a new todo.",
            completed: false});
    };

}

module.exports = MainCtrl;
