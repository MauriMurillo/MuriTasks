import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect, useState } from "react";
const TodoContext = React.createContext();

const defaultTodos = [
  { text: "Bienvenido a MuriTasks", completed: false },
  { text: "<- Usa los botones para completar y eliminar ->", completed: false },
  { text: "Puedes crear nuevas tareas con el signo +", completed: false },
  { text: "Puedes usar el buscador para filtrar tareas por su contenido disfruta", completed: false },
];

function TodoProvider(props){
  const [todoAllElements, saveTodos] = useLocalStorage(
    "TODOS_V1",
    defaultTodos
  );
  const [searchParam, setSearchParam] = useState("");
  const [totalTodos, setTotalTodos] = useState(todoAllElements.length);
  const [todosCompleted, setTodosCompleted] = useState(
    todoAllElements.filter((item) => !!item.completed).length
  );
  const [showAddForm, setShowAddForm] = useState(false);
  const [addParam, setAddParam] = useState("");

  useEffect(() => {
    console.log("hola");
    setTodosCompleted(
      todoAllElements.filter((todoItem) => !!todoItem.completed).length
    );
    setTotalTodos(todoAllElements.length);
  }, [todoAllElements]);

  const completeTodos = (textToFind) => {
    let updatedAllElements = [...todoAllElements];
    const indexToUpdate = todoAllElements.findIndex(
      (item) => item.text === textToFind
    );
    updatedAllElements[indexToUpdate].completed = true;
    saveTodos(updatedAllElements);
  };
  const eliminateTodos = (textToFind) => {
    let updatedAllElements = [...todoAllElements];
    const indexToUpdate = todoAllElements.findIndex(
      (item) => item.text === textToFind
    );
    updatedAllElements.splice(indexToUpdate, 1);
    saveTodos(updatedAllElements);
  };
  const onClickButtonShowAdd = ()=>{
    setShowAddForm(true);
  }
  const onClickButtonHideAdd = ()=>{
    setShowAddForm(false);
  }
  const addTodo = (textToAdd)=>{
    let updatedAllElements = [...todoAllElements];
    updatedAllElements.unshift({
      text: textToAdd,
      completed: false,
    });
    saveTodos(updatedAllElements);
    onClickButtonHideAdd();
    setAddParam("");
  }

  return(
    <TodoContext.Provider value={{
      todoAllElements,
      totalTodos,
      todosCompleted,
      searchParam,
      addParam,
      showAddForm,
      setSearchParam,
      setAddParam,
      completeTodos,
      eliminateTodos,
      onClickButtonShowAdd,
      onClickButtonHideAdd,
      addTodo,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider}