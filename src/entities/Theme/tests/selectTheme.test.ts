import { describe, test, expect } from 'vitest';
import { selectTheme } from '../model/themesSlice.ts';
import type { ThemeState } from '../model/types';

describe('Testing themesSlice selector', () => {
    test('should return theme value form state', () => {
        const theme = { theme: 'dark' } as ThemeState;
        const result = selectTheme({ theme });

        expect(result).toBe('dark');
    });
});
