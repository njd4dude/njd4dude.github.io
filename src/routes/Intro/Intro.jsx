import React from "react";
import Navbar from "../../components/Navbar";
import AboutMe from "../../components/AboutMe";

const Intro = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] rounded-2xl p-5 ">
      <div className="flex justify-between items-center">
        <span className="flex  flex-col items-center ml-4 p-2">
          <h2 className="text-7xl pb-4 font-round font-extrabold text-center text-white">
            NATHAN DONATO
          </h2>
          <p className=" text-center text-gray-300 text-lg font-semibold w-2/3 ">
            Hello my name is Nathan, I'm passionate about crafting engaging and
            practical applications. Whether you need a website developed or have
            a software engineering opportunity, I'm here to help. Feel free to
            reach out, and let's discuss how we can collaborate.
            <span className="inline-block ml-0.5 w-[2px] h-4 bg-white animate-blink"></span>
          </p>
        </span>
        <img
          src="/images/SomeoneCoding.webp"
          className="w-2/5 m-4 rounded-2xl mr-28"
          alt="profile picture"
        />
      </div>
      {/* <AboutMe /> */}
    </div>
  );
};

export default Intro;
