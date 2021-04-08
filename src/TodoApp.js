import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="wrapper fadeInDown">
      <div className="formContent">
        <div className="todo-app">
          <img
            type="image"
            src="https://coursework.vschool.io/content/images/2015/08/todo_logo.gif"
            id="icon"
            alt="User Icon"
            height="55"
            width="133"
          />
          <br />
          <AddTodo />
          <TodoList />
          <VisibilityFilters />
        </div>
      </div>
    </div>
  );
}
