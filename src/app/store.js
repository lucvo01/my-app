import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import multiCounterReducer from "../features/multiCounter/multiCounterSlice";

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    multiCounter: multiCounterReducer
  })
});
