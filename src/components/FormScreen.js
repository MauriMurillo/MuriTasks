import React from "react";
import ReactDOM from "react-dom";
import "./styles_component/formScreen.css";

function FormScreen({ children }) {
  return ReactDOM.createPortal(
    <div className="addScreen">
      {children}
    </div>,
    document.getElementById("modal")
  );
}
export { FormScreen };
