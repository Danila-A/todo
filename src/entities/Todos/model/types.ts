export interface TodoState {
    todoList: TodoItem[] | null;
}

export interface TodoItem {
    id: number;
    text: string;
    status: boolean;
}
