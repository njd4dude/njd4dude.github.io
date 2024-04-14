import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// NOTE: i should change the hover:scale-110 to put it on the <a> tag itself rather than the p tag
const Contact = () => {
  return (
    <div className="mt-24 text-black">
      <address className="  mx-8 px-3 pb-8 pt-2 border-2 bg-white border-black   flex justify-center flex-col   ">
        <h2 className="font-bold text-2xl">Contact Information:</h2>
        <hr className="border-t-2 border-black mb-2" />
        <div className=" mx-8  py-2 text-lg font-round ">
          <p className="hover:scale-110 w-fit ">
            <EmailIcon className="mr-3" />
            <a className="" href="mailto:njdonato30@gmail.com">
              njdonato30@gmail.com
            </a>
          </p>
          <p className="hover:scale-110  w-fit">
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
          <p className="hover:scale-110  w-fit">
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
        </div>
      </address>
    </div>
  );
};

export default Contact;
