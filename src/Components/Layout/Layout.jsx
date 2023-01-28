import React from "react";
import Options from "./Options";

const Layout = ({ children, setSortingName, sorting }) => {
  return (
    <div className="flex w-screen justify-between">
      <div>{children}</div>
      <div className="bg-red-300">
        <Options setSortingName={setSortingName} sorting={sorting} />
      </div>
    </div>
  );
};

export default Layout;
