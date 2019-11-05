import React from "react";
import Todos from "./Todos";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Counter />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
