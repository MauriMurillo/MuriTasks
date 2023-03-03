import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./styles_component/AddForm.css";

function AddForm() {
  const {onClickButtonHideAdd, addTodo, addParam, setAddParam} = useContext(TodoContext);
  const updateAddParam =(event) =>{
    setAddParam(event.target.value);
  }
  return (
    <div className="addContainer">
      <p> Anade el nuevo todo a la lista </p>
      <input
        value={addParam}
        type="text"
        placeholder="Desarrollar aplicacion ToDoMachine"
        id="add"
        onChange={updateAddParam}
      ></input>
      <div className="buttonContainer2">
        <button onClick={onClickButtonHideAdd}> Cancelar </button>
        <button onClick={() => addTodo(addParam)}> Aceptar </button>
      </div>
    </div>
  );
}

export {AddForm}