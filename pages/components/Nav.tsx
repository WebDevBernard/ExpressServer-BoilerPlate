import React from "react";
import {
  TrashIcon,
  ClipboardIcon,
  ExternalLinkIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const Nav = () => {
  return (
    <div className=" flex flex-col justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
      <div className="space-y-6 ">
        <div className="">
          <input className="border mt-2 rounded-md"></input>
          <SearchIcon className="hero right-0" />
        </div>

        <div className="space-y-2">
          <p className="text-xl font-bold">Library</p>
          <div className="border-l-[1px] p-1 text-[14px] space-y-2">
            <div className="flex">
              <ClipboardIcon className="hero" />
              Notes
            </div>
            <div className="flex">
              <TrashIcon className="hero" />
              Trash
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-bold">Notes</p>
          <div className="border-l-[1px] p-1 text-[14px] space-y-2">
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>

            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
            <p>Learn Markdown</p>
          </div>
        </div>
      </div>
      <button className="border m-2 flex justify-center items-center rounded-md fixed bottom-0 bg-white">
        New Note
        <ExternalLinkIcon className="ml-2 hero " />
      </button>
    </div>
  );
};

export default Nav;
