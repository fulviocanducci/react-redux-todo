import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Todos() {
  const todos = useSelector(state => state.todos.items);
  const handleDispatchAddItem = useDispatch();
  const item = {
    type: "Add",
    payload: { id: Math.random(), name: Math.random(), done: false }
  };
  return (
    <>
      <div>
        Todos
        <button onClick={x => handleDispatchAddItem(item)}>Adicionar</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            {todo.id} - {todo.name}
          </div>
        ))}
      </div>
    </>
  );
}
export default Todos;