import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Hoàng Lanh" },
    { id: 2, name: "Yến Nhi" },
    { id: 3, name: "Thị Hà" },
  ]);


  const todos = todoList.map((todo, index) => {
    return <TodoItem name={todo.name} key={todo.id} />;
  });


  return (
    <div className="container">
      <input
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        className="task-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const value = e.target.value;
            console.log(value);
            setTodoList([
              ...todoList,
              { id: crypto.randomUUID(), name: value }
            ]);
          }
        }}
      />
      <div>{todos}</div>
    </div>
  );
}

export default App;
