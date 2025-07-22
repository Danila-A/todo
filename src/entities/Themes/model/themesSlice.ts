import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ThemeState, ThemeType } from "./types";

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
        toggleTheme(state, action: PayloadAction<ThemeType>) {
            if (action.payload) state.theme = action.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export const { selectTheme } = themeSlice.selectors;
export default themeSlice.reducer;
