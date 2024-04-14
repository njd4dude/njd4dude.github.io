import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // If you're using React Router
// import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Sidebar from "./Sidebar";
const Navbar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = (collapsed) => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {}, [collapsed]);

  return (
    <div className="navContainer h-screen overflow-x-hidden bg-black text-white relative">
      <span className="bg-blue-950  w-full h-16 flex p-8 absolute"></span>
      <div className="absolute w-full flex justify-center items-center mt-2">
        <p className="text-4xl font-round text-white ">
          <Link className="" to="/">
            NJDev
          </Link>
        </p>
      </div>
      <span
        className="w-16 h-16 flex justify-center items-center left-4 top-0 absolute md:hidden "
        onTouchEnd={() => toggleSidebar(collapsed)}
      >
        <MenuIcon fontSize="" className="text-[50px] text-100 " />
      </span>
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

      <div className="hidden absolute md:flex space-x-8 right-8 top-4">
        {/* if i got rid of absolute here it doenst show this */}
        <span className="hover:scale-105 ">
          <Link className="p-2 " to="/">
            Home
          </Link>
        </span>
        <span className=" hover:scale-105">
          <Link className="hover:shadow-2xl p-2 " to="/projects">
            Projects
          </Link>
        </span>
        <span className=" hover:scale-105">
          <Link className="hover:shadow-2xl p-2 " to="/contact">
            Contact
          </Link>
        </span>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
