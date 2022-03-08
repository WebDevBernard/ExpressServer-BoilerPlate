import { FC } from "react";

const Input: FC<{
  handleInput: any;
  input: any;
}> = ({ handleInput, input }) => {
  return (
    <div>
      <textarea onChange={handleInput} value={input}></textarea>
    </div>
  );
};

export default Input;
