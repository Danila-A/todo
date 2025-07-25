import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../../entities/Themes";
import { todoReducer } from "../../entities/Todos";
import { filterReducer } from "../../entities/Filters";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todo: todoReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
