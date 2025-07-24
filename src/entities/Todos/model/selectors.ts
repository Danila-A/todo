import { createSelector } from "@reduxjs/toolkit";
import { selectTodos } from "./todoSlice";

export const selectMemoizedTodos = createSelector(
    [selectTodos],
    (todos) => todos
);
