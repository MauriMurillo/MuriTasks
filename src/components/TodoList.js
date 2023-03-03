import React from "react";
import "./styles_component/TodoList.css";
function TodoList(props) {
  return (
    <div className="listContainer">
      <ul className="listTodo">{props.children}</ul>
    </div>
  );
}
export { TodoList };
