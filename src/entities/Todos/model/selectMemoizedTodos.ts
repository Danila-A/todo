import { createSelector } from "@reduxjs/toolkit";
import { selectTodos } from "./todoSlice";
import { selectFilter } from "../../Filters";
import { selectSearchValue } from "../../Search";
import type { TodoItem } from "./types";

export const selectMemoizedTodos = createSelector(
    [selectTodos, selectFilter, selectSearchValue],
    (todos, filter, searchValue) => {
        if (filter == 'complete') {
            return filterBySearchValue(searchValue, todos)?.filter((item) => item.status == true);
        }

        if (filter == 'incomplete') {
            return filterBySearchValue(searchValue, todos)?.filter((item) => item.status == false);
        }

        return filterBySearchValue(searchValue, todos);
    }
);

function filterBySearchValue(searchValue: string, todos: TodoItem[] | null): TodoItem[] | null {
    if (!searchValue) return todos;
    if (todos) {
        const filteredBySearch = todos.filter((item) => item.text.includes(searchValue));
        return filteredBySearch ? filteredBySearch : null;
    } else {
        return null;
    }
}
