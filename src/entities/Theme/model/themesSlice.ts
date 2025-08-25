import { createSlice } from "@reduxjs/toolkit";
import type { ThemeState } from "./types";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../../../shared/lib";

const initialState: ThemeState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    selectors: {
        selectTheme: (state) => state.theme,
    },
    reducers: {
        toggleTheme(state) {
            if (state.theme == 'light') {
                state.theme = 'dark';
                setDataToLocalStorage<ThemeType>('dark', 'theme');    
            } else {
                state.theme = 'light';
                setDataToLocalStorage<ThemeType>('light', 'theme');
            }            
        },
        retrieveThemeTypeFromLocalStorage(state) {
            const localStorageThemeType = getDataFromLocalStorage<ThemeType>('theme');
            if (localStorageThemeType) state.theme = localStorageThemeType;
        },
        saveThemeTypeToLocalStorage(state) {
            setDataToLocalStorage<ThemeType>(state.theme, 'theme');
        }
    },
});

export const { 
    toggleTheme, 
    retrieveThemeTypeFromLocalStorage, 
    saveThemeTypeToLocalStorage 
} = themeSlice.actions;
export const { selectTheme } = themeSlice.selectors;
export default themeSlice.reducer;
