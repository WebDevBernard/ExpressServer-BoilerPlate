import { PencilAltIcon } from "@heroicons/react/outline";
import SearchBar from "../Shared/SearchBar";
import NoteItem from "./NoteItem";

const Nav = () => {
  return (
    <div className=" min-w-fit bg-inherit  overflow-y-auto overflow-x-hidden  bg-primary   no-scrollbar border-x-2 border-secondary">
      <div className="flex justify-center items-center py-4 border-b-neutral_text border-b-[1px]">
        <SearchBar />
        <PencilAltIcon className=" h-6 w-6 text-neutral_text cursor-pointer" />
      </div>

      <NoteItem content="Learn Markdown" createdAt="Aug 05" />
      <NoteItem content="Learn Markdown" createdAt="Aug 05" />
      <NoteItem content="Learn Markdown" createdAt="Aug 05" />
      <NoteItem content="Learn Markdown" createdAt="Aug 05" />
    </div>
  );
};

export default Nav;
