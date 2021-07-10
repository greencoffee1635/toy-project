import React from "react";
import "./App.css";
import Gugudan from "./Gugudan";

function App() {
  const first = Math.floor(Math.random() * 9) + 1;
  const second = Math.floor(Math.random() * 9) + 1;
  const result = first * second;

  return (
    <div className="App">
      <Gugudan first={first} second={second} result={result} />
    </div>
  );
}

export default App;
