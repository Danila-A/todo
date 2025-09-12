import { describe, test, expect } from 'vitest';
import { setDataToLocalStorage } from '../../lib/localStorage/setDataToLocalStorage.ts';

describe('Testing function that sets data to localStorage', () => {
    test('should throw error when passed empty key', () => {
        expect(() => {
            setDataToLocalStorage<string>('text', '');
        }).toThrow("key don't must be an empty string!");
    });

    test('should throw error when passed empty data', () => {
        expect(() => {
            setDataToLocalStorage<string>('', 'id');
        }).toThrow("data don't must be an empty string!");
    });

    test('should set data to localStorage', () => {
        setDataToLocalStorage<string>('text', 'id');

        const result = JSON.parse(window.localStorage.getItem('id')!);

        expect(result).toBe('text');
    });
});
