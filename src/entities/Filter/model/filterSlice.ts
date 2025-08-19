import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterState, FilterType } from "./types";

const initialState: FilterState = {
    value: 'all',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    selectors: {
        selectFilter: (state) => state.value,
    },
     reducers: {
        changeFilter(state, action: PayloadAction<{ filter: FilterType }>) {
            if (action.payload) state.value = action.payload.filter;
        },
     },
});

export const { changeFilter } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;
export default filterSlice.reducer;
