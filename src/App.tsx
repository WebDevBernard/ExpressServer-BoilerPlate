import { ChangeEvent, useState } from "react";

import Input from "./components/Input";
import NotesList from "./components/NotesList";
function App() {
  const [input, setInput] = useState("");
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <NotesList input={input} />

      <Input handleInput={handleInput} input={input} />
    </div>
  );
}

export default App;
