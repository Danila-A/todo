import { createSelector } from "@reduxjs/toolkit";
import { selectSearchValue } from "../../../entities/Search";
import { selectFilter } from "../../../entities/Filter";
import { selectTodos } from "../../../entities/Todo/model/todoSlice";

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
