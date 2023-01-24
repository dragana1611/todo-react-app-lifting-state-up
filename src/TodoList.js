import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { title: "exercise", selected: false, id: 0 },
    { title: "laundry", selected: false, id: 1 },
    { title: "dishes", selected: false, id: 2 },
    { title: "study", selected: false, id: 3 }
  ]);

  const onTodoItemClicked = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.selected = !todo.selected;
    setTodos(newTodos);
  };

  const deleteSelected = () => {
    const newTodos = todos.filter((todo) => todo.selected === false);
    setTodos(newTodos);
  };

  return (
    <div className="TodoListContainer">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onClick={onTodoItemClicked} />
      ))}
      <div className="DeleteButton" onClick={deleteSelected}>
        <p>Delete</p>
      </div>
    </div>
  );
};

export default TodoList;
