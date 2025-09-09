import { describe, test, expect } from 'vitest';
import 
    todoReducer,
    {
        addTodo,
        deleteTodo,
        toggleTodoStatus,
        saveTodosToLocalStorage
    } from '../model/todoSlice.ts';

describe('Testing todoSlice', () => {
    test('should return default value when empty action is invoked', () => {
        const result = todoReducer(undefined, { type: '' });

        expect(result).toEqual({ todoList: [] });
    });

    test('should add new todo to state that is passed by action and set text string to lower case', () => {
        const todo = { id: 1, text: 'First Todo', status: false };
        const action = { type: addTodo.type, payload: { text: todo.text }};
        const result = todoReducer({ todoList: [] }, action);

        expect(result.todoList[0].text).toBe('first todo');
        expect(result.todoList[0].status).toBe(false);
    });

    test('should delete todo that is passed by action', () => {
        const state = {
            todoList: [
                {
                    id: 1,
                    text: 'todo',
                    status: false,
                },
            ]
        };

        const action = { type: deleteTodo.type, payload: { id: 1 }};
        const result = todoReducer(state, action);

        expect(result).toEqual({ todoList: [] });
    });

    test('should toggle status of todo which id is passed by action', () => {
        const state = {
            todoList: [
                {
                    id: 1,
                    text: 'todo',
                    status: false,
                },
                {
                    id: 2,
                    text: 'todo',
                    status: true,
                },
            ]
        };

        const firstAction = { type: toggleTodoStatus.type, payload: { id: 1 }};
        const secondAction = { type: toggleTodoStatus.type, payload: { id: 2 }};

        const firstTodoResult = todoReducer(state, firstAction);
        const secondTodoResult = todoReducer(state, secondAction);

        expect(firstTodoResult.todoList[0].status).toBe(true);
        expect(secondTodoResult.todoList[1].status).toBe(false);
    });

    test('should save todos to localStorage from state', () => {
        const state = {
            todoList: [
                {
                    id: 1,
                    text: 'todo',
                    status: false,
                },
            ]
        };

        const action = { type: saveTodosToLocalStorage.type, payload: '' };
        todoReducer(state, action);

        const result = JSON.parse(window.localStorage.getItem('todos')!);

        expect(result).toEqual(state.todoList);
    });
});
