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
    <div className="todos">
      {todos.map((todo) => (
        <TodoTab todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoTabs;
