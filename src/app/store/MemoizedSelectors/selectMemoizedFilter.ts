import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../../../entities/Filters/model/filterSlice";

export const selectMemoizedFilter = createSelector(
    [selectFilter],
    (filter) => filter
);
