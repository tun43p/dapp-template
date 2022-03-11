import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(): JSX.Element {
  return (
    <div>
      <h1>Dapp Template</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
