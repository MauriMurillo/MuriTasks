import React from "react";
import "./styles_component/TodoElement.css";
function TodoElement({
  text,
  completado,
  onComplete,
  onEliminate,
}) {
  return (
    <li className={"itemTodo " + completado}>
      <div className="icon iconCheck" onClick={onComplete}>
        <p>√</p>
      </div>
      <p> {text} </p>
      <div className="icon iconEliminate" onClick={onEliminate}>
        <p>X</p>
      </div>
    </li>
  );
}
export { TodoElement };
