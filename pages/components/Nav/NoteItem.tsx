import { FC } from "react";

interface IProps {
  content: string;
  createdAt: string;
}
const NoteItem: FC<IProps> = (props) => {
  return (
    <div className=" text-[14px] p-4 border-b-[1px] border-b-neutral_text hover:bg-secondary focus:bg-secondary">
      <div className="flex justify-between relative">
        <p className="text-light_text focus:text-dark_text">{props.content}</p>
      </div>
      <p className="text-neutral_text">{props.createdAt}</p>
    </div>
  );
};

export default NoteItem;
