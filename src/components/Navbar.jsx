import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Navbar = ({ children }) => {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-4xl font-round hover:shadow-sm hover:animate-wiggle">
          <Link to="/">NJDev</Link>
        </p>
        <div className="flex space-x-4">
          <Link className="hover:shadow-xl p-2 " to="/">
            Home
          </Link>
          <Link className="hover:shadow-xl p-2 " to="/projects">
            Projects
          </Link>
          <Link className="hover:shadow-xl p-2 " to="/contact">
            Contact
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
