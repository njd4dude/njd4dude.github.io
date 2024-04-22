import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Sidebar = ({ collapsed, toggleSidebar }) => {
  //how can i make it so that the i trigger toggleSidebar whenever i click anywhere outisde of the sidebar

  const pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const leaveSideBar = () => {
    toggleSidebar();
  };

  return (
    <div
      className={`z-20 sidebar bg-white shadow-2xl border-black shadow-black h-full text-black fixed top-0 left-0 overflow-x-hidden duration-300 ${
        collapsed ? "w-0 " : "w-44"
      } md:hidden `}
    >
      <button
        className="close-btn absolute top-0 right-0 text-black cursor-pointer bg-transparent font-bold text-xl p-4"
        onClick={leaveSideBar}
      >
        &times;
      </button>
      <ul className="mt-12 ml-10 py-24   ">
        {pages.map((page, index) => (
          <li key={index} className="py-2 px-4 hover:bg-black hover:bg-opacity-50">
            <Link to={page.link} className="block" onClick={leaveSideBar}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
