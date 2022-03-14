import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = () => {
  return (
    <form className="px-2 relative flex  items-center p">
      <input
        className="w-[100%] border px-2 text-neutral_text bg-secondary"
        placeholder="Search Notes"
      />
      <SearchIcon className="text-neutral_text hero right-4 absolute" />
    </form>
  );
};

export default SearchBar;
