import React, { useContext } from "react";
import "./styles_component/TodoAdd.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const {onClickButtonShowAdd}  = useContext(TodoContext);
  return (
    <div className="buttonContainer">
      <button className="buttonAdd" onClick={onClickButtonShowAdd}>
        +
      </button>
    </div>
  );
}
export { CreateTodoButton };
