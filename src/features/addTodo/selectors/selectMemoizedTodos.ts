import { createSelector } from "@reduxjs/toolkit";
import { selectTodos } from "../../../entities/Todos/model/todoSlice";
import { selectFilter } from "../../../entities/Filters";
import { selectSearchValue } from "../../../entities/Search";
import type { TodoItem } from "../../../entities/Todos/model/types";

export const selectMemoizedTodos = createSelector(
    [selectTodos, selectFilter, selectSearchValue],
    (todos, filter, searchValue) => {
        if (filter == 'complete') {
            const result = filterBySearchValue(searchValue, todos);
            return result ? result.filter((item) => item.status == true) : null;
        }

        if (filter == 'incomplete') {
            const result = filterBySearchValue(searchValue, todos);
            return result ? result.filter((item) => item.status == false) : null;
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
