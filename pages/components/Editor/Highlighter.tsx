import highlight from "./highlight";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Highlighter: any = {
  code({ children, className, ...props }: any) {
    let language = "jsx";
    if (className) {
      language = className.split("-")[1];
    }

    return (
      <div>
        <SyntaxHighlighter
          className="border-[1px] bg-secondary w-fit border-neutral_text rounded-md p-1"
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
