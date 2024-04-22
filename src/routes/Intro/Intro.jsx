import React from "react";
import IconLinks from "../../components/IconLinks";

const Intro = () => {
  return (
    <div className="w-10/12">
      <div className="bg-[#d0d0d0] rounded-t-2xl p-4">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl pb-4 font-round font-extrabold w-full text-center  ">
            NATHAN DONATO
          </h2>
          <div className="ml-4 w-full ">
            <p className="text-md md:text-lg text-left lg:text-2xl font-terminalFont text-black relative">
              Hello my name is Nathan. Come check out my projects!
              <span className="-ml-2 animate-blink">|</span>
            </p>
          </div>
        </div>
      </div>
      <IconLinks />
    </div>
  );
};

export default Intro;
