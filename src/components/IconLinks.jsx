import React, { useEffect, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
//task need to work on icon links for mobile
const IconLinks = () => {
  return (
    <div className="flex bg-[#d0d0d0] justify-center space-x-20 md:space-x-64 rounded-b-2xl p-1 mt-1 shadow-2xl">
      <p className="hover:scale-110 transition">
        <a className="" href="mailto:njdonato30@gmail.com">
          <EmailIcon style={{ fontSize: "45px" }} className="" />
        </a>
      </p>
      <p className="hover:scale-110 transition">
        <a
          className=""
          href="https://www.linkedin.com/in/nathan-donato-4a0742242/"
          target="_blank"
          rel="noopener noreferrer" //for safety always add this when adding target="_blank"
        >
          <LinkedInIcon
            style={{ fontSize: "45px" }}
            className=" "
            sx={{ color: "#0077B5" }}
          />
        </a>
      </p>
      <p className="hover:scale-110 transition ">
        <a
          className=""
          href="https://github.com/njd4dude"
          target="_blank"
          rel="noopener noreferrer" //for safety always add this when adding target="_blank"
        >
          <GitHubIcon style={{ fontSize: "45px" }} className="" />
        </a>
      </p>
    </div>
  );
};

export default IconLinks;
