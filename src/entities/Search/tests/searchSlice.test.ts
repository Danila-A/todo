import { describe, expect, test } from 'vitest';
import searchReducer, { setSearchValue } from '../model/searchSlice.ts';

describe('Testing searchSlice', () => {
    test('should return default value when empty action is invoked', () => {
        const result = searchReducer(undefined, { type: '' });

        expect(result).toEqual({ value: '' });
    });

    test('should set value at state that is passed by action and set value string in lower case', () => {
        const action = { type: setSearchValue.type, payload: { value: 'Some todo' }};

        const result = searchReducer({ value: '' }, action);

        expect(result).toEqual({ value: 'some todo' });
    })
});
