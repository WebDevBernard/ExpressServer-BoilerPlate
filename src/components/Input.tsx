import { FC } from "react";
import prettier from "prettier";
import parserMarkdown from "prettier/parser-markdown";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Input: FC<{
  setInput: any;
  input: any;
  language: any;
}> = ({ setInput, input, language }: any) => {
  const formattedText = prettier.format(input, {
    parser: "markdown",
    plugins: [parserMarkdown],
  });

  const handleChange = (editor: any, data: any, value: any) => {
    setInput(value);
  };
  return (
    <div>
      <button onClick={() => setInput(formattedText)}>ssss</button>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={input}
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          lineNumbers: true,
          theme: "dracula",
        }}
      />
    </div>
  );
};

export default Input;
