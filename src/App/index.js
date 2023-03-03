import React from "react";
import { TodoProvider } from "../TodoContext/index.js";
import { AppUI } from "./AppUI.js";

import "./App.css";

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
