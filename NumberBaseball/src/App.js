import React from "react";
import "./App.css";
import NumberBaseball from "./NumberBaseball";

function App() {
  const number = Math.floor(Math.random() * 9) + 1;
  const result = number;

  return (
    <div className="App">
      <NumberBaseball number={number} result={result} />
    </div>
  );
}

export default App;
