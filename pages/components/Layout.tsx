import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="flex h-screen w-[1024px] m-auto">{children}</div>;
};

export default Layout;
