export interface TodoState {
    todoList: TodoItem[] | null;
}

export interface AddTodoFormValue {
    label: 'add';
    add: string;
}
