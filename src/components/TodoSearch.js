import React, { useContext } from "react";
import "./styles_component/TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch() {
  const { searchParam, setSearchParam } = useContext(TodoContext);
  const filterTodo = (event) => {
    setSearchParam(event.target.value);
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="search todo"
        className="searchBar"
        value={searchParam}
        onChange={filterTodo}
      ></input>
    </div>
  );
}
export { TodoSearch };
