import React, { useContext } from "react";
import "./styles_component/TodoCounter.css";
import { TodoContext } from "../TodoContext";
function TodoCounter() {
  const { totalTodos, todosCompleted } = useContext(TodoContext);
  return (
    <h1 className="mainHeading">
      Has completado {todosCompleted} de {totalTodos} MuriTasks
    </h1>
  );
}
export { TodoCounter };
