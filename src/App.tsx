import { ChangeEvent, useState } from "react";
import Input from "./components/Input";
import NotesList from "./components/NotesList";
function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <NotesList input={input} />

      <Input language="xml" setInput={setInput} input={input} />
    </div>
  );
}

export default App;
