import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
  status: "idle"
};

let nextTodoId = 0;

export const addTodo = createAsyncThunk("counter/addTodo", async (text) => {
  const todo = {
    id: nextTodoId++,
    text,
    completed: false
  };
  const response = await apiService.post("/todos", todo);
  return response.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducer: {
    // addTodo: (state, action) => {
    //   const payload = action;
    //   state.todos.push({
    //     id: nextTodoId++,
    //     text: action.payload,
    //     completed: false
    //   });
    // },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload) return todo;
        return { ...todo, completed: !todo.completed };
      });
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos.push(action.payload)
      });
  }
});

export const { toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
