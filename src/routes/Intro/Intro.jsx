import React from "react";
import IconLinks from "../../components/IconLinks";

const Intro = () => {
  return (
    <div className="w-10/12">
      <div className="bg-[#d0d0d0] rounded-t-2xl p-4 flex justify-center">
        <div className="flex justify-evenly items-center w-full bg">
          <h2 className="text-5xl lg:text-7xl pb-4 font-round font-extrabold text-center whitespace-nowrap  ">
            NATHAN DONATO
          </h2>
          <p className="ml-8 w-1/3 text-lg text-left lg:text-2xl font-terminalFont text-black ">
            Hello my name is Nathan. Come check out my projects!
            <span className="inline-block ml-0.5 w-[2px] h-4 bg-black animate-blink"></span>
          </p>
        </div>
      </div>
      <IconLinks />
    </div>
  );
};

export default Intro;
