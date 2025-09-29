import { createSelector } from "@reduxjs/toolkit";
import { selectSearchValue } from "../../../entities/Search";
import { selectFilter } from "../../../entities/Filter";
import { selectTodos } from "../../../entities/Todo";

export const selectMemoizedTodos = createSelector(
    [selectTodos, selectFilter, selectSearchValue],
    (todos, filter, searchValue) => {
        const arrayWithSearch = filterBySearchValue(searchValue, todos).slice();
        const sortedArray = reverseArray(arrayWithSearch);

        if (filter === 'complete') {
            return sortedArray.filter((item) => item.status === true);
        }

        if (filter === 'incomplete') {
            return sortedArray.filter((item) => item.status === false);
        }

        return sortedArray;
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

function reverseArray(array: TodoItem[]): TodoItem[] {
    return array.sort((a, b) => a.id < b.id ? 1 : -1);
}
