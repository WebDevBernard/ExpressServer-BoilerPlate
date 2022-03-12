import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Highlighter: any = {
  code({ children, className, ...props }: any) {
    let language = "jsx";
    if (className) {
      language = className.split("-")[1];
    }
    return (
      <SyntaxHighlighter
        className="border-[1px] border-slate-400 text-sm"
        wrapLines
        wrapLongLines
        style={dracula}
        PreTag="div"
        language={language}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  },
};

export default Highlighter;
