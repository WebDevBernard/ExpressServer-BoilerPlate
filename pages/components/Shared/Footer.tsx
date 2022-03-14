import {
  CheckIcon,
  ClipboardListIcon,
  TrashIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className="flex justify-end bg-transparent p-1 text-neutral_text">
      <div className="flex items-center bg-secondary px-2 ">
        <CheckIcon className="hero " /> Last saved @ 7:25PM
      </div>
    </div>
  );
};

export default Footer;
