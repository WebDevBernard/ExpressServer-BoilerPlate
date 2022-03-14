import highlight from "./highlight";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prettier from "prettier";
import parser from "prettier/parser-babel";
const Highlighter: any = {
  code({ children, className, ...props }: any) {
    let language = "jsx";
    if (className) {
      language = className.split("-")[1];
    }

    return (
      <div>
        <SyntaxHighlighter
          className="border-[1px] my-[16px] bg-secondary w-fit  border-neutral_text rounded-md p-4"
          style={highlight}
          PreTag="div"
          language={language}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    );
  },
};

export default Highlighter;
