import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { setDataToLocalStorage } from "../../../shared/lib";
import { getInitialState } from "../lib/getInitialState";

const todoSlice = createSlice({
    name: 'todo',
    initialState: getInitialState(),
    selectors: {
        selectTodos: (state) => state.todoList,
    },
    reducers: {
        addTodo(state, action: PayloadAction<{ text: string }>) {
            state.todoList?.push({
                id: Math.random(),
                text: action.payload.text,
                status: false,
            });
            if (state.todoList) setDataToLocalStorage<TodoItem[]>(state.todoList, 'todos');
        },
        deleteTodo(state, action: PayloadAction<{ id: number }>) {
            if (state.todoList) {
                state.todoList = state.todoList?.filter((item) => item.id !== action.payload.id);
                setDataToLocalStorage<TodoItem[]>(state.todoList, 'todos');
            }
        },
        toggleTodoStatus(state, action: PayloadAction<{ id: number }>) {
            const todoItem = state.todoList?.find((item) => item.id == action.payload.id);
            if (todoItem && state.todoList) {
                todoItem.status = !todoItem.status;
                setDataToLocalStorage<TodoItem[]>(state.todoList, 'todos');
            }
        },
        saveTodosToLocalStorage(state) {
            setDataToLocalStorage<TodoItem[] | null>(state.todoList, 'todos');
        },
    },
});

export const { 
    addTodo, 
    deleteTodo, 
    toggleTodoStatus, 
    saveTodosToLocalStorage 
} = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;
export default todoSlice.reducer;
