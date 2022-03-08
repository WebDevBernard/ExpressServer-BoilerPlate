import { FC } from "react";
import ReactMd from "./ReactMd";

const NotesList: FC<{ input: string }> = ({ input }) => {
  return (
    <div>
      <ReactMd input={input} />
    </div>
  );
};

export default NotesList;
