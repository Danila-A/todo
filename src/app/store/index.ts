import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../../entities/Themes";
import { todoReducer } from "../../entities/Todos";
import { filterReducer } from "../../entities/Filters";
import { searchReducer } from "../../entities/Search";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todo: todoReducer,
        filter: filterReducer,
        search: searchReducer,
    },
});
