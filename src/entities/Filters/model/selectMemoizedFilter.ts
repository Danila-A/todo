import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "./filterSlice";
import { selectMemoizedTodos } from "../../Todos";

export const selectMemoizedFilter = createSelector(
    [selectFilter, selectMemoizedTodos],
    (filter, todos) => {
        if (filter == 'complete') {
            return todos?.filter((item) => item.status == true);
        }

        if (filter == 'incomplete') {
            return todos?.filter((item) => item.status == false);
        }

        return todos;
    }
);
