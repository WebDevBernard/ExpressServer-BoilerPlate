import { EditorState, EditorStateConfig, Extension } from "@codemirror/state";
import { EditorView, ViewUpdate } from "@codemirror/view";
export * from "@codemirror/view";

export * from "@codemirror/state";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { languages } from "@codemirror/language-data";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { FC } from "react";
import prettier from "prettier";
import parser from "prettier/parser-markdown";
import ReactMarkdown from "react-markdown";
import Highlighter from "./Highlighter";
import { PhotographIcon, PencilIcon } from "@heroicons/react/outline";

const CodeEditor = () => {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  const [toggle, setToggle] = useState(true);
  const onFormatClick = () => {
    const formatted = prettier.format(value, {
      parser: "markdown",
      plugins: [parser],
    });
    setValue(formatted);
  };

  return (
    <div className="flex-1 border relative overflow auto">
      <div className=" text-slate-500 cursor-pointer space-y-2 p-6 absolute z-20 right-0">
        <PhotographIcon className="hero" onClick={() => setToggle(!toggle)} />
        <PencilIcon onClick={onFormatClick} className="hero" />
      </div>

      {toggle ? (
        <CodeMirror
          className="text-[16px]  font-sans"
          value={value}
          height="100%"
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => {
            setValue(value);
          }}
        />
      ) : (
        <ReactMarkdown
          className="p-6"
          children={value}
          components={Highlighter}
        ></ReactMarkdown>
      )}
    </div>
  );
};

export default CodeEditor;
