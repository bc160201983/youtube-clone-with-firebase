import React from "react";
import Filters from "./Filters";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Filters />
      <Sidebar />
      <div className="w-[calc(100%-224px)] py-[120px] float-right min-h-screen bg-[#181818]">
        {children}
      </div>
    </>
  );
};

export default Layout;
