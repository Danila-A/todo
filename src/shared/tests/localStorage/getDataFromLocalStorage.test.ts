import { describe, test, expect } from 'vitest';
import { getDataFromLocalStorage } from '../../lib/localStorage/getDataFromLocalStorage.ts';

describe('Testing function which gets data from local storage', () => {
    test('should return value that is placed in localStorage', () => {
        const data = { value: 'some test data'};
        window.localStorage.setItem('test', JSON.stringify(data));

        const result = getDataFromLocalStorage<{ value: string }>('test');
        expect(result).toEqual(data);
    });

    test('should return "null" when wrong key is passed', () => {
        const result = getDataFromLocalStorage<string>('hello');

        expect(result).toBeNull();
    });
});
