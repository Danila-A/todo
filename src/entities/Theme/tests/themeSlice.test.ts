import { describe, expect, test } from 'vitest';
import themeReducer, { toggleTheme, saveThemeTypeToLocalStorage } from '../model/themesSlice.ts';
import type { ThemeState } from '../model/types';

describe('Testing themesSlice', () => {
    test('should return default value when empty action is invoked', () => {
        const result = themeReducer(undefined, { type: '' });

        expect(result).toEqual({ theme: 'light' });
    });

    test("should toggle theme value from 'light' to 'dark' and must do reversely it too", () => {
        const action = { type: toggleTheme.type, payload: '' };
        const fromLightToDarkResult = themeReducer({ theme: 'light' }, action);
        const fromDarkToLightResult = themeReducer({ theme: 'dark' }, action);

        expect(fromLightToDarkResult).toEqual({ theme: 'dark' });
        expect(fromDarkToLightResult).toEqual({ theme: 'light' });
    });

    test('should save theme value to localStorage', () => {
        const action = { type: saveThemeTypeToLocalStorage.type, payload: '' };
        const themeState = { theme: 'dark' } as ThemeState;
        themeReducer(themeState, action);

        const result = JSON.parse(window.localStorage.getItem('theme')!)

        expect(result).toBe('dark');
    });
});
