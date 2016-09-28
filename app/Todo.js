function Todo(description) {
    this.id = Todo.UID++;
    this.description = description;
    this.isCompleted = false;
}

Todo.UID = 1;