import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./reducer/todos";

export const store = configureStore({
    reducer: {
        [todos.name]: todos.reducer
    },
})