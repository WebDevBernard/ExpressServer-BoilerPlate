import { FC } from "react";

interface IProps {
  type?: "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  content?: string;
}

const Button: FC<IProps> = (props) => {
  return (
    <button
      type={props.type || "submit"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`flex justify-center items-center m-2 px-4 py-1 rounded-2xl font-[16px] text-white  hover:bg-secondary  select-none duration-150 ease-out active:scale-95 active:shadow-sm ${props.className}`}
    >
      {props.children}
      {props.content}
    </button>
  );
};

export default Button;
