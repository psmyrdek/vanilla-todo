var TodoView = (function(view) {

    var _addTodoInput = document.querySelector('#todo-input');

    view.getTodos = function() {
        return TodoService.getTodos();
    }

    view.addTodo = function() {
        TodoService.addTodo(_addTodoInput.value);
        _addTodoInput.value = '';
        updateView();
    };

    view.deleteTodo = function(todoId) {
        TodoService.deleteTodo(todoId);
        updateView();
    };

    view.changeState = function(checkbox, todoId) {
        TodoService.changeState(checkbox.checked, todoId);
        updateView();
    };

    function updateView() {
        TodoRenderer.renderList(TodoService.getTodos());
    }

    return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function(event) {
    TodoRenderer.renderList(TodoView.getTodos());
});