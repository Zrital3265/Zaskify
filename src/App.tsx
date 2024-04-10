import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./Model";
import TodoTabs from "./components/TodoTabs";

const App: React.FC = () => {
  //for the input bar
  const [todo, setTodo] = useState<string>("");

  //for the tabs of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  const handelGo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="Heading">Zaskify</span>
      <InputField todo={todo} setTodo={setTodo} handleGo={handelGo} />
      <TodoTabs todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
