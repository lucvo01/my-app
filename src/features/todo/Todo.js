import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./todoSlice";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterButtons from "./TodoFilterButtons";

function Todo() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.todo.error)
  // useEffect(() => {
  //   dispatch(getTodos());
  // }, [dispatch]);

  return (
    <div>
      <span>{error}</span>
      <TodoAdd />
      <TodoList />
      <TodoFilterButtons />
    </div>
  );
}

export default Todo;
