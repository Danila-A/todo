import { describe, expect, test } from 'vitest';
import filterReducer, { changeFilter } from '../model/filterSlice.ts';

describe('testing filterSlice', () => {
    test('should return default value when empty action is passed', () => {
        const result = filterReducer(undefined, { type: '' });

        expect(result).toEqual({ value: 'all'});
    });

    test('should change filter on value that is passed by action', () => {
        const action = { type: changeFilter.type, payload: { filter: 'complete'} }
        const result = filterReducer({value: 'all'}, action);

        expect(result).toEqual({value: 'complete'});
    });
});
