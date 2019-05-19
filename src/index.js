import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

function Index() {
  return (
    <div>
      <App />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
