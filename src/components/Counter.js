import React from "react";
import { useStore, useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const store = useStore();
  const value = useSelector(state => state.counter.value);
  const handleDispatch = useDispatch();
  const handleDispatchIncrement = () => handleDispatch({ type: "increment" });
  const handleDispatchDecrement = () => handleDispatch({ type: "decrement" });
  const handleDispatchChange = () => {
    const payload = parseInt(window.prompt("Enter number:"));
    if (!isNaN(payload)) {
      handleDispatch({ type: "change", payload });
    } else {
      alert("Error: format number inválid");
    }
  };
  const handleDispatchSumChange = () => {
    const payload = parseInt(window.prompt("Enter number:"));
    if (!isNaN(payload)) {
      handleDispatch({ type: "sum", payload });
    } else {
      alert("Error: format number inválid");
    }
  };

  return (
    <>
      <div>Count: {value}</div>
      <div>
        <button onClick={handleDispatchIncrement}>+</button>
        <button onClick={handleDispatchDecrement}>-</button>
        <button onClick={handleDispatchChange}>Change</button>
        <button onClick={handleDispatchSumChange}>Sum</button>
      </div>
      <div>
        <hr />
        <pre>{JSON.stringify(store.getState(), null, "\t")}</pre>
      </div>
    </>
  );
}
