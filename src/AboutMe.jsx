import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);

  const handleContactClick = () => {
    console.log("clicked");
    setContactVisible(!isContactVisible);
  };

  return (
    <div className="bg-slate-600 flex items-center justify-center h-screen flex-col relative">
      <div
        className="flex justify-center items-center "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`text-6xl z-10 transition-opacity flex w-[440px] h-[600px] justify-center items-center text-center bg-center bg-contain ${
            isHovered && "doorOpen"
          }`}
          style={{
            backgroundImage: `url("/images/theDOOR.png")`,
          }}
        >
          <span className={`font-bubble  ${isHovered && "textFade"}`}>
            Who is Nathan Donato?
          </span>
        </div>
        <span className="absolute top-10 bg-gray-700 w-[440px] h-[580px] flex flex-col items-center">
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
            onClick={handleContactClick}
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
