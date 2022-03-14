import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import Button from "../Shared/Button";
import prettier from "prettier";
import parser from "prettier/parser-markdown";
import ReactMarkdown from "react-markdown";
import Highlighter from "./Highlighter";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
if (typeof window !== undefined) {
}
const CodeEditor = () => {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  const [toggle, setToggle] = useState(true);
  const onFormatClick = () => {
    const formatted = prettier.format(value, {
      parser: "mdx",
      plugins: [parser],
    });
    setValue(formatted);
    setToggle(!toggle);
  };

  return (
    <div className="p-4 bg-transparent flex-1">
      <Button
        className="whitespace-none border absolute z-20 right-0"
        onClick={onFormatClick}
      >
        Toggle View
      </Button>

      {toggle ? (
        <CodeMirror
          options={{
            lineWrapping: true,
            mode: "xml",
            theme: "material",
          }}
          value={value}
          onBeforeChange={(editor, data, value) => {
            setValue(value);
          }}
        />
      ) : (
        <div className="relative">
          <ReactMarkdown
            className="text-neutral_text"
            children={value}
            components={Highlighter}
          ></ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
