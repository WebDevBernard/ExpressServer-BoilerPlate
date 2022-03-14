import { PlusIcon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <div className="flex-0 overflow-x-auto bg-transparent ">
      <div className="flex items-center border-secondary border-y-2">
        <div className="border-secondary  border-r-2 p-1 text-dark_text">
          Markdown
        </div>
        <div className="border-secondary   border-r-2 p-1 text-light_text">
          JavaScript
        </div>
        <div className="border-secondary  border-r-2 p-1  text-light_text">
          <PlusIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
