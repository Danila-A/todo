import { createSelector } from "@reduxjs/toolkit";
import { selectTodos } from "./todoSlice";
import { selectFilter } from "../../Filters";
import { selectSearchValue } from "../../Search";

export const selectMemoizedTodos = createSelector(
    [selectTodos, selectFilter, selectSearchValue],
    (todos, filter, searchValue) => {
        if (filter == 'complete') {
            return todos?.filter((item) => item.status == true);
        }

        if (filter == 'incomplete') {
            return todos?.filter((item) => item.status == false);
        }

        return todos;
    }
);
