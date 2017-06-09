'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {

    dataService.getTodos(function(response){
        var todos = response.data.todos;
        $scope.todos =  todos;
    });

    $scope.addTodo = function() {
        $scope.todos.unshift({name: "This is a new todo.",
            completed: false});
    };

    $scope.deleteTodo = function(todo, index) {
        dataService.deleteTodo(todo).then(function() {
            $scope.todos.splice(index, 1);
        });
    };

    $scope.saveTodos = function() {
        var filteredTodos = $scope.todos.filter(function(todo){
            if(todo.edited) {
                return todo
            };
        })
        dataService.saveTodos(filteredTodos)
            .finally($scope.resetTodoState());
    };

    $scope.resetTodoState = function() {
        $scope.todos.forEach(function(todo) {
            todo.edited = false;
        });
    }

})