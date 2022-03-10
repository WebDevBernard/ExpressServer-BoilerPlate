import { useState } from "react";


import dynamic from "next/dynamic";
import rehypeSanitize from "rehype-sanitize";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeBlock = {
  code({ children, className, ...props }) {
    let language = "jsx";
    if (className) {
      language = className.split("-")[1];
    }

    return (
      <SyntaxHighlighter
        wrapLines
        wrapLongLines
        showLineNumbers
        style={dark}
        PreTag="div"
        language={language}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  },
};
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

function HomePage() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div>
      <MDEditor
        previewOptions={{ components: CodeBlock }}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default HomePage;
