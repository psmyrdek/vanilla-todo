var TodoService = (function(service) {

    var _todos = [];

    service.getTodos = function() {
        return _todos;
    }

    service.addTodo = function(description) {
        _todos.push(new Todo(description));
    }

    service.deleteTodo = function(todoId) {
        _todos = _todos.filter(function(todo) {
            return todo.id !== todoId;
        });
    }

    service.changeState = function(isCompleted, todoId) {
        var todo = _todos.filter(function(todo) {
            return todo.id === todoId;
        })[0];

        todo.isCompleted = isCompleted;
    }

    return service;

})(TodoService || {});