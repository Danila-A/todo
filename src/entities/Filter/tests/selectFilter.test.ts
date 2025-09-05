import {describe, expect, test} from 'vitest';
import { selectFilter } from '../model/filterSlice.ts';

describe('Testing filterSlice selector', () => {
    test('should return filter type from filter state', () => {
        const filter = { value: 'all' as FilterType };

        const result = selectFilter({ filter });
        
         expect(result).toEqual(filter.value);
    });
});