import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoItem, TodoState } from "./types";
import { setDataToLocalStorage } from "../../../app";
import { getDataFromLocalStorage } from "../../../app/helpers/getDataFromLocalStorage";

const initialState: TodoState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    selectors: {
        selectTodos: (state) => state.todoList,
    },
    reducers: {
        addTodo(state, action: PayloadAction<{ text: string }>){
            state.todoList?.push({
                id: Math.random(),
                text: action.payload.text,
                status: false,
            });
            if (state.todoList) setDataToLocalStorage<TodoItem[]>(state.todoList, 'todos');
        },
        deleteTodo(state, action: PayloadAction<{ id: number }>){
            if (state.todoList) {
                state.todoList = state.todoList?.filter((item) => item.id !== action.payload.id);
                setDataToLocalStorage<TodoItem[]>(state.todoList, 'todos');
            }
        },
        toggleTodoStatus(state, action: PayloadAction<{ id: number }>){
            const todoItem = state.todoList?.find((item) => item.id == action.payload.id);
            if (todoItem && state.todoList) {
                todoItem.status = !todoItem.status;
                setDataToLocalStorage<TodoItem[]>(state.todoList, 'todos');
            }
        },
        retrieveTodosFromLocalStorage(state){
            const todos = getDataFromLocalStorage<TodoItem[]>('todos');
            if (todos) state.todoList = todos;
        },
    },
});

export const { addTodo, deleteTodo, toggleTodoStatus, retrieveTodosFromLocalStorage } = todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;
export default todoSlice.reducer;
