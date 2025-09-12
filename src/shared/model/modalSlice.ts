import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: { open: false },
    selectors: {
        selectModalOpenStatus: (state) => state.open,
    },
    reducers: {
        changeModalOpenStatus(state, action:PayloadAction<{ open: boolean }>) {
            state.open = action.payload.open;
        }
    }
});

export const { changeModalOpenStatus } = modalSlice.actions;
export const { selectModalOpenStatus } = modalSlice.selectors;
export default modalSlice.reducer;
