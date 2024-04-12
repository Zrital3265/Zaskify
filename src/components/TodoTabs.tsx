import React from "react";
import "./styles.css";
import { Todo } from "../Model";
import TodoTab from "./TodoTab";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoTabs: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__headings">Active Tasks :</span>
        {todos.map((todo) => (
          <TodoTab
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__headings">Completed Tasks :</span>
        {todos.map((todo) => (
          <TodoTab
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoTabs;
