import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useWindowSize } from "react-use";
import isTouchDevice from "../constants";
//editing contact inforamtion layout for iphone

const Contact = () => {
  const { width, height } = useWindowSize();
  const iphone = width < 1000;
  return (
    <div className="mt-24 text-black flex justify-center">
      <address className="w-96 py-6 bg-white shadow-2xl rounded-lg flex justify-center flex-col items-center not-italic ">
        <span className="font-bold text-3xl text-center  w-4/5 p-2 rounded-lg mb-4">
          CONTACT
        </span>
        <div className="ml-2 text-sm md:text-lg space-y-4 ">
          <p
            className={`flex justify-center  ${
              isTouchDevice
                ? "hover:bg-black hover:bg-opacity-50"
                : "hover:scale-105"
            } w-fit`}
          >
            <a className="flex items-center" href="mailto:njdonato30@gmail.com">
              <span>
                <EmailIcon className="mr-3 " />
              </span>
              njdonato30@gmail.com
            </a>
          </p>
          <p
            className={`flex justify-center  ${
              isTouchDevice
                ? "hover:bg-black hover:bg-opacity-50"
                : "hover:scale-105"
            } w-fit`}
          >
            <a
              className="flex items-center"
              href="https://www.linkedin.com/in/nathan-donato-4a0742242/"
              target="_blank"
              rel="noopener noreferrer" //for safety always add this when adding target="_blank"
            >
              <span>
                <LinkedInIcon className="mr-3   " sx={{ color: "#0077B5" }} />
              </span>
              linkedin.com/in/nathan-donato-4a0742242/
            </a>
          </p>
          <p
            className={`flex justify-center  ${
              isTouchDevice
                ? "hover:bg-black hover:bg-opacity-50"
                : "hover:scale-105"
            } w-fit`}
          >
            <a
              className="flex items-center"
              href="https://github.com/njd4dude"
              target="_blank"
              rel="noopener noreferrer" //for safety always add this when adding target="_blank"
            >
              <span>
                <GitHubIcon className="mr-3 " />
              </span>
              github.com/njd4dude
            </a>
          </p>
        </div>
      </address>
    </div>
  );
};

export default Contact;
