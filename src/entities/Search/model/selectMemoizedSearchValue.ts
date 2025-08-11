import { createSelector } from "@reduxjs/toolkit";
import { selectSearchValue } from "./searchSlice";

export const selectMemoizedSearchValue = createSelector(
    [selectSearchValue],
    (searchValue) => searchValue
);
