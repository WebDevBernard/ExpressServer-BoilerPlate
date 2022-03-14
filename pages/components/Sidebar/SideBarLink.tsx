import React, { FC } from "react";

const SideBarLink: FC<{ className?: string; content?: string }> = (props) => {
  return (
    <div className="flex items-center md:hover:bg-hover cursor-pointer ${props.className} rounded-r-3xl relative">
      {props.children} <p className="hidden md:flex ">{props.content}</p>
    </div>
  );
};

export default SideBarLink;
