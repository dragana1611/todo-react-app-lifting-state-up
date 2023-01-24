import React, { useState } from "react";

const getClassName = (selected) => {
  if (selected) {
    return "TodoItemContainer selected";
  } else {
    return "TodoItemContainer";
  }
};

const TodoItem = ({ todo, onClick }) => {
  return (
    <div
      className={getClassName(todo.selected)}
      onClick={() => onClick(todo.id)}
    >
      <p className="TodoTitle">{todo.title}</p>
    </div>
  );
};

export default TodoItem;
