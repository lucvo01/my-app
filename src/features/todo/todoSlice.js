import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filter: "SHOW_ALL"
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducer: {
        addTodo: (state) => {
            const payload = action;
            state.todos.push({ id: payload.id, text: payload.text})
        }
    }
})