import { useState } from "react";
import Highlighter from "./Highlighter";
import ReactMarkdown from "react-markdown";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { javascript } from "@codemirror/lang-javascript";
const Editor = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  const [toggle, setToggle] = useState(true);

  return (
    <div className="mx-auto w-3/4">
      <button onClick={() => setToggle(!toggle)}>Click Me</button>
      {toggle ? (
        <CodeMirror
          className="text-xl"
          value={value}
          theme={oneDark}
          height="100%"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            setValue(value);
          }}
        />
      ) : (
        <ReactMarkdown
          className=""
          children={value}
          components={Highlighter}
        ></ReactMarkdown>
      )}
    </div>
  );
};

export default Editor;
