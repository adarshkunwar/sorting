import React from "react";
import Options from "./Options";
import Navbar from "./Navbar"

const Layout = ({ children, setSortingName, sorting }) => {
  return (
    <div className="flex flex-col h-screen justify-start">
      <Navbar />
      <Options setSortingName={setSortingName} sorting={sorting} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

