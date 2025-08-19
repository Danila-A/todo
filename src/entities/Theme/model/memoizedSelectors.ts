import { createSelector } from "@reduxjs/toolkit";
import { selectTheme } from "./themesSlice";

export const selectMemoizedTheme = createSelector(
    [selectTheme],
    (theme) => theme
);
