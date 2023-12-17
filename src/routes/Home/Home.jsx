import React from "react";
import Navbar from "../../components/Navbar";
import AboutMe from "../../components/AboutMe";

const Home = () => {
  return (
    <div className="bg-[rgb(237,237,237)] ">
      <div className="flex justify-between items-center">
        <span className="flex  flex-col items-center ml-4 p-2">
          <h2 className="text-7xl pb-4 font-round font-extrabold">Nathan Donato</h2>
          <p className=" text-center text-gray-700 text-lg font-semibold w-2/3 ">
            Hello my name is Nathan, I'm passionate about crafting engaging and
            practical applications. Whether you need a website developed or have
            a software engineering opportunity, I'm here to help. Feel free to
            reach out, and let's discuss how we can collaborate.
          </p>
        </span>
        <img
          src="/images/SomeoneCoding.webp"
          className="w-2/5 m-4 rounded-3xl"
          alt="profile picture"
        />
      </div>
      {/* <AboutMe /> */}
    </div>
  );
};

export default Home;
