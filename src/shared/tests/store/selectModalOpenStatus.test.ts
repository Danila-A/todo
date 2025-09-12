import { describe, test, expect } from 'vitest';
import { selectModalOpenStatus } from '../../model';

describe('Testing of selectModalOpenStatus', () => {
    test('should return modal open status which is contained at state', () => {
        const modal = { open: true };
        const result = selectModalOpenStatus({ modal });

        expect(result).toBe(true);
    });
});
