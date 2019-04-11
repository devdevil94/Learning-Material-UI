import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
