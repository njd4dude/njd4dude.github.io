import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useWindowSize } from "react-use";
//editing contact inforamtion layout for iphone

const Contact = () => {
  const { width, height } = useWindowSize();
  const iphone = width < 1000;
  return (
    <div className="mt-24 text-black flex justify-center mx-12 lg:mx-0 ">
      <address className="px-3 py-4  bg-white rounded-lg  flex justify-center flex-col items-center not-italic ">
        <span className="font-bold text-3xl text-center  w-4/5 p-2 rounded-lg ">
          Contact 
        </span>
        <div className="flex items-center lg:block mx-8 py-2 text-sm lg:text-lg lg:space-y-4 ">
          <p className="flex justify-center w-full lg:hover:scale-110 lg:w-fit bg-red-500  ">
            <a className="flex" href="mailto:njdonato30@gmail.com">
              <EmailIcon
                style={iphone ? { fontSize: "100px" } : {}}
                className="lg:mr-3 "
              />
              {!iphone && "njdonato30@gmail.com"}
            </a>
          </p>
          <p className="flex justify-center w-full lg:hover:scale-110 lg:w-fit bg-blue-500 ">
            <a
              className="whitespace-"
              href="https://www.linkedin.com/in/nathan-donato-4a0742242/"
              target="_blank"
              rel="noopener noreferrer" //for safety always add this when adding target="_blank"
            >
              <LinkedInIcon
                style={iphone ? { fontSize: "100px" } : {}}
                className="lg:mr-3  "
                sx={{ color: "#0077B5" }}
              />

              {!iphone &&
                "https://www.linkedin.com/in/nathan-donato-4a0742242/"}
            </a>
          </p>
          <p className="flex justify-center w-full lg:hover:scale-110 lg:w-fit bg-red-500 ">
            <a
              className=""
              href="https://github.com/njd4dude"
              target="_blank"
              rel="noopener noreferrer" //for safety always add this when adding target="_blank"
            >
              <GitHubIcon style={iphone ? { fontSize: "100px" } : {}} className="lg:mr-3 " />
              {!iphone && "https://github.com/njd4dude"}
            </a>
          </p>
        </div>
      </address>
    </div>
  );
};

export default Contact;
