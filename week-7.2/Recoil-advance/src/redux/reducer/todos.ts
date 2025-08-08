import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  description: string;
};

const initial: Todo[] = [
  {
    id: "1",
    title: "Test",
    description: "Hello Testing Done ✅",
  },
];

export const todos = createSlice({
  name: "todos",
  initialState: initial,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      const findIn = state.findIndex((t) => t.id === action.payload.id);
      state = state.splice(findIn, 1);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const findIn = state.findIndex((t) => t.id === action.payload.id);
      if (action.payload.title !=="") {
        state[findIn].title = action.payload.title;
        return;
      }
      if (action.payload.description !=="") {
        state[findIn].description = action.payload.description;
        return;
      }
    },
  },
});

export const { addTodo, deleteTodo ,editTodo } = todos.actions;
