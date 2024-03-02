import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

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
      <Header />
      <TodoForm />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
