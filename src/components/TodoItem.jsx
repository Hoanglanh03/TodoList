import React from "react";

const TodoItem = (props) => {
  function handleClick() {
    // alert(props.name);
  }

  return (
    <div className="todo-item" onClick={handleClick}>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={() => {
            props.handleCompleteCheckboxChange(props.id);
          }}
        />
        <p className="todo-item-text">{props.name}</p>
      </div>
      {props.isImportant && <p>❤️</p>}
    </div>
  );
};

export default TodoItem;
