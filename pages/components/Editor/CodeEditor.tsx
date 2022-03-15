import { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import Button from "../Shared/Button";
import prettier from "prettier";
import parser from "prettier/parser-markdown";
import ReactMarkdown from "react-markdown";
import Highlighter from "./Highlighter";
import remarkGfm from "remark-gfm";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const initalState = `## About

A note taking app for coders who like making notes on everything. Writing too many readme files inspired me to make this app.

## Planning

Mockup on Figma:
![mockup](https://github.com/WebDevBernard/UnNamedProjectWIP/blob/main/docs/mockup.png?raw=true)

What I plan to make:

- A markdown editor (Codemirror) that can toggle between markdown and a formatted view (ReactMarkdown) with syntax highlighting (React-SyntaxHighlighter)
- A UI panel that is mobile responsive. Each UI panel will also scroll-y independently.
- A drag and drop (React Beautiful DND), which lets the user drag notes into a trash bin and also recover it.
- Each note will also have a dialog (use right mouse click) that will have a delete option.
- Saving will be local storage, there will also be a delay after input before it gets saved automatically.
- Styling with Tailwind CSS, state management with Redux, frontend written in React.`;

const CodeEditor = () => {
  const [value, setValue] = useState<any>(initalState);
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
    <div className="p-4 bg-transparent flex-1 relative overflow-auto">
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
        <ReactMarkdown
          className="prose max-w-[1024px] prose-img:w-[600px] prose-a:text-blue-500 prose-strong:text-dark_text marker:text-dark_text mx-2 prose-lg prose-headings:text-dark_text text-light_text text-[18px] prose-pre:bg-transparent prose-pre:w-fit"
          children={value}
          components={Highlighter}
          remarkPlugins={remarkGfm}
        ></ReactMarkdown>
      )}
    </div>
  );
};

export default CodeEditor;
