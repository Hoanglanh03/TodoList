import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Hoàng Lanh", isImportant: false, isCompleted: true },
    { id: 2, name: "Yến Nhi", isImportant: false, isCompleted: false },
    { id: 3, name: "Thị Hà", isImportant: true, isCompleted: true },
  ]);

  const handleCompleteCheckboxChange = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const inputRef = useRef();
  const todos = todoList.map((todo, index) => {
    return (
      <TodoItem
        id={todo.id}
        name={todo.name}
        key={todo.id}
        isImportant={todo.isImportant}
        isCompleted={todo.isCompleted}
        handleCompleteCheckboxChange={handleCompleteCheckboxChange}
      />
    );
  });

  return (
    <div className="container">
      <input
        ref={inputRef}
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
              { id: crypto.randomUUID(), name: value },
            ]);
            inputRef.current.value = "";
          }
        }}
      />
      <div>{todos}</div>

      <Sidebar />
    </div>
  );
}

export default App;
