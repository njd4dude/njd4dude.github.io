import React from "react";

const SlidingHeader = ({ children, colorGradient, color }) => {
  return (
    <div
      className="  h-full overflow-x-hidden overflow-y-hidden font-round text-bold"
      style={{ backgroundImage: colorGradient, backgroundColor: color }}
    >
      <h1
        className="text-8xl animate-slide-in-right whitespace-nowrap"
        style={{ wordSpacing: "50px", letterSpacing: "0.5em" }}
      >
        NATHAN
      </h1>
      {children}
      <h1
        className="text-8xl animate-slide-in-right whitespace-nowrap "
        style={{ wordSpacing: "50px", letterSpacing: "0.5em" }}
      >
        DONATO
      </h1>
    </div>
  );
};

export default SlidingHeader;
