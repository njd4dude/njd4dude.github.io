import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router
// import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
const Navbar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const sideNavRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setCollapsed(true);
    }
  }

  const toggleSidebar = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  useEffect(() => {}, [collapsed]);

  return (
    <div className="navContainer h-screen overflow-x-hidden bg-[#bebebe] text-black relative">
      <span className="bg-[#ececec]  w-full h-16 flex p-8 absolute"></span>
      <div className="absolute w-full flex justify-center items-center mt-2">
        <p className="text-4xl font-round ">
          <Link className="" to="/">
            <img className="w-14 p-2" src="images\nd2.png" />
          </Link>
        </p>
      </div>
      <span
        className="w-16 h-16 flex justify-center items-center left-4 top-0 absolute md:hidden "
        onClick={toggleSidebar}
      >
        <MenuIcon fontSize="" className="text-[50px] text-100 " />
      </span>

      <div ref={sideNavRef}>
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      </div>
      <div className="hidden absolute md:flex space-x-8 right-8 top-4 font-semibold font-sans">
        <span className="hover:scale-110 transition-transform">
          <Link className="p-2" to="/">
            Home
          </Link>
        </span>
        <span className=" hover:scale-110 transition-transform">
          <Link className="p-2 " to="/projects">
            Projects
          </Link>
        </span>
        <span className=" hover:scale-110 transition-transform">
          <Link className="p-2 " to="/contact">
            Contact
          </Link>
        </span>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
