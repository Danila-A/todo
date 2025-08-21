import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../../entities/Theme";
import { todoReducer } from "../../entities/Todo";
import { filterReducer } from "../../entities/Filter";
import { searchReducer } from "../../entities/Search";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todo: todoReducer,
        filter: filterReducer,
        search: searchReducer,
    },
});
