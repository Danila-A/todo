import { describe, test, expect } from 'vitest';
import { changeModalOpenStatus, modalReducer } from '../../model';

describe('Testing modalSlice', () => {
    test('should return false value when an empty action is passed', () => {
        const result = modalReducer(undefined, { type: '' });

        expect(result).toEqual({ open: false });
    });

    test('should change open value at that is passed by action', () => {
        const action = { type: changeModalOpenStatus.type, payload: { open: true } };
        const result = modalReducer({open: false}, action);

        expect(result).toEqual({ open: true });
    });
});
