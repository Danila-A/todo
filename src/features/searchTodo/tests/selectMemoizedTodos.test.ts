import { describe, test, expect } from 'vitest';
import { selectMemoizedTodos } from '../model/memoizedSelectors.ts';

const todo = {
        todoList: [
            {
                id: 1,
                text: 'first todo',
                status: false,
            },
            {
                id: 2,
                text: 'torrent',
                status: true,
            },
            {
                id: 3,
                text: 'do housework',
                status: false,
            }
        ] as TodoItem[]
    }

describe('Testing memoized todo selector', () => {
    test('should return all todos from state', () => {
        const result = selectMemoizedTodos({ 
            todo, 
            filter: { value: 'all' }, 
            search: { value: '' }
        });

        expect(result).toEqual(todo.todoList);
    });

    test('should only return todos which have true status', () => {
        const result = selectMemoizedTodos({ 
            todo, 
            filter: { value: 'complete' }, 
            search: { value: '' }
        });

        expect(result).toEqual([todo.todoList[1]]);
    });

    test('should only return todos which have false status', () => {
        const result = selectMemoizedTodos({ 
            todo, 
            filter: { value: 'incomplete' }, 
            search: { value: '' }
        });

        expect(result).toEqual([
            todo.todoList[0],
            todo.todoList[2]
        ]);
    });

    test('should return todos which have "to" substring into its text', () => {
            const result = selectMemoizedTodos({ 
            todo, 
            filter: { value: 'all' }, 
            search: { value: 'to' }
        });

        expect(result).toEqual([
            todo.todoList[0],
            todo.todoList[1]
        ]);
    });

    test('should return todos which have "to" substring into its text and true status', () => {
            const result = selectMemoizedTodos({ 
            todo, 
            filter: { value: 'complete' }, 
            search: { value: 'to' }
        });

        expect(result).toEqual([
            todo.todoList[1]
        ]);
    });

    test('should return todos which have "to" substring into its text and false status', () => {
            const result = selectMemoizedTodos({ 
            todo, 
            filter: { value: 'incomplete' }, 
            search: { value: 'to' }
        });

        expect(result).toEqual([
            todo.todoList[0]
        ]);
    });
});
