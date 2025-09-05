import { describe, expect, test } from 'vitest';
import { selectSearchValue } from '../model/searchSlice.ts';

describe('Testing searchSlice selector', () => {
    test('should select data from search state', () => {
        const state = { value: 'some todo' };
        const result = selectSearchValue({ search: state });

        expect(result).toBe('some todo');
    });
});
