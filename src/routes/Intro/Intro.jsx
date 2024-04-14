import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Intro = () => {
  return (
    <Link className="" to="/contact">
      <div className="bg-[rgb(34,34,34)] rounded-2xl p-4 ">
        <div className="w-full flex-col lg:flex-row flex items-center ">
          <span className="flex flex-col text-center items-center lg:mx-20 p-2 ">
            <h2 className="text-5xl lg:text-7xl pb-4 font-round font-extrabold text-white">
              NATHAN DONATO
            </h2>
            <p className="w-full text-sm lg:w-2/3  lg:text-lg font-semibold font-terminalFont text-[#00FF00] mb-2 ">
              Hello my name is Nathan, I'm passionate about crafting engaging
              and practical applications. Whether you need a website developed
              or have a software engineering opportunity, I'm here to help. Feel
              free to reach out, and let's discuss how we can collaborate.
              <span className="inline-block ml-0.5 w-[2px] h-4 bg-[#00FF00] animate-blink"></span>
            </p>
          </span>
          <img
            src="/images/coding.gif"
            className="w-64 lg:w-80 rounded-2xl mr-30 "
            alt="profile picture"
          />
        </div>
      </div>
    </Link>
  );
};

export default Intro;
