import { createSelector } from "@reduxjs/toolkit";
import { selectSearchValue } from "../../../entities/Search";
import { selectFilter } from "../../../entities/Filter";
import { selectTodos } from "../../../entities/Todo";

export const selectMemoizedTodos = createSelector(
    [selectTodos, selectFilter, selectSearchValue],
    (todos, filter, searchValue) => {
        if (filter == 'complete') {
            const result = filterBySearchValue(searchValue, todos);
            return result.filter((item) => item.status === true);
        }

        if (filter == 'incomplete') {
            const result = filterBySearchValue(searchValue, todos);
            return result.filter((item) => item.status === false);
        }

        return filterBySearchValue(searchValue, todos);
    }
);

function filterBySearchValue(searchValue: string, todos: TodoItem[]): TodoItem[] {
    if (!searchValue) return todos;
    if (todos) {
        const filteredBySearch = todos.filter((item) => item.text.includes(searchValue));
        return filteredBySearch ? filteredBySearch : [];
    } else {
        return [];
    }
}
