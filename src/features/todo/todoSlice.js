import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

const initialState = {
  todos: [],
  filter: "SHOW_ALL",
  status: "idle"
};

// let nextTodoId = 0;

export const addTodo = createAsyncThunk("counter/addTodo", async (text) => {
  const todo = {
    text,
    completed: false
  };
  const response = await apiService.post("/todos", todo);
  return response.data;
});

export const getTodos = createAsyncThunk("counter/getTodo", async () => {
  const response = await apiService.get("/todos");
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
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(getTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
