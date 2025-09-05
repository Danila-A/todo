import { describe, test, expect } from 'vitest';
import { selectTodos } from '../model/todoSlice.ts';

describe('Testing todoSlice selector', () => {
    test('should return todo list form state', () => {
        const state = {
            todoList: [
                {
                    id: 1,
                    text: 'todo',
                    status: false,
                } as TodoItem,
            ]
        };

        const result = selectTodos({ todo: state });
        expect(result).toEqual(state.todoList);
    });
});
