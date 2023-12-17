import React, { useEffect, useState } from "react";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const AboutMe = () => {
  const [animateDoor, setAnimateDoor] = useState("");
  const [allowClick, setAllowClick] = useState(true);

  const handleAnimationEnd = (e) => {
    setAllowClick(true);
    console.log("animation ended");
  };

  const handleDoorClick = () => {
    console.log("clicked door");

    if (allowClick) {
      setAnimateDoor((prev) =>
        prev === "openDoor" ? "closeDoor" : "openDoor"
      );

      setAllowClick(false);
    }
  };

  return (
    <>
      {animateDoor === "" && (
        <p className="text-3xl text-blue-950 absolute left-2 top-1/4 w-80 font-light  ">
          Welcome to my space! <br /> Feel free to explore more by clicking on
          the door.
        </p>
      )}
      <div className="flex justify-center items-center flex-col  relative  ">
        <div className="flex justify-center items-center relative">
          <span
            className={`z-10 flex w-[250px] h-[340px]  text-center bg-center bg-contain hover:shadow-2xl ${
              animateDoor === "openDoor"
                ? "doorOpenAnimation"
                : animateDoor === "closeDoor"
                ? "doorCloseAnimation"
                : " "
            } `}
            onClick={handleDoorClick}
            onAnimationEnd={handleAnimationEnd}
            style={{ backgroundImage: `url("/images/theDOOR.png")` }}
          ></span>
          <span className="absolute h-full w-full flex items-center justify-center">
            {animateDoor === "" && (
              <AdsClickIcon
                className=" z-10 animate-pulse mt-24 pointer-events-none"
                style={{ width: "4em", height: "4em" }}
              />
            )}
          </span>
          <span className="absolute border-4 border-black bg-gray-950 bg-opacity-90 w-[245px] h-[335px] flex flex-col items-center">
            <img
              src="/images/linkedinProf.webp"
              className="rounded-full w-28 h-28 object-cover m-4"
              alt="profile picture"
            />
            <p className="mx-4  text-center text-gray-200 text-xs   font-light">
              Hello my name is Nathan, I'm passionate about crafting engaging
              and practical applications. Whether you need a website developed
              or have a software engineering opportunity, I'm here to help. Feel
              free to reach out, and let's discuss how we can collaborate.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
