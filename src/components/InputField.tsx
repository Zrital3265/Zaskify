import React, { useRef } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleGo: (e: React.FormEvent) => void;
}
const InputField: React.FC<props> = ({ todo, setTodo, handleGo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleGo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};
export default InputField;
