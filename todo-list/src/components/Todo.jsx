import React from "react";

function Todo({ todo }) {
  return (
    <div key={todo.id} className="todo">
      <div className="content">
        <label className="checkBox">
          <input className="ch1" type="checkbox" />
          <div className="transition"></div>
        </label>
        <span>{todo.text}</span>
      </div>
      <button className="delete">x</button>
    </div>
  );
}

export default Todo;
