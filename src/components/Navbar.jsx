import React from "react";
import { Link, useLocation } from "react-router-dom"; // If you're using React Router
import "./Navbar.css";
//2/18 cant figure out how to hide scrollbar on projects page
const Navbar = ({ children }) => {
  const location = useLocation();
  console.log("Current route:", location.pathname);

  return (
    <div className="navContainer h-screen overflow-y-scroll bg-gray-100 text-white">
      <div className="bg-black bg-opacity-90 fixed w-full flex justify-between items-center px-4 py-4">
        <p className="text-4xl font-round hover:scale-105 ">
          <Link to="/">NJDev</Link>
        </p>
        <div className="flex space-x-8 ">
          <span className="relative">
            <div className="absolute -left-4 top-[4px]">
              {location.pathname == "/" && (
                <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
              )}
            </div>
            <Link className="hover:shadow-xl p-2 " to="/">
              Home
            </Link>
          </span>
          <span className="relative">
            <div className="absolute -left-4 top-[4px]">
              {location.pathname == "/projects" && (
                <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
              )}
            </div>
            <Link className="hover:shadow-xl p-2 " to="/projects">
              Projects
            </Link>
          </span>
          <span className="relative">
            <div className="absolute -left-4 top-[4px]">
              {location.pathname == "/contact" && (
                <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
              )}
            </div>
            <Link className="hover:shadow-xl p-2 " to="/contact">
              Contact
            </Link>
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
