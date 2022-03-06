import { FC } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
// Two ways to pass interface to the component
// const InputField = ({ todo, setTodo }: Props) => {
const InputField: FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button>Go</button>
    </form>
  );
};

export default InputField;
