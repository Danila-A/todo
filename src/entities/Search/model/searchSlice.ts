import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SearchType } from "./types";

const initialState: SearchType = {
    value: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    selectors: {
        selectSearchValue: (state) => state.value,
    },
    reducers: {
        setSearchValue(state, action: PayloadAction<SearchType>) {
            if (action.payload) state.value = action.payload.value;
        }
    }
});

export const { setSearchValue } = searchSlice.actions;
export const { selectSearchValue } = searchSlice.selectors;
export default searchSlice.reducer;
