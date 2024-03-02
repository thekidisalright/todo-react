import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Recuperar a Espada Sagrada",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Treinar artes marciais com Pai Mei",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Matar Bill",
      isCompleted: false,
    },
  ]);
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
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
        ))}
      </div>
    </div>
  );
}

export default App;
