import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filterSlice";

export const selectMemoizedFilter = createSelector(
    [selectFilter],
    (filter) => filter
);
