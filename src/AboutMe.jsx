import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const AboutMe = () => {
  const [animateDoor, setAnimateDoor] = useState("");
  const [hoverDoor, setHoverDoor] = useState("");
  const [allowClick, setAllowClick] = useState(true);
  const [isContactVisible, setContactVisible] = useState(false);

  const handleContactClick = (e) => {
    console.log("clicked");
    setContactVisible(!isContactVisible);
    e.stopPropagation();
  };

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
    <div className="bg-slate-600 flex items-center justify-center h-screen flex-col  ">
      <div className="flex justify-center items-center relative  ">
        <span
          className={` z-10 transition-opacity flex w-[440px] h-[600px]  text-center bg-center bg-contain hover:shadow-2xl ${
            animateDoor === "openDoor"
              ? "doorOpen"
              : animateDoor === "closeDoor"
              ? "doorClose"
              : " "
          } `}
          onClick={handleDoorClick}
          onMouseEnter={() => setHoverDoor(true)}
          onMouseLeave={() => setHoverDoor(false)}
          onAnimationEnd={handleAnimationEnd}
          style={{ backgroundImage: `url("/images/theDOOR.png")` }}
        >
          <span
            className={` flex justify-center w-full font-mina font-extrabold text-6xl ${
              animateDoor === "openDoor"
                ? "textFade"
                : animateDoor === "closeDoor"
                ? "textFadeIn"
                : ""
            }`}
          >
            <p
              className={` bg-opacity-40 p-6 whitespace-pre-line h-36 relative mt-32 mr-3`}
            >
              Who {"\n"} is
            </p>
            <p
              className={`bg-opacity-40  absolute bottom-[68px] whitespace-pre-line `}
            >
              Nathan{"\n"} Donato
            </p>
          </span>
        </span>
        <span className="absolute h-full w-full flex items-center justify-center">
          {animateDoor === "" && (
            <AdsClickIcon
              className=" z-10 animate-pulse mt-24"
              style={{ width: "4em", height: "4em" }}
            />
          )}
        </span>

        <span className="absolute bg-red-700 w-[440px] h-[580px] flex flex-col items-center">
          <img
            src="/images/linkedinProf.webp"
            className="rounded-full w-56 h-56 object-cover mt-4"
            alt="profile picture"
          />
          <p className="mx-5 my-5 text-center text-gray-200">
            Hello my name is Nathan, I'm passionate about crafting engaging and
            practical applications. Whether you need a website developed or have
            a software engineering opportunity, I'm here to help. Feel free to
            reach out, and let's discuss how we can collaborate.
          </p>
          <button
            className="text-center bg-white p-4 hover:shadow-lg  "
            onClick={(e) => handleContactClick(e)}
          >
            Contact Me
          </button>

          {isContactVisible && (
            <address className="absolute bottom-2  border bg-white border-gray-500 rounded-lg p-4  text-sm">
              <p className="hover:scale-110">
                <EmailIcon className="mr-3" />
                <a className="" href="mailto:njdonato30@gmail.com">
                  njdonato30@gmail.com
                </a>
              </p>
              <p className="hover:scale-110">
                <LinkedInIcon className="mr-3" sx={{ color: "#0077B5" }} />
                <a
                  className=""
                  href="https://www.linkedin.com/in/nathan-donato-4a0742242/"
                  target="_blank"
                  rel="noopener noreferrer" //for safety always add this when adding target="_blank"
                >
                  https://www.linkedin.com/in/nathan-donato-4a0742242/
                </a>
              </p>
              <p className="hover:scale-110">
                <GitHubIcon className="mr-3 " />
                <a
                  className=""
                  href="https://github.com/njd4dude"
                  target="_blank"
                  rel="noopener noreferrer" //for safety always add this when adding target="_blank"
                >
                  https://github.com/njd4dude
                </a>
              </p>
            </address>
          )}
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
