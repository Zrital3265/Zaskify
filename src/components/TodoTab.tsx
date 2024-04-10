import React from "react";
import { Todo } from "../Model";
import { CiEdit } from "react-icons/ci";
import { MdDone } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

interface props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoTab: React.FC<props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>

      <div>
        <span className="icon">
          <MdOutlineDelete />
        </span>
        <span className="icon">
          <CiEdit />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoTab;
