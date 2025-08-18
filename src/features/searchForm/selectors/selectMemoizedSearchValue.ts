import { createSelector } from "@reduxjs/toolkit";
import { selectSearchValue } from "../../../entities/Search/model/searchSlice";

export const selectMemoizedSearchValue = createSelector(
    [selectSearchValue],
    (searchValue) => searchValue
);
