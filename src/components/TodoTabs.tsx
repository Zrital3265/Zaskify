import React from "react";
import { Todo } from "../models/Model";
import TodoTab from "./TodoTab";
import { Droppable } from "react-beautiful-dnd";

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setcompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Array<Todo>;
}
const TodoTabs: React.FC<props> = ({
  todos,
  setTodos,
  completedTodos,
  setcompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosTabs">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__headings">Active Tasks :</span>
            {todos.map((todo, index) => (
              <TodoTab
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__headings">Completed Tasks :</span>
            {completedTodos.map((todo, index) => (
              <TodoTab
                index={index}
                todo={todo}
                todos={completedTodos}
                key={todo.id}
                setTodos={setcompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoTabs;
