angular.module('todoListApp')
.directive('todo', function() {
  return {
    templateUrl: 'templates/todo.html',
    controller: 'mainCtrl',
    replace: true
  }
})