import SideBarLink from "../Sidebar/SideBarLink";
import {
  TrashIcon,
  ClipboardIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className=" text-slate-600 pt-6 bg-[#1C161E]  min-w-fit px-4 space-y-6 overflow-y-auto overflow-x-hidden no-scrollbar">
      <SideBarLink>
        <ClipboardIcon className="h-6 text-neutral_text" />
      </SideBarLink>
      <SideBarLink>
        <TrashIcon className="h-6 text-neutral_text" />
      </SideBarLink>

      <UserCircleIcon className="fixed bottom-5 h-6 text-neutral_text" />
    </div>
  );
};

export default Sidebar;
