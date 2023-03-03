import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../components/TodoCounter.js";
import { TodoSearch } from "../components/TodoSearch.js";
import { TodoList } from "../components/TodoList.js";
import { TodoElement } from "../components/TodoElement.js";
import { CreateTodoButton } from "../components/CreateTodoButton.js";
import { FormScreen } from "../components/FormScreen.js";
import { AddForm } from "../components/AddForm.js";

function AppUI() {
  const {
    todoAllElements,
    completeTodos,
    eliminateTodos,
    searchParam,
    showAddForm,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {/* Not completed Elements */}
        {todoAllElements
          .filter(
            (item) =>
              item.text.toLowerCase().includes(searchParam.toLowerCase()) &&
              !item.completed
          )
          .map(function (todoItem) {
            return (
              <TodoElement
                key={todoItem.text}
                text={todoItem.text}
                completado={todoItem.completed}
                onComplete={() => completeTodos(todoItem.text)}
                onEliminate={() => eliminateTodos(todoItem.text)}
              />
            );
          })}
        {/* Completed Elements */}
        {todoAllElements
          .filter(
            (item) =>
              item.text.toLowerCase().includes(searchParam.toLowerCase()) &&
              item.completed
          )
          .map(function (todoItem) {
            return (
              <TodoElement
                key={todoItem.text}
                text={todoItem.text}
                completado={todoItem.completed}
                onComplete={() => completeTodos(todoItem.text)}
                onEliminate={() => eliminateTodos(todoItem.text)}
              />
            );
          })}
      </TodoList>
      {showAddForm ? (
        <FormScreen>
          <AddForm></AddForm>
        </FormScreen>
      ) : null}
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
