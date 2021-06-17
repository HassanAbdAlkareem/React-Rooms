import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FunctionContext } from "./FunctionContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <FunctionContext>
      <App />
    </FunctionContext>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
