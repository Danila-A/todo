import { createSelector } from "@reduxjs/toolkit";
import { selectTheme } from "../../../entities/Themes/model/themesSlice";

export const selectMemoizedTheme = createSelector(
    [selectTheme],
    (theme) => theme
);
