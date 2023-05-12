import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./todoSlice";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterButtons from "./TodoFilterButtons";

function Todo() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTodos());
  // }, [dispatch]);

  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterButtons />
    </div>
  );
}

export default Todo;
