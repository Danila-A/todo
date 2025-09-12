import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../../entities/Theme";
import { todoReducer } from "../../entities/Todo";
import { filterReducer } from "../../entities/Filter";
import { searchReducer } from "../../entities/Search";
import { modalReducer } from "../../shared/model";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todo: todoReducer,
        filter: filterReducer,
        search: searchReducer,
        modal: modalReducer,
    },
});
