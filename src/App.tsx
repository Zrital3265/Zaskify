import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/Model";
import TodoTabs from "./components/TodoTabs";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  //for the input bar
  const [todo, setTodo] = useState<string>("");

  //for the tabs of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // for the drag and drop purpose
  const [completedTodos, setcompletedTodos] = useState<Todo[]>([]);

  const handelGo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  // for the drag end function
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    console.log(result);
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let add;
    let active = todos;
    let complete = completedTodos;
    // Source Logic
    if (source.droppableId === "TodosTabs") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    // Destination Logic
    if (destination.droppableId === "TodosTabs") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setcompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="Heading">Zaskify</span>
        <InputField todo={todo} setTodo={setTodo} handleGo={handelGo} />
        <TodoTabs
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setcompletedTodos={setcompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
